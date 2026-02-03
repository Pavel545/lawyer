import { useState } from "react";
import "../css/fos.css";
import { useRef } from "react";
import ReactInputMask from "react-input-mask";
import { useAppContext } from "../layouts/context";

export function Popup() {
  const { active, setActive, datatype, title, closePop } = useAppContext();
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(undefined);
  
  async function sendToTelegram(data) {
    try {
      const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const SALES_CHAT_ID = process.env.REACT_APP_TELEGRAM_SALES_CHAT_ID;
      
      if (!BOT_TOKEN || !SALES_CHAT_ID) {
        console.error("Telegram credentials not found");
        return false;
      }
      
      const message = `🆕 НОВАЯ ЗАЯВКА С САЙТА

📋 Тип: ${data.type || 'Заявка с popup'}
👤 Имя: ${data.name}
📞 Телефон: ${data.tel}
📝 Вопрос: ${data.text || 'Не указано'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
🌐 Источник: Popup форма`;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: SALES_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });

      return response.ok;
    } catch (error) {
      console.error('Ошибка отправки в Telegram:', error);
      return false;
    }
  }

  async function def(e) {
    e.preventDefault();
    setLoading(true);
    
    const formData = {
      name: e.target[0].value,
      tel: e.target[1].value,
      type: e.target[2].value || datatype || 'Консультация',
      text: e.target[3].value || 'Не указано',
    };

    console.log('Отправка данных:', formData);

    try {
      // Отправляем в Telegram
      const telegramSent = await sendToTelegram(formData);
      
      // Также отправляем на ваш бэкенд (если нужно)
      // try {
      //   await fetch('/mail.php', {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });
      // } catch (apiError) {
      //   console.log('API ошибка:', apiError);
      //   // Продолжаем работу даже если бэкенд недоступен
      // }

      console.log('Telegram отправлено:', telegramSent);
      setForm(true);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      onClick={() => closePop()}
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
          Задать вопрос <span>эксперту</span>
        </p>
        <p className="popup_form_text">
          {title || 'Для заказа услуги, оставьте заявку. Наш специалист свяжется с вами и ответит на все вопросы.'}
        </p>
        
        <input 
          required 
          placeholder="Имя" 
          className="popup_input" 
          type="text" 
          name="name"
        />
        
        <ReactInputMask
          required
          className="popup_input"
          placeholder="Телефон"
          mask="+7 (999) 999 99 99"
          type="tel"
          name="phone"
        />
        
        <input 
          type="hidden" 
          name="type" 
          value={datatype || "Консультация"} 
        />
        
        <textarea
          required
          placeholder="По какому вопросу вы хотите получить консультацию"
          className="popup_input text_area"
          name="question"
        />
        
        <div className="form_checkbox">
          <input
            className="f_checkbox"
            type="checkbox"
            id="soglas"
            value="yes"
            required
          />
          <label htmlFor="soglas">
            Я принимаю <a href="/privacy-policy">пользовательское соглашение</a>
          </label>
        </div>
        
        <button 
          className="popup_form_button"
          disabled={loading}
        >
          {loading ? 'Отправка...' : (datatype || 'Отправить')}
        </button>
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