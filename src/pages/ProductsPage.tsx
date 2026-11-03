
import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  selectProducts,
  selectListStatus,
  selectListError,
} from "../features/products/selectors";

import { fetchProducts } from "../features/products/productsThunks";

import ProductCard from "../components/products/ProductCard";
import LoadingGrid from "../components/common/LoadingGrid";
import ErrorState from "../components/common/ErrorState";

function ProductsPage() {
  const dispatch = useAppDispatch();

  // Get products from Redux
  const products = useAppSelector(selectProducts);

  const listStatus = useAppSelector(selectListStatus);

  const listError = useAppSelector(selectListError);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [sortOption, setSortOption] = useState("");

  // Fetch products when the page loads
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get unique product categories
  const categories = useMemo(() => {
    return Array.from(
      new Set(products.map((product) => product.category))
    );
  }, [products]);

  // Search, filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search by product name
    if (searchTerm.trim() !== "") {
      result = result.filter((product) =>
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim())
      );
    }

    // Filter by category
    if (selectedCategory !== "") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    if (sortOption === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortOption === "rating") {
      result.sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption,
  ]);

  // Clear all filters
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSortOption("");
  };

  // Retry API request
  const handleRetry = () => {
    dispatch(fetchProducts());
  };

  // Loading state
  if (listStatus === "loading" && products.length === 0) {
    return <LoadingGrid />;
  }

  // Error state
  if (listStatus === "failed" && products.length === 0) {
    return (
      <ErrorState
        message={listError ?? "Unable to load products."}
        onRetry={handleRetry}
      />
    );
  }

  // Empty product list
  if (listStatus === "succeeded" && products.length === 0) {
    return (
      <VStack spacing={3} py={16}>
        <Heading size="lg">No Products Found</Heading>

        <Text color="gray.500">
          There are currently no products available.
        </Text>
      </VStack>
    );
  }

  return (
    <Box>
      {/* Page Heading */}
      <Box mb={8}>
        <Heading size="xl" mb={2}>
          Our Product Catalog
        </Heading>

        <Text color="gray.500">
          Search, filter and explore our products.
        </Text>
      </Box>

      {/* Search and Filter Section */}
      <VStack
        align="stretch"
        spacing={4}
        mb={8}
        p={5}
        borderWidth="1px"
        borderRadius="lg"
      >
        <Heading size="md">
          Find Your Product
        </Heading>

        {/* Search Input */}
        <Input
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />

        {/* Category and Sorting Filters */}
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={4}
        >
          <Select
            placeholder="All Categories"
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>

          <Select
            placeholder="Sort Products"
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value)
            }
          >
            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Rating: High to Low
            </option>
          </Select>
        </Grid>

        {/* Results Count and Clear Button */}
        <HStack
          justify="space-between"
          flexWrap="wrap"
          spacing={3}
        >
          <Text fontSize="sm" color="gray.500">
            {filteredProducts.length} products found
          </Text>

          <Button
            colorScheme="blue"
            variant="outline"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
        </HStack>
      </VStack>

      {/* Refresh Error */}
      {listStatus === "failed" && (
        <Box mb={6}>
          <ErrorState
            message={listError ?? "Unable to refresh products."}
            onRetry={handleRetry}
          />
        </Box>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Grid>
      ) : (
        <VStack spacing={3} py={12}>
          <Heading size="md">
            No Matching Products
          </Heading>

          <Text color="gray.500">
            Try changing your search or filter options.
          </Text>

          <Button
            colorScheme="blue"
            onClick={handleClearFilters}
          >
            Clear Filters
          </Button>
        </VStack>
      )}
    </Box>
  );
}

export default ProductsPage;
