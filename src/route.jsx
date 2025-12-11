// сдесь расписывается вся маршрутизация на сервере
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/main";
import { Services } from "./pages/Servies";
import { Uslugi } from "./pages/uslugi";
import { Kontacts } from "./pages/kontact";
import { Error404 } from "./pages/404";
import AppLayout from "./layouts";
import Compani from "./pages/compani";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: `/uslugi/`,
          element: <Uslugi />,
        },
        {
          path: `/kontacts/`,
          element: <Kontacts />,
        },
        {
          path: `/compani`,
          element: <Compani />,
        },
        {
          path: `/uslugi/:direction`,
          element: <Services />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
