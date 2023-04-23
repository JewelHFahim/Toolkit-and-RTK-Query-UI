import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Cart from "../Cart";
import Mani from "../../Layout/Mani";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mani />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
