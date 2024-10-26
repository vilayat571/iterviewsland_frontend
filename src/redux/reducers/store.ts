import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import getQuestions from "./getQuestions";
import getExperiences from "./getExperiences";
import postExperience from "./postExperience";

export const store = configureStore({
  reducer: {
    getQuestions: getQuestions,
    getExperiences: getExperiences,
    postExperience:postExperience
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
