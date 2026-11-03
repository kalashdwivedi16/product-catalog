
import {
  createBrowserRouter,
} from "react-router-dom";

// Common Layout
import Layout from "../components/layout/Layout";

// Application Pages
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    // Common application layout
    path: "/",
    element: <Layout />,

    // All application pages
    children: [
      {
        // Home Page
        index: true,
        element: <HomePage />,
      },

      {
        // Product Catalog Page
        path: "products",
        element: <ProductsPage />,
      },

      {
        // Product Details Page
        path: "products/:id",
        element: <ProductDetailPage />,
      },

      {
        // Contact Us Page
        path: "contact",
        element: <ContactPage />,
      },

      {
        // 404 Page
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
