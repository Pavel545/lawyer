import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts";
import { Error404 } from "./pages/404";

// Ленивая загрузка страниц
const Main = lazy(() => import("./pages/main"));
const Services = lazy(() => import("./pages/Servies"));
const Uslugi = lazy(() => import("./pages/uslugi"));
const Kontacts = lazy(() => import("./pages/kontact"));
const Compani = lazy(() => import("./pages/compani"));
const PrivacyPolicy = lazy(() => import("./pages/privacy"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error404 />,
      children: [
        { index: true, element: <Suspense><Main /></Suspense> },
        { path: "uslugi/", element: <Suspense><Uslugi /></Suspense> },
        { path: "kontacts/", element: <Suspense><Kontacts /></Suspense> },
        { path: "compani", element: <Suspense><Compani /></Suspense> },
        { path: "privacy", element: <Suspense><PrivacyPolicy /></Suspense> },
        { path: "uslugi/:direction", element: <Suspense><Services /></Suspense> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;