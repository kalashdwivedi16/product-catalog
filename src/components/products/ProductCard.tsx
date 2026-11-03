
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

import type { Product } from "../../features/products/types";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const cardBackground = useColorModeValue(
    "white",
    "gray.800"
  );

  const borderColor = useColorModeValue(
    "gray.200",
    "gray.700"
  );

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      background={cardBackground}
      overflow="hidden"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
      }}
    >
      <VStack align="stretch" spacing={3} p={4}>

        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.title}
          height="200px"
          width="100%"
          objectFit="contain"
        />

        {/* Product Category */}
        <Badge
          colorScheme="blue"
          width="fit-content"
          textTransform="capitalize"
        >
          {product.category}
        </Badge>

        {/* Product Name */}
        <Text
          fontWeight="semibold"
          fontSize="md"
          noOfLines={2}
          minHeight="48px"
        >
          {product.title}
        </Text>

        {/* Product Price */}
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="blue.500"
        >
          ${product.price.toFixed(2)}
        </Text>

        {/* Product Rating */}
        <HStack spacing={2}>
          <Text fontSize="sm" color="orange.400">
            ★ {product.rating.rate}
          </Text>

          <Text fontSize="sm" color="gray.500">
            ({product.rating.count} reviews)
          </Text>
        </HStack>

        {/* View Details Button */}
        <Button
          as={RouterLink}
          to={`/products/${product.id}`}
          colorScheme="blue"
          width="100%"
        >
          View Details
        </Button>

      </VStack>
    </Box>
  );
}

export default ProductCard;
