
import axios from "axios";
import type { Product } from "../features/products/types";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

export async function getProducts(): Promise<Product[]> {
  const response = await api.get<Product[]>("/products");
  return response.data;
}

export async function getProductById(id: number): Promise<Product> {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
}

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (error.code === "ECONNABORTED") {
      return "The request timed out. Please try again.";
    }

    if (error.response) {
      return `The server returned an error (${error.response.status}). Please try again.`;
    }

    return "Unable to connect to the server. Check your internet connection.";
  }

  return "Something went wrong. Please try again.";
}
