import { Outlet } from "react-router-dom";
import { Headers } from "../bloc/header";
import ScrollToTop from "../top";
import { Footer } from "../bloc/footer";
import { Popup } from "../bloc/fos_popup";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      <Popup />
      <Footer />
    </>
  );
};

export default AppLayout;
