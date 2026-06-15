import { Outlet } from "react-router-dom";
import  Headers  from "../bloc/header/header";
import ScrollToTop from "../top";
import { Footer } from "../bloc/footer";
import { Popup } from "../bloc/fos_popup";
import { CookieConsent } from "../bloc/CookieConsent/CookieConsent";
import { YandexMetricProvider } from "../bloc/YandexMetricProvider";

const AppLayout = () => {
  return (
     <YandexMetricProvider>
       <Headers />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Popup />
      <CookieConsent />
      <Footer />
     </YandexMetricProvider>
  );
};

export default AppLayout;
