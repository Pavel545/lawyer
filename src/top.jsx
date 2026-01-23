import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.body.classList.remove("fixed");

    if (hash) {
      // Даем React дорендерить страницу
      requestAnimationFrame(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // если элемента нет — хотя бы не ломаемся
          window.scrollTo(0, 0);
        }
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return children;
};

export default ScrollToTop;
