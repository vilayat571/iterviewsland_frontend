import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface IExperience {
  title: string;
  category: string;
  number: number;
}

interface IExperiencesState {
  experiences: IExperience[] | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: IExperiencesState = {
  experiences: null,
  loading: true,
  error: null,
};

export const fetchExperiences = createAsyncThunk(
  "/fetchExperiences",
  async ({ limit, category }: { limit: string | number; category: string }) => {
    const response = await fetch(
        `https://interviewsland-backend.onrender.com/api/v1/experiences/?skip=0&limit=${limit}${
          category !== "Kateqoriyalar" ? `&category=${category}` : ""
        }`
      );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.experiences;
  }
);

// Slice
const getExperiences = createSlice({
  name: "experiences",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle experiences
    builder.addCase(fetchExperiences.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchExperiences.fulfilled, (state, action) => {
      state.experiences = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchExperiences.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch experiences";
      state.loading = false;
    });
  },
});

// Reducer
export default getExperiences.reducer;
