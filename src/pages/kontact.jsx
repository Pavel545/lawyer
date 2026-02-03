import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { BreadCrumbs } from "../bloc/breadСrumbs";
import "../css/kontact.css";
import {  useState } from "react";
import LineContact from "../bloc/line_contant";

export function Kontacts() {
  const [first, setfirst] = useState([55.800595, 37.636680]);
 
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
              <p onClick={()=>setfirst([55.800595, 37.636680])}
                className="contact_map_info_link"
              >
                129626, город Москва,<br /> пр-кт Мира, д. 102 к. 1, помещ. 3/7 
              </p>
            </div>
            <div className="contact_map_info_box">
              <p className="contact_map_info_name">Доп. офис:</p>
              
              <p onClick={()=>setfirst([54.294223, 48.375060])}
                className="contact_map_info_link"
              >
                432063, Ульяновская область, город Ульяновск,<br /> ул. Кирова, д.99
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
                    iconImageOffset: [-40, -42],
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
