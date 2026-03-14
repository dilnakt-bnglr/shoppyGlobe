import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../components/Layout.jsx";
import NotFound from "../components/NotFound.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
