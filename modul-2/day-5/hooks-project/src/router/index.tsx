import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import UseRefDemo from "../pages/use-ref";
import UseStateDemo from "../pages/use-state";
import UseEffectDemo from "../pages/use-effect";
import UseMemoDemoPage from "../pages/use-memo";
import UseContextDemoPage from "../pages/use-context";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "use-state",
        element: <UseStateDemo />,
      },
      {
        path: "use-effect",
        element: <UseEffectDemo />,
      },
      {
        path: "use-ref",
        element: <UseRefDemo />,
      },
      {
        path: "use-memo",
        element: <UseMemoDemoPage />,
      },
      {
        path: "use-context",
        element: <UseContextDemoPage />,
      },
      {
        path: "custom-hook",
        element: <div>Contoh Custom Hook Page</div>,
      },
    ],
  },
]);
