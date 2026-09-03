import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "storage",
        element: <div>Storage Demo Page</div>,
      },
      {
        path: "context",
        element: <div>useContext Demo Page</div>,
      },
      {
        path: "zustand",
        element: <div>Zustand Demo Page</div>,
      },
    ],
  },
]);

export default router;
