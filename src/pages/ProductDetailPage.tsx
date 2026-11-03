
import { useEffect } from "react";

import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  useParams,
  Link as RouterLink,
} from "react-router-dom";

import { ArrowBackIcon } from "@chakra-ui/icons";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import {
  selectSelectedProduct,
  selectDetailStatus,
  selectDetailError,
} from "../features/products/selectors";

import { fetchProductById } from "../features/products/productsThunks";

import ErrorState from "../components/common/ErrorState";

function ProductDetailPage() {
  // Get product ID from URL
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  // Get product information from Redux
  const product = useAppSelector(selectSelectedProduct);

  const detailStatus = useAppSelector(selectDetailStatus);

  const detailError = useAppSelector(selectDetailError);

  // Theme colors
  const cardBackground = useColorModeValue(
    "white",
    "gray.800"
  );

  const borderColor = useColorModeValue(
    "gray.200",
    "gray.700"
  );

  // Convert URL ID into a number
  const productId = Number(id);

  // Validate product ID
  const isValidId =
    id !== undefined &&
    id.trim() !== "" &&
    Number.isInteger(productId) &&
    productId > 0;

  // Fetch product details
  useEffect(() => {
    if (isValidId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId, isValidId]);

  // Retry API request
  const handleRetry = () => {
    if (isValidId) {
      dispatch(fetchProductById(productId));
    }
  };

  // Invalid product ID
  if (!isValidId) {
    return (
      <VStack spacing={4} py={16}>
        <Heading size="lg">
          Invalid Product ID
        </Heading>

        <Text color="gray.500">
          Please provide a valid product ID.
        </Text>

        <Button
          as={RouterLink}
          to="/products"
          colorScheme="blue"
        >
          Back to Products
        </Button>
      </VStack>
    );
  }

  // Loading state
  if (
    detailStatus === "loading" ||
    (detailStatus === "succeeded" && product?.id !== productId)
  ) {
    return (
      <VStack spacing={4} py={16}>
        <Spinner size="xl" color="blue.500" />

        <Text color="gray.500">
          Loading product details...
        </Text>
      </VStack>
    );
  }

  // Error state
  if (detailStatus === "failed" && product?.id !== productId) {
    return (
      <ErrorState
        message={
          detailError ?? "Unable to load product details."
        }
        onRetry={handleRetry}
      />
    );
  }

  // Product not found
  if (!product || product.id !== productId) {
    return (
      <VStack spacing={4} py={16}>
        <Heading size="lg">
          Product Not Found
        </Heading>

        <Text color="gray.500">
          We could not find this product.
        </Text>

        <Button
          as={RouterLink}
          to="/products"
          colorScheme="blue"
        >
          Back to Products
        </Button>
      </VStack>
    );
  }

  return (
    <Box>
      {/* Back Button */}
      <Button
        as={RouterLink}
        to="/products"
        leftIcon={<ArrowBackIcon />}
        variant="outline"
        mb={6}
      >
        Back to Products
      </Button>

      {/* Product Information */}
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
        }}
        gap={8}
        alignItems="start"
        background={cardBackground}
        borderWidth="1px"
        borderColor={borderColor}
        borderRadius="lg"
        p={{ base: 4, md: 8 }}
      >
        {/* Product Image */}
        <Box>
          <Image
            src={product.image}
            alt={product.title}
            width="100%"
            height={{ base: "280px", md: "420px" }}
            objectFit="contain"
          />
        </Box>

        {/* Product Details */}
        <VStack align="stretch" spacing={5}>

          {/* Category */}
          <Badge
            colorScheme="blue"
            width="fit-content"
            textTransform="capitalize"
          >
            {product.category}
          </Badge>

          {/* Product Name */}
          <Heading size="lg">
            {product.title}
          </Heading>

          {/* Product Price */}
          <Heading size="xl" color="blue.500">
            ${product.price.toFixed(2)}
          </Heading>

          {/* Product Rating */}
          <HStack spacing={2}>
            <Text color="orange.400" fontWeight="bold">
              ★ {product.rating.rate}
            </Text>

            <Text color="gray.500">
              ({product.rating.count} reviews)
            </Text>
          </HStack>

          {/* Product Description */}
          <Box>
            <Heading size="sm" mb={2}>
              Product Description
            </Heading>

            <Text lineHeight="tall" color="gray.600">
              {product.description}
            </Text>
          </Box>

          {/* Continue Shopping */}
          <Button
            as={RouterLink}
            to="/products"
            colorScheme="blue"
            width="fit-content"
          >
            Continue Shopping
          </Button>

        </VStack>
      </Grid>
    </Box>
  );
}

export default ProductDetailPage;
