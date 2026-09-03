import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import DemoContext from "../pages/demo-context";
import DemoStorages from "../pages/demo-storages";
import DemoZustand from "../pages/demo-zustand";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "storage",
        element: <DemoStorages />,
      },
      {
        path: "context",
        element: <DemoContext />,
      },
      {
        path: "zustand",
        element: <DemoZustand />,
      },
    ],
  },
]);

export default router;
