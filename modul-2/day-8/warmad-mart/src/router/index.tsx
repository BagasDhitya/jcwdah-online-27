import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <p className="text-slate-500 mt-2">Selamat datang di Warmad Mart!</p>
        ),
      },
      {
        path: "auth",
        element: (
          <p className="text-slate-500 mt-2">
            Halaman autentikasi akun pengguna.
          </p>
        ),
      },
    ],
  },
]);
