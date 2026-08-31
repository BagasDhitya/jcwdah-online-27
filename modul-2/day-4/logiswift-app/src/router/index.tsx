import { createBrowserRouter } from "react-router-dom";

import TailwindIntro from "../App";
import RootLayout from "../layouts";

import Home from "../pages/home";
import Products from "../pages/products";
import Contacts from "../pages/contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tailwind-intro", element: <TailwindIntro /> },
      { path: "products", element: <Products /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);
