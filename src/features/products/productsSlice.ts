
import { createSlice } from "@reduxjs/toolkit";
import type { ProductsState } from "./types";
import {
  fetchProductById,
  fetchProducts,
} from "./productsThunks";

const initialState: ProductsState = {
  items: [],
  selectedProduct: null,
  listStatus: "idle",
  detailStatus: "idle",
  listError: null,
  detailError: null,
  fetchedAt: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    clearSelectedProduct(state) {
      state.selectedProduct = null;
      state.detailStatus = "idle";
      state.detailError = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.listStatus = "loading";
        state.listError = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.listStatus = "succeeded";
        state.listError = null;
        state.fetchedAt = Date.now();
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (action.meta.condition) return;

        state.listStatus = "failed";
        state.listError =
          action.payload ?? "Unable to load products.";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailStatus = "loading";
        state.detailError = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.detailStatus = "succeeded";
        state.detailError = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        if (action.meta.condition) return;

        state.detailStatus = "failed";
        state.detailError =
          action.payload ?? "Unable to load this product.";
      });
  },
});

export const { clearSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
