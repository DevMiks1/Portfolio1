import React from "react";
import ReactDOM from "react-dom/client";

// Component
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext"; // Replace with the correct path to your DarkModeContext.js file

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
