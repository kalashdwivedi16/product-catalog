
import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navbarBackground = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      as="nav"
      position="sticky"
      top={0}
      zIndex={10}
      width="100%"
      px={{ base: 4, md: 8 }}
      py={4}
      align="center"
      justify="space-between"
      background={navbarBackground}
      borderBottom="1px solid"
      borderColor={borderColor}
      boxShadow="sm"
    >
      {/* Application Logo */}
      <Heading
        as={RouterLink}
        to="/"
        size="md"
        color="blue.500"
        _hover={{ textDecoration: "none" }}
      >
        ProductHub
      </Heading>

      {/* Navigation Links */}
      <HStack spacing={{ base: 3, md: 6 }}>
        <Link
          as={RouterLink}
          to="/"
          fontWeight="medium"
          _hover={{ color: "blue.500", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          as={RouterLink}
          to="/products"
          fontWeight="medium"
          _hover={{ color: "blue.500", textDecoration: "none" }}
        >
          Products
        </Link>

        <Link
          as={RouterLink}
          to="/contact"
          fontWeight="medium"
          _hover={{ color: "blue.500", textDecoration: "none" }}
        >
          Contact Us
        </Link>

        {/* Dark / Light Mode Toggle */}
        <IconButton
          aria-label={
            colorMode === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
        />
      </HStack>
    </Flex>
  );
}

export default Navbar;
