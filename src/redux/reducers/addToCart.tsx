import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const savedQuestionsCart:[] = JSON.parse(localStorage.getItem('categories') || '[]');


const initialState: { questionsCart: { category: string }[] } = {
  questionsCart: savedQuestionsCart,
};

const addToCart = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    // Action to add a question to the cart
    addQuestionToCart: (state, action) => {
      const existingItem = state.questionsCart.find(
        (item) => item.category === action.payload.category
      );

      if (!existingItem) {
        // Add the whole item, not just the category string
        state.questionsCart.push({ category: action.payload.category });
        localStorage.setItem("categories", JSON.stringify(state.questionsCart));
        toast(`Sual PDF-ə əlavə edildi!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            style: {
              backgroundColor: "green",
              color: "white",
              fontFamily: "Poppins",
              zIndex: "999",
            },
          });
      } else {
        toast(`Sual PDF-ə artıq əlavə edilib!`, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            style: {
              backgroundColor: "red",
              color: "white",
              fontFamily: "Poppins",
              zIndex: "999",
            },
          });
      }
    },
    // Action to remove a question from the cart
    removeQuestionFromCart: (state, action) => {
      state.questionsCart = state.questionsCart.filter(
        (item) => item.category !== action.payload.category
      );
      localStorage.setItem("categories", JSON.stringify(state.questionsCart));
      toast(`Sual PDF-dən silindi!`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
          zIndex: "999",
        },
      });
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.questionsCart = [];
      localStorage.removeItem("categories"); // Optionally clear localStorage as well
    },
  },
});

// Export actions for dispatching in components
export const { addQuestionToCart, removeQuestionFromCart, clearCart } =
  addToCart.actions;

// Export the reducer to configure the store
export default addToCart.reducer;
