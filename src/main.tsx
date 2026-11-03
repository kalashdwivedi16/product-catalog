
import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store } from "./app/store";

// Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

// Main Application
import App from "./App";

// Global CSS
import "./index.css";

// Create React application
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    {/* Redux Store Provider */}
    <Provider store={store}>

      {/* Chakra UI Theme Provider */}
      <ChakraProvider theme={theme}>

        {/* Main Application Component */}
        <App />

      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
