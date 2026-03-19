import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../components/Layout.jsx";
import NotFound from "../components/NotFound.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import Cart from "../components/Cart.jsx";
import ProductsPage from "../components/ProductsPage.jsx";
import Checkout from "../components/Checkout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productlist",
        element: <ProductsPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export default router;
