import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../components/Layout.jsx";
import NotFound from "../components/NotFound.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import Cart from "../components/Cart.jsx";

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
    ],
  },
]);

export default router;
