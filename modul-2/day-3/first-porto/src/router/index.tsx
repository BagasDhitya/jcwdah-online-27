import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/home";
import Projects from "../pages/projects";
import Contacts from "../pages/contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App.tsx bertindak sebagai layout utama (Root Layout)
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
]);
