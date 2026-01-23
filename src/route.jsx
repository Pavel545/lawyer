// сдесь расписывается вся маршрутизация на сервере
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/main";
import { Services } from "./pages/Servies";
import { Uslugi } from "./pages/uslugi";
import { Kontacts } from "./pages/kontact";
import { Error404 } from "./pages/404";
import AppLayout from "./layouts";
import Compani from "./pages/compani";
import { Suspense } from "react";
import { PrivacyPolicy } from "./pages/privacy";

const Router = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error404 />,
        children: [
          {
            index: true,
            element: <Suspense>
              <Main />
            </Suspense>,
          },
          {
            path: `/uslugi/`,
            element: <Suspense><Uslugi /></Suspense>,
          },
          {
            path: `/kontacts/`,
            element:<Suspense>
               <Kontacts />
            </Suspense>,
          },
          {
            path: `/compani`,
            element: <Suspense>
              <Compani />
            </Suspense>,
          },
          {
            path: `/privacy`,
            element: <Suspense>
              <PrivacyPolicy />
            </Suspense>,
          },
          {
            path: `/uslugi/:direction`,
            element:<Suspense>
               <Services />
            </Suspense>,
          },
        ],
      },
    ]
  );

  return <RouterProvider router={router} />;
};

export default Router;
