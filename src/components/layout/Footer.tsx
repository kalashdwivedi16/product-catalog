
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

function Footer() {
  const backgroundColor = useColorModeValue(
    "gray.100",
    "gray.800"
  );

  const textColor = useColorModeValue(
    "gray.600",
    "gray.400"
  );

  return (
    <Box
      as="footer"
      width="100%"
      background={backgroundColor}
      py={10}
      mt="auto"
    >
      <Container maxW="container.xl">

        <Grid
          templateColumns={{
            base: "1fr",
            md: "2fr 1fr 1fr",
          }}
          gap={8}
        >

          {/* Application Information */}
          <GridItem>
            <VStack align="start" spacing={3}>
              <Heading size="lg" color="blue.500">
                ProductHub
              </Heading>

              <Text color={textColor}>
                Discover amazing products at great prices.
                Find your favourite products in one place.
              </Text>
            </VStack>
          </GridItem>

          {/* Quick Links */}
          <GridItem>
            <VStack align="start" spacing={3}>
              <Heading size="md">
                Quick Links
              </Heading>

              <Link as={RouterLink} to="/">
                Home
              </Link>

              <Link as={RouterLink} to="/products">
                Products
              </Link>

              <Link as={RouterLink} to="/contact">
                Contact Us
              </Link>
            </VStack>
          </GridItem>

          {/* Contact Information */}
          <GridItem>
            <VStack align="start" spacing={3}>
              <Heading size="md">
                Contact Information
              </Heading>

              <Text color={textColor}>
                Email: support@producthub.com
              </Text>

              <Text color={textColor}>
                Phone: +91 9876543210
              </Text>
            </VStack>
          </GridItem>

        </Grid>

        {/* Copyright Section */}
        <Box
          borderTopWidth="1px"
          borderColor="gray.300"
          mt={8}
          pt={5}
          textAlign="center"
        >
          <Text fontSize="sm" color={textColor}>
            © {new Date().getFullYear()} ProductHub.
            All rights reserved.
          </Text>
        </Box>

      </Container>
    </Box>
  );
}

export default Footer;
