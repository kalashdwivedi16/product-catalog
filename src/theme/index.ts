
import { extendTheme } from "@chakra-ui/react";

// Theme configuration
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Custom application theme
const theme = extendTheme({
  config,

  // Application colors
  colors: {
    brand: {
      50: "#e6f2ff",
      100: "#b3d7ff",
      200: "#80bdff",
      300: "#4da3ff",
      400: "#1a89ff",
      500: "#006fe6",
      600: "#0057b3",
      700: "#004080",
      800: "#00294d",
      900: "#00121a",
    },
  },

  // Application fonts
  fonts: {
    heading: "Inter, Arial, sans-serif",
    body: "Inter, Arial, sans-serif",
  },

  // Global styling
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },

  // Default component styling
  components: {
    Button: {
      defaultProps: {
        colorScheme: "blue",
      },
    },
  },
});

export default theme;
