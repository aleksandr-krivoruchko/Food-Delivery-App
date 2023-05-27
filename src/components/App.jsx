import { lazy, Suspense } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Navigation from "./Navigation";
import Loader from "./Loader";

const ShopsPage = lazy(() => import("../pages/Shop"));
const ShoppingCartPage = lazy(() => import("../pages/ShoppingCart"));
const HistoryPage = lazy(() => import("../pages/History"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Container = styled.div`
  width: 1200px;
  height: auto;
  margin: 0 auto;
`;

const App = () => {
  return (
    <CartProvider>
      <Container>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ShopsPage />} />
              <Route path="cart" element={<ShoppingCartPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable
        pauseOnHover
        theme="light"
      />
    </CartProvider>
  );
};

export default App;
