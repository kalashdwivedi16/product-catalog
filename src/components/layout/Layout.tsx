
import { Box, Flex, Container } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <Box
        as="main"
        flex="1"
        width="100%"
        py={8}
      >
        <Container maxW="container.xl">
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}

export default Layout;
