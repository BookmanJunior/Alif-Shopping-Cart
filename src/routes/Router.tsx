import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import ErrorElement from "./ErrorElement";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <ProductPage />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
