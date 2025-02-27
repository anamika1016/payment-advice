import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./app/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <DataProvider>
            <ChakraProvider>
              <Toaster />
              <App />
            </ChakraProvider>
          </DataProvider>
        </QueryClientProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
