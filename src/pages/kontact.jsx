import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { BreadCrumbs } from "../bloc/breadСrumbs";
import "../css/kontact.css";
import { LineContact } from "../bloc/line_contant";
import {  useState } from "react";

export function Kontacts() {
  const [first, setfirst] = useState([55.740117,37.565874])
 
  const mapState = { center:first, zoom: 17 };
  return (
    <main className="kontact">
      <div className="container flex">
        <BreadCrumbs />
        <h1 className="h2">Контакты</h1>
        <div className="contact_map">
          <div className="contact_map_info">
            <div className="contact_map_info_box">
              <p className="contact_map_info_name">Центральный офис:</p>
              <p onClick={()=>setfirst([55.740117,37.565874])}
                className="contact_map_info_link"
              >
                г. Москва, <br />
                Бережковская наб., д. 6, офис 24
              </p>
            </div>
            <div className="contact_map_info_box">
              <p className="contact_map_info_name">Доп. офис:</p>
              
              <p onClick={()=>setfirst([55.747115,37.539087])}
                className="contact_map_info_link"
              >
                г. Москва, <br />
                наб. Пресненская, д. 8, стр. 1, помещ. 7Н/8
              </p>
            </div>
            <div className="contact_map_info_box">
              <p className="contact_map_info_name">Режим работы:</p>
              <p className="contact_map_info_link time">
                пн-пт с 10:00 до 20:00 <br />
                <span style={{color:"red"}}>Без выходных</span>
              </p>
            </div>
            <div className="contact_map_info_box">
              <p className="contact_map_info_name">Телефон:</p>
              <a className="contact_map_info_link" href="tel:+79168868832">
                +7 916 886 88 32
              </a>
            </div>
          </div>
          <div className="map">
            <YMaps width="100%" height={!window.screen.width<701?"100%":"500px"} defaultState={mapState}>
              <Map width="100%" height={!window.screen.width<701?"100%":"500px"} state={mapState}>
                <Placemark
                  geometry={first}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref:  "/map.png",
                    iconImageSize: [70, 70],
                    iconImageOffset: [-3, -42],
                  }}
                ></Placemark>
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
      <LineContact />
    </main>
  );
}
