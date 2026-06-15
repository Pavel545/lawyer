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

  // 1. Новая функция для отправки на ваш универсальный бэкенд
  async function sendToEmailApi(data) {
    try {
      // ВАЖНО: Ключ API должен быть доступен во фронтенде (например, через REACT_APP_)
      const API_KEY = process.env.REACT_APP_UNIVERSAL_API_KEY;

      const response = await fetch('https://bravo.acr-agency.ru/api/send-form-universal', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.tel,       // Поле для бэкенда (изменили с tel на phone)
          message: data.text,     // Поле для бэкенда (изменили с text на message)
          topic: data.type,
          _subject: `Заявка с сайта: ${data.type}`,
          _recipients: 'ForAnalyticss@yandex.ru' // Нужные почты
        }),
      });

      const result = await response.json();
      return response.ok && result.success;
    } catch (error) {
      console.error("Ошибка отправки на Email API:", error);
      return false;
    }
  }

  // 2. Существующая функция Telegram (без изменений)
  async function sendToTelegram(data) {
    try {
      const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const SALES_CHAT_ID = process.env.REACT_APP_TELEGRAM_SALES_CHAT_ID;

      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: SALES_CHAT_ID,
          text: `Тестовая заявка\nИмя: ${data.name}\nТелефон: ${data.tel}\nТип: ${data.type}\nВопрос: ${data.text}`,
        }),
      });

      const result = await response.json();
      return result.ok;
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      return false;
    }
  }

  // 3. Главный обработчик отправки формы
  async function def(e) {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target[0].value,
      tel: e.target[1].value,
      type: e.target[2].value || datatype || 'Консультация',
      text: e.target[3].value || 'Не указано',
    };

    console.log('Отправка данных в системы:', formData);

    try {
      // Запускаем отправку в Telegram и на Email одновременно
      const [telegramSent, emailSent] = await Promise.all([
        sendToTelegram(formData),
        sendToEmailApi(formData)
      ]);

      // Проверяем статус отправки. 
      // Вы можете требовать, чтобы упешно ушло ОБА (&&) или хотя бы ОДНО (||)
      if (!telegramSent && !emailSent) {
        throw new Error("Ни один из каналов уведомлений не сработал");
      }

      if (!telegramSent) console.warn("Предупреждение: В Телеграм не ушло, но Email отправлен");
      if (!emailSent) console.warn("Предупреждение: На Email не ушло, но Телеграм отправлен");

      setForm(true);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
    } finally {
      console.log("Обработка завершена");
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