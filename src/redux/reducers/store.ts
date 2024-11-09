import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import getQuestions from "./getQuestions";
import getExperiences from "./getExperiences";
import postExperience from "./postExperience";
import addToCart from "./addToCart";
import getAuthors from "./getAuthors";

export const store = configureStore({
  reducer: {
    getQuestions: getQuestions,
    getExperiences: getExperiences,
    postExperience:postExperience,
    addToCart:addToCart,
    getAuthors:getAuthors
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
