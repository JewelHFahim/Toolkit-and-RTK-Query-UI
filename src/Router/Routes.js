import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Mani from "../Layout/Mani";
import Login from "../Pages/Login";
import Users from "../Pages/Users";

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
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/user",
        element: <Users />,
      },
    ],
  },
]);

export default router;
