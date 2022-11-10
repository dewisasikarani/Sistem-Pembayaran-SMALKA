import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "@fontsource/dm-sans"; // Defaults to weight 400.


const theme = extendTheme({
  fonts: {
    body: "DM Sans, system-ui, sans-serif",
    heading: "DM Sans, system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: (props) => ({
      ".swal-modal": {
        backgroundColor: props.colorMode === "light" ? "#fff" : "#1a202c",
        color: props.colorMode === "light" ? "#000" : "#fff",
      },

      ".swal-modal .swal-title": {
        color: props.colorMode === "light" ? "#000" : "#fff",
      },

      ".swal-modal .swal-text": {
        color: props.colorMode === "light" ? "#000" : "#fff",
      },

      ".swal-modal .swal-icon--success:after, .swal-icon--success:before": {
        backgroundColor: props.colorMode === "dark" ? "#1A202C" : "#fff",
      },

      ".swal-modal .swal-icon--success__hide-corners": {
        backgroundColor: props.colorMode === "dark" ? "#1A202C" : "#fff",
      },

      ".swal-modal .swal-button": {
        backgroundColor: props.colorMode === "light" ? "#1A202C" : "#fff",
        color: props.colorMode === "light" ? "#fff" : "#000",
      },

      ".swiper-pagination": {
        position: "static",
        marginX: "auto",
        marginTop: "1rem",
        backgroundColor: props.colorMode === "light" ? "#fff" : "#1a202c",
      },
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
