
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Get the complete Redux state type
export type RootState = ReturnType<typeof store.getState>;

// Get the Redux dispatch type
export type AppDispatch = typeof store.dispatch;
