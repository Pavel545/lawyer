import { HashLink as Link } from "react-router-hash-link";
import "../css/footer.css";
import { fizlic, yrid } from "../data/basa";
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
                  href="https://yandex.ru/maps/?um=constructor%3Abf621e30e098f18331c97ef0f5a0b3022328bd8c61225861e655ee23ec08c511&source=constructorLink"
                >
                  г. Москва, Бережковская наб., д. 6, офис 24
                </a>
                <a
                  target="_blank"

                  className="footer_info_map"
                  href="https://yandex.ru/maps/?um=constructor%3A4f206e5d8b2f01b9331ad88f9b6b9298067ac0f348828855472060f2c71c6a96&source=constructorLink"
                >
                  г. Москва, наб. Пресненская, д. 8, стр. 1, помещ. 7Н/8
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
          <a href="">Политика конфиденциальности</a>
          <a href="">© «Финэкс» 2025</a>
          <a href="">Разработка сайта:</a>
        </div>
      </div>
    </footer>
  );
}
