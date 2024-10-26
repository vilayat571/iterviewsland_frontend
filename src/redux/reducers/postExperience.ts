import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IExperience } from "../../pages/Questions/Share";

// Define the initial state for the slice
const initialState: {
    loading: boolean;
    error: string | null;
    data: any;
} = {
    loading: false,
    error: null,
    data: null,
};


// Create an async thunk for sending experience data
const sendExperienceText = createAsyncThunk(
    'experience/sendExperienceText',
    async ({ formData, description }: { formData: IExperience; description: string }) => {
        const url = 'https://interviewsland-backend.onrender.com/api/v1/experiences/add';
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category: formData.category, // Default empty value; placeholder will show initially
                fullName: formData.fullName,
                status: false,
                title: formData.title,
                description,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send experience text');
        }

        return response.json(); // Return the parsed response
    }
);

// Create a slice for posting experience data
const postExperience = createSlice({
    name: 'postExperience',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendExperienceText.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(sendExperienceText.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(sendExperienceText.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? null; // Use null if undefined
            });
    },
});

// Export the async thunk and the slice reducer
export { sendExperienceText };
export default postExperience.reducer;
