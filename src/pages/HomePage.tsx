
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

function HomePage() {
  return (
    <Box>
      {/* Welcome Banner */}
      <Box
        bg="blue.600"
        color="white"
        borderRadius="xl"
        p={{ base: 6, md: 12 }}
        textAlign="center"
      >
        <VStack spacing={5}>
          <Heading size="2xl">
            Welcome to ProductHub
          </Heading>

          <Text fontSize="lg">
            Discover amazing products at great prices.
            Find everything you need in one place.
          </Text>

          <Button
            as={RouterLink}
            to="/products"
            colorScheme="whiteAlpha"
            size="lg"
          >
            Explore Products
          </Button>
        </VStack>
      </Box>

      {/* Categories Section */}
      <Container maxW="container.xl" py={12}>
        <Heading size="xl" mb={6} textAlign="center">
          Shop By Category
        </Heading>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
          <Box
            bg="gray.100"
            color="gray.800"
            p={6}
            borderRadius="lg"
            textAlign="center"
          >
            <Heading size="md">Electronics</Heading>
            <Text mt={2}>Explore electronic products</Text>
          </Box>

          <Box
            bg="gray.100"
            color="gray.800"
            p={6}
            borderRadius="lg"
            textAlign="center"
          >
            <Heading size="md">Jewellery</Heading>
            <Text mt={2}>Discover beautiful jewellery</Text>
          </Box>

          <Box
            bg="gray.100"
            color="gray.800"
            p={6}
            borderRadius="lg"
            textAlign="center"
          >
            <Heading size="md">Men's Clothing</Heading>
            <Text mt={2}>Explore men's fashion</Text>
          </Box>

          <Box
            bg="gray.100"
            color="gray.800"
            p={6}
            borderRadius="lg"
            textAlign="center"
          >
            <Heading size="md">Women's Clothing</Heading>
            <Text mt={2}>Explore women's fashion</Text>
          </Box>
        </SimpleGrid>

        {/* Featured Products Section */}
        <Box textAlign="center" mt={16}>
          <Heading size="xl" mb={3}>
            Explore Our Products
          </Heading>

          <Text color="gray.500" mb={6}>
            Browse our collection and find your favourite products.
          </Text>

          <Button
            as={RouterLink}
            to="/products"
            colorScheme="blue"
            size="lg"
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
