import { createBrowserRouter } from "react-router-dom";

import TailwindIntro from "../App";

import Home from "../pages/home";
import Products from "../pages/products";
import Contacts from "../pages/contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/tailwind-intro", element: <TailwindIntro /> },
      { path: "/products", element: <Products /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);
