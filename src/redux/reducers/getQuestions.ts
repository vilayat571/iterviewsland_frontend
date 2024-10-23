import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../../constants/Apiurl";

interface IQuestion {
  title: string;
  category: string;
  number: number;
}

interface IQuestionsState {
  questions: IQuestion[] | null;
  loading: boolean;
  error: string | null;
}

// Initial State
const initialState: IQuestionsState = {
  questions: null,
  loading: true,
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async ({ sCategory }: { sCategory: string }) => {
    const response = await fetch(`${url}/questions/${sCategory}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.questions;
  }
);

// Slice
const getQuestions = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle questions
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch questions";
      state.loading = false;
    });
  },
});

// Reducer
export default getQuestions.reducer;
