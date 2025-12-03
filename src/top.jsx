import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".adaptiveMenu_box").classList.remove("active")
    document.querySelector("body").classList.remove("fixed")
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;