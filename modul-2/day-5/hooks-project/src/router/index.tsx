import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "use-state",
        element: <div>Contoh useState Page</div>,
      },
      {
        path: "use-effect",
        element: <div>Contoh useEffect Page</div>,
      },
      {
        path: "use-ref",
        element: <div>Contoh useRef Page</div>,
      },
      {
        path: "use-memo",
        element: <div>Contoh useMemo Page</div>,
      },
      {
        path: "use-context",
        element: <div>Contoh useContext Page</div>,
      },
      {
        path: "custom-hook",
        element: <div>Contoh Custom Hook Page</div>,
      },
    ],
  },
]);
