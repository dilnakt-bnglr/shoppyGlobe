import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Implemented the lazy loading
const Layout = lazy(() => import("../components/Layout.jsx"));
const App = lazy(() => import("../App.jsx"));
const NotFound = lazy(() => import("../components/NotFound.jsx"));
const ProductDetail = lazy(() => import("../components/ProductDetail.jsx"));
const ProductsPage = lazy(() => import("../components/ProductsPage.jsx"));
const Cart = lazy(() => import("../components/Cart.jsx"));
const Checkout = lazy(() => import("../components/Checkout.jsx"));

// Routes for the application
const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/productlist",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
