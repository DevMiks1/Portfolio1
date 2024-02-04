/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

// Component
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { LoadingProvider } from "./components/context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const customTheme = extendTheme({
  fonts: {
    script: "Dancing Script, cursive",
    poppins: "Poppins, sans-serif",
  },
  colors: {
    // DARK THEME
    primary: {
      50: "#F0F4F8",
      100: "#D9E2EC",
      200: "#A3B4C8",
      300: "#7F9EB9",
      400: "#667292",
      500: "#475569", // Default color
      600: "#334155",
      700: "#1E293B",
      800: "#0F172A",
      900: "#0A0E13",
    },
    secondary: {
      500: "#3182ce",
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
