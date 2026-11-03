import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Get the complete products state
export const selectProductsState = (state: RootState) =>
  state.products;

// Get all products
export const selectProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.items
);

// Get the currently selected product
export const selectSelectedProduct = createSelector(
  [selectProductsState],
  (productsState) => productsState.selectedProduct
);

// Get the product list loading status
export const selectListStatus = createSelector(
  [selectProductsState],
  (productsState) => productsState.listStatus
);

// Get the product list error
export const selectListError = createSelector(
  [selectProductsState],
  (productsState) => productsState.listError
);

// Get the product detail loading status
export const selectDetailStatus = createSelector(
  [selectProductsState],
  (productsState) => productsState.detailStatus
);

// Get the product detail error
export const selectDetailError = createSelector(
  [selectProductsState],
  (productsState) => productsState.detailError
);