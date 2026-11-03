
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

function NotFoundPage() {
  const headingColor = useColorModeValue(
    "gray.700",
    "gray.200"
  );

  return (
    <Box width="100%" py={20}>
      <VStack spacing={5} textAlign="center">

        {/* Error Code */}
        <Heading
          fontSize={{ base: "6xl", md: "8xl" }}
          color="blue.500"
        >
          404
        </Heading>

        {/* Error Heading */}
        <Heading size="lg" color={headingColor}>
          Page Not Found
        </Heading>

        {/* Error Message */}
        <Text color="gray.500" maxWidth="400px">
          Sorry! The page you are looking for does not exist
          or may have been moved.
        </Text>

        {/* Back to Home Button */}
        <Button
          as={RouterLink}
          to="/"
          colorScheme="blue"
          size="lg"
        >
          Back to Home
        </Button>

      </VStack>
    </Box>
  );
}

export default NotFoundPage;
