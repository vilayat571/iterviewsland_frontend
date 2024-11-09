import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IStateOfAuthors {
    authors: null | string[], // Assuming authors is an array of strings; adjust type if necessary
    loading: string,
    error: string | null | undefined,
}

// Define the initial state
const initialState: IStateOfAuthors = {
    authors: null,
    loading: "",
    error: null,
};

// Create an async thunk to fetch authors
export const fetchAuthors = createAsyncThunk(
    'authors/fetchAuthors',
    async ({ category }: { category: string }) => {
        const uri = `https://interviews-land.info/api/v1/categories/${category}`;
        const response = await fetch(uri);
        const data = await response.json();
        return data.category?.contributors; // Return the authors from the response
    }
);

// Create the slice
const getAuthors = createSlice({
    name: 'authors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthors.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchAuthors.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.authors = action.payload; // Store the fetched authors
            })
            .addCase(fetchAuthors.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message ?? null; // Use null if message is undefined
            });
    },
});

// Export the reducer to be used in the store
export default getAuthors.reducer;
