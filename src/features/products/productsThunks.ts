
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import {
  getErrorMessage,
  getProductById,
  getProducts,
} from "../../services/api";
import type { Product } from "./types";

const CACHE_DURATION = 5 * 60 * 1000;

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState; rejectValue: string }
>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts();
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState().products;

      if (state.listStatus === "loading") {
        return false;
      }

      const cacheIsFresh =
        state.fetchedAt !== null &&
        Date.now() - state.fetchedAt < CACHE_DURATION;

      if (state.items.length > 0 && cacheIsFresh) {
        return false;
      }

      return true;
    },
  }
);

export const fetchProductById = createAsyncThunk<
  Product,
  number,
  { state: RootState; rejectValue: string }
>(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      return await getProductById(id);
    } catch (error: unknown) {
      return rejectWithValue(getErrorMessage(error));
    }
  },
  {
    condition: (id, { getState }) => {
      const state = getState().products;

      if (state.detailStatus === "loading") {
        return false;
      }

      const alreadyLoaded =
        state.selectedProduct?.id === id &&
        state.detailStatus === "succeeded";

      return !alreadyLoaded;
    },
  }
);
