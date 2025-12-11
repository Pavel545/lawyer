import axios from "axios";
import { useState } from "react";
import ReactInputMask from "react-input-mask";

export function HelpYr(params) {
  const [form, setForm] = useState(false);

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
          method: 'POST',
          url: 'https://lawyer.agatech.ru/mail.php',
          headers: {
            'Content-Type': 'application/json',
          },
          data:JSON.stringify(element),
        })
        .then((response) => {
          console.log(response)
          setForm(true)
        })
        .catch((error) => {
          console.log(error)
        })
    
      }
  return (
    <section className="HelpYr">
      <div className="container">
        <p className="HelpYr_slogan">
          Нужна помощь эксперта{" "}
          <span className="yellow">по {params.theme}?</span> <br /> Поможем,
          обращайтесь!
        </p>
        <form style={form?{display:"none"}:{}} action=""
        onSubmit={def} className="HelpYr_form flex" >
          <h2>
            Запись на <span className="yellow">бесплатную консультацию</span>
          </h2>
          <input placeholder="Имя" className="HelpYr_form_input" type="text" />
          <ReactInputMask
            required
            className="HelpYr_form_input"
            placeholder="Телефон"
            mask="+7 (999) 999 99 99"
            type="text"
          />
        <input type="hidden" value={params.theme} />

          <textarea
            placeholder="Задайте свой вопрос?"
            className="HelpYr_form_input text_area"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button data-type="Оставить заявку">Оставить заявку</button>
          <p className="HelpYr_form_place">Позвоним в течение часа</p>
        </form>
        <div style={!form? {display:"none"}:{}}  className="HelpYr_form">
          <h3 style={{color:"#fff"}}>
          Ваша заявка успешно отправлена, ожидайте звонка специалиста
          </h3>
      </div>
      </div>
    </section>
  );
}
