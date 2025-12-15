import { useState } from "react";
import "../css/fos.css";
import { useRef } from "react";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { useAppContext } from "../layouts/context";
export function Popup() {
  const { active, setActive, datatype, title } = useAppContext();
  const [form, setForm] = useState(false);
  const ref = useRef(undefined);
  function def(e) {
    e.preventDefault();
    const element = {
      name: e.target[0].value,
      tel: e.target[1].value,
      type: e.target[2].value,
      text: e.target[3].value,
    };

    console.log(element);
    axios({
      method: "POST",
      url: "/mail.php",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(element),
    })
      .then((response) => {
        console.log(response);
        setForm(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "popup popup_active" : "popup"}
    >
      <form
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        className="popup_form"
        style={form ? { display: "none" } : {}}
        action=""
        onSubmit={def}
      >
        <p className="popup_form_title">
          {" "}
          Задать вопрос <span>эксперту</span>
        </p>
        <p className="popup_form_text">
          {title ? title : 'Для заказа услуги, оставьте заявку. Наш специалист свяжется с вами и ответит на все вопросы.'}
          
        </p>
        <input required placeholder="Имя" className="popup_input" type="text" />
        <ReactInputMask
          required
          className="popup_input"
          placeholder="Телефон"
          mask="+7 (999) 999 99 99"
          type="text"
        />
        <input type="hidden" value={datatype || ""} />
        <textarea
          required
          placeholder="По какому вопросу вы хотите получить консультацию"
          className="popup_input text_area"
          type="text"
        />
        <div className="form_checkbox">
          <input
            className="f_checkbox"
            type="checkbox"
            id="soglas"
            value="yes"
          />

          <label htmlFor="soglas">
            Я принимаю <a href="file">пользовательское соглашение</a>
          </label>
        </div>
        <button className="popup_form_button">{datatype}</button>
      </form>
      <div style={!form ? { display: "none" } : {}} className="popup_goode">
        <h3>
          Ваша <span className="oregin">заявка успешно отправлена,</span>{" "}
          ожидайте звонка специалиста
        </h3>
      </div>
    </div>
  );
}
