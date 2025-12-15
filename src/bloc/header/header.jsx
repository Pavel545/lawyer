import { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { fizlic, yrid } from "../../data/basa";
import { NavLink } from "react-router-dom";

export function Headers() {
  // отслеживаем состояние меню (открыто оно или закрыто)
  const [menuOpen, setMenuOpen] = useState(false);
  const [adapt, setAdapt] = useState(false);
  const [link, setLink] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (adapt) {
      document.querySelector("body").classList.add("fixed");
    } else {
      document.querySelector("body").classList.remove("fixed");
    }
  }, [adapt]);
  useEffect(() => {
    setLink(location.pathname);
    const parts = ([] = location.pathname.split("/"));
    document
      .querySelector(".header_menu__link:nth-child(2)")
      .classList.remove("loc");

    parts.forEach((element) => {
      if (element === "uslugi") {
        document
          .querySelector(".header_menu__link:nth-child(2)")
          .classList.add("loc");
      }
    });
  }, [location]);

  return (
    <header className="header">
      <div className="header_menu">
        <div className="container">
          <Link className="header_logo" to="/">
            <img src={ "/img/logo/logo4.png"} alt="" />
          </Link>
          <nav className="header_menu__link_box">
            {/* <Link
              className={
                link === "/" ? "header_menu__link loc" : "header_menu__link"
              }
              to="/"
            >
              Главная
            </Link> */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={
                menuOpen
                  ? "header_menu__link menus op"
                  : "header_menu__link menus"
              }
            >
              Услуги
            </div>
            <Link
              className={
                link === "/compani"
                  ? "header_menu__link loc"
                  : "header_menu__link"
              }
              to="/compani"
            >
              О компании
            </Link>
            <div
              className={
                menuOpen
                  ? "header_menu__link_menu open"
                  : "header_menu__link_menu "
              }
            >
              <div className="header_menu__link_menu_bloc">
                <Link to="/uslugi" onClick={() => setMenuOpen(false)} className="header_menu__link">
                  Услуги для юр. лиц
                </Link>
                <nav>
                  {yrid.map((e, i) => (
                    <Link
                      className="t16 link_menu"
                      onClick={() => setMenuOpen(false)}
                      key={i}
                      to={`/uslugi/${e.direction}`}
                    >
                      {e.link}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="header_menu__link_menu_bloc">
                <Link to="/uslugi" onClick={() => setMenuOpen(false)} className="header_menu__link">
                  Услуги для физ. лиц
                </Link>
                <nav>
                  {fizlic.map((e, i) => (
                    <Link
                      className="t16 link_menu"
                      onClick={() => setMenuOpen(false)}
                      key={i}
                      to={`/uslugi/${e.direction}`}
                    >
                      {e.link}
                    </Link>
                  ))}
                </nav>
              </div>
              
            </div>
            <Link
              className={
                link === "/kontacts"
                  ? "header_menu__link loc"
                  : "header_menu__link"
              }
              to="/kontacts"
            >
              Контакты
            </Link>
          </nav>
          <div className="header_info_contacts">
            <a target="_blank" title="vk" href="https://vk.com/id808117030">
              {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}

              <img src={ "/img/vk.png"} alt="vk" />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=79168868832"
            >
              {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}
              <img
                src={ "/img/watsapp.png"}
                alt="WatsApp"
              />
            </a>
            <a target="_blank" href="https://t.me/+79168868832">
              <img
                src={ "/img/tg.png"}
                alt="Telegram"
              />
            </a>
            <Link className="header_tel" to="tel:+79168868832">
              +7 916 886 88 32
            </Link>
          </div>
          <div className="adaptiveMenu">
            <div onClick={() => setAdapt(!adapt)} id="menu-bar">
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <div
              className={adapt ? "adaptiveMenu_box active" : "adaptiveMenu_box"}
            >
              <Link className="header_menu__link" to="/">
                Главная
              </Link>

              <div className="header_menu__link_menu_bloc">
                <Link to="/uslugi" className="header_menu__link no">
                  Услуги для физ. лиц
                </Link>
                <nav>
                  {fizlic.map((e, i) => (
                    <Link
                      className="t16"
                      key={i}
                      to={`/uslugi/${e.direction}`}
                    >
                      {e.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="header_menu__link_menu_bloc">
                <Link to="/uslugi" className="header_menu__link no">
                  Услуги для юр. лиц
                </Link>
                <nav>
                  {yrid.map((e, i) => (
                    <Link
                      className="t16"
                      key={i}
                      to={`/uslugi/${e.direction}`}
                    >
                      {e.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="footer_info_contacts">
                <Link to="/compani" className="footer_link">
                  О компании
                </Link>
                <br />
                <Link to="/kontacts" className="footer_link">
                  контакты
                </Link>
                <nav>
                  <a className="header_tel" href="tel:+79168868832">
                    +7 916 886 88 32
                  </a>

                  <div className="linksfot">
                    <a href="https://vk.com/id808117030">
                      {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}
                      <img
                        src={ "/img/vk.png"}
                        alt="vk"
                      />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79168868832">
                      {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}
                      <img
                        src={ "/img/watsapp.png"}
                        alt="WatsApp"
                      />
                    </a>
                    <a href="https://t.me/+79168868832">
                      <img
                        src={ "/img/tg.png"}
                        alt="Telegram"
                      />
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
