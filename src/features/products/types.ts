
export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export type RequestStatus =
  | "idle"
  | "loading"
  | "succeeded"
  | "failed";

export interface ProductsState {
  items: Product[];
  selectedProduct: Product | null;
  listStatus: RequestStatus;
  detailStatus: RequestStatus;
  listError: string | null;
  detailError: string | null;
  fetchedAt: number | null;
}
