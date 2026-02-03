import { HashLink as Link } from "react-router-hash-link";
import "../css/footer.css";
import { fizlic, general, yrid } from "../data/basa";
import { NavLink } from "react-router-dom";

export function Footer(params) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_body">
            <a className="footer_logo" href="/">
              <img src={ "/img/logo/logo2.png"} alt="" />{" "}
            </a>
          <div className="footer_link_box">
            <div className="footer_navigate">
              <nav>
                {/* <a className="footer_link" href="/">
                  Главная
                </a> */}
                <NavLink className="footer_link" to="/compani">
                  О компании
                </NavLink>

              
              </nav>
            </div>

            <div className="footer_navigate">
              <nav className="nav_tab nt_active">
                <Link className="footer_link" to="/#legalServices">
                  Услуги для физ. лиц
                </Link>
                {fizlic.map((e, i) => (
                  <Link key={i} to={`/uslugi/${e.direction}`}>
                    {e.link}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="footer_navigate">
              <nav className="nav_tab nt_active">
                <Link className="footer_link" to="/#legalServices_yr">
                  Услуги для юр. лиц
                </Link>
                {yrid.map((e, i) => (
                  <Link className="" key={i} to={`/uslugi/${e.direction}`}>
                    {e.link}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="footer_navigate">
              <nav className="nav_tab nt_active">
                <Link className="footer_link" to="/#legalServices_yr">
                  Услуги общие
                </Link>
                {general.map((e, i) => (
                  <Link className="" key={i} to={`/uslugi/${e.direction}`}>
                    {e.link}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="footer_info_contacts">
              
              <nav>
              <Link to="/kontacts" className="footer_link">
                контакты
              </Link>
                <a className="header_tel" href="tel:+79168868832">
                  +7 916 886 88 32
                </a>
                <a
                  target="_blank"
                  className="footer_info_map"
                  href="https://yandex.ru/maps/213/moscow/house/prospekt_mira_102k1/Z04YcARmT00HQFtvfXRxcXlqYQ==/?ll=37.636679%2C55.800595&source=serp_navig&z=17.05"
                >
                  129626, город Москва, пр-кт Мира, д. 102 к. 1, помещ. 3/7 
                </a>
                <a
                  target="_blank"

                  className="footer_info_map"
                  href="https://yandex.ru/maps/195/ulyanovsk/?ll=48.375127%2C54.294186&mode=poi&poi%5Bpoint%5D=48.375010%2C54.294273&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D47152754937&source=serp_navig&z=20.65"
                >
                  432063, Ульяновская область, город Ульяновск, ул. Кирова, д.99
                </a>
                
                <div className="linksfot">
                  <a  target="_blank" href="https://vk.com/id808117030">
                    {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}
                    <img
                      src={ "/img/vk.png"}
                      alt="vk"
                    />
                  </a>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=79168868832">
                    {/* путь к изображениям указывается именно таким образом, указывая путь от папки public, чтобы после билдинга проекта всё коректно находилось */}
                    <img
                      src={ "/img/watsapp.png"}
                      alt="WatsApp"
                    />
                  </a>
                  <a target="_blank"href="https://t.me/+79168868832">
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

        <div className="footer_f">
          <a href="/privacy">Политика конфиденциальности</a>
          <a href="">© «Финэкс» 2025</a>
          <a className="acr" href="https://acr-agency.ru/"><img src="/img/acr.png" alt="Анадитический центр развитие" /></a>
        </div>
      </div>
    </footer>
  );
}
