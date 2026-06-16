import { useEffect, useMemo, useRef, useState } from "react";
import "./header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { fizlic, yrid, general } from "../../data/basa";
import { useDomainContent } from "../../hooks/useDomainContent";

export default function Headers() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);
  const { logo } = useDomainContent();

  // Единая структура секций (убираем дублирование)
  const serviceSections = useMemo(
    () => [
      { title: "Услуги для юр. лиц", items: yrid },
      { title: "Услуги для физ. лиц", items: fizlic },
      { title: "Услуги общие", items: general },
    ],
    []
  );

  // Закрывать меню при смене маршрута
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Блокируем скролл когда открыто мобильное меню
  useEffect(() => {
    document.body.classList.toggle("fixed", mobileOpen);
    return () => document.body.classList.remove("fixed");
  }, [mobileOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Закрытие по клику вне панели (для десктоп-меню услуг)
  useEffect(() => {
    const onDocClick = (e) => {
      if (!servicesOpen) return;
      if (!panelRef.current) return;

      const isInside = panelRef.current.contains(e.target);
      const isServicesBtn = e.target.closest?.(".js-services-btn");

      if (!isInside && !isServicesBtn) setServicesOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [servicesOpen]);

  const isServicesActive = location.pathname.startsWith("/uslugi");

  return (
    <header className="header header--fixed">
      <div className="header_menu">
        <div className="container header__row">
          <Link className="header_logo" to="/" aria-label="На главную">
            <img src={logo.logoG} alt="проф-экспертиза" />
          </Link>

          {/* Desktop nav */}
          <nav className="header_menu__link_box" aria-label="Главное меню">
            <p
              type="button"
              className={[
                "header_menu__link",
                "menus",
                "js-services-btn",
                servicesOpen ? "op" : "",
                isServicesActive ? "loc" : "",
              ].join(" ")}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls="services-panel"
            >
              Услуги
            </p>

            <NavLink
              to="/compani"
              className={({ isActive }) =>
                isActive ? "header_menu__link loc" : "header_menu__link"
              }
            >
              О компании
            </NavLink>

            <NavLink
              to="/kontacts"
              className={({ isActive }) =>
                isActive ? "header_menu__link loc" : "header_menu__link"
              }
            >
              Контакты
            </NavLink>
          </nav>

          <div className="header_info_contacts">
            {/* <a target="_blank" rel="noreferrer" title="VK" href="https://vk.com/id808117030">
              <img src="/img/vk.png" alt="vk" />
            </a> */}
             <a target="_blank" title="Бот в MAX" rel="noreferrer" href="https://max.ru/id7326040788_bot">
              <img src="/img/max.svg" alt="Бот в MAX" />
            </a>
            <a target="_blank" title="Бот в Telegram" rel="noreferrer" href="https://t.me/FINEKC_BOT">
              <img src="/img/tg.png" alt="Бот в Telegram" />
            </a>
            <a className="header_tel" href="tel:+79165399390">
               +7 916 539 93 90
            </a>
          </div>

          {/* Burger */}
          <button
            type="button"
            className={mobileOpen ? "burger active" : "burger"}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Открыть меню"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Desktop dropdown panel */}
      <div
        id="services-panel"
        ref={panelRef}
        className={servicesOpen ? "servicesPanel open" : "servicesPanel"}
      >
        <div className="container servicesPanel__inner">
          {serviceSections.map((section) => (
            <div key={section.title} className="servicesPanel__col">
              <NavLink to="/uslugi" className="servicesPanel__title">
                {section.title}
              </NavLink>

              <nav className="servicesPanel__list">
                {section.items.map((e, i) => (
                  <NavLink
                    key={i}
                    to={`/uslugi/${e.direction}`}
                    className="servicesPanel__link"
                    onClick={() => setServicesOpen(false)}
                  >
                    {e.link ?? e.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div className={mobileOpen ? "mOverlay open" : "mOverlay"} onMouseDown={() => setMobileOpen(false)} />
      <aside className={mobileOpen ? "mDrawer open" : "mDrawer"} aria-label="Мобильное меню">
        <div className="mDrawer__head">
          <span className="mDrawer__title">Меню</span>
          <button className="mDrawer__close" onClick={() => setMobileOpen(false)} aria-label="Закрыть">
            ×
          </button>
        </div>

        <nav className="mDrawer__nav">
          <NavLink to="/" className="mDrawer__item">
            Главная
          </NavLink>
          <NavLink to="/compani" className="mDrawer__item">
            О компании
          </NavLink>
          <NavLink to="/kontacts" className="mDrawer__item">
            Контакты
          </NavLink>

          <div className="mDrawer__divider" />

          {serviceSections.map((section) => (
            <div key={section.title} className="mDrawer__section">
              <NavLink to="/uslugi" className="mDrawer__sectionTitle">
                {section.title}
              </NavLink>
              <div className="mDrawer__sectionLinks">
                {section.items.map((e, i) => (
                  <NavLink key={i} to={`/uslugi/${e.direction}`} className="mDrawer__sub">
                    {e.link ?? e.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}

          <div className="mDrawer__divider" />

          <a className="mDrawer__phone" href="tel:+79165399390">
            +7 916 539 93 90
          </a>

          <div className="mDrawer__social">
            <a href="https://vk.com/id808117030"><img src="/img/vk.png" alt="vk" /></a>
            <a href="https://t.me/+79165399390"><img src="/img/tg.png" alt="Telegram" /></a>
          </div>
        </nav>
      </aside>
    </header>
  );
}
