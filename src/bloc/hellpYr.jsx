import { useState } from "react";
import ReactInputMask from "react-input-mask";

export function HelpYr({ theme = "правовым вопросам" }) {
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);

// 1. Функция отправки на удаленный Email-микросервис
async function sendToEmailApi(data) {
  try {
    const API_KEY = process.env.REACT_APP_UNIVERSAL_API_KEY;
    // Замените на реальный URL вашего развернутого микросервиса Next.js
    const API_URL = 'https://bravo.acr-agency.ru/api/send-form-universal'; 

    if (!API_KEY) {
      console.error("Email API key not found in environment variables");
      return false;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.tel,       // Микросервис ожидает 'phone'
        message: data.text,     // Микросервис ожидает 'message'
        topic: data.type || theme,
        _subject: `Заявка на консультацию: ${data.type || theme}`,
        // Указываем получателей (один или несколько через запятую)
        _recipients: 'ForAnalyticss@yandex.ru' 
      }),
    });

    const result = await response.json();
    return response.ok && result.success;
  } catch (error) {
    console.error("Ошибка отправки на Email API:", error);
    return false;
  }
}

// 2. Ваша функция Telegram (оставили как есть)
async function sendToTelegram(data) {
  try {
    const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const SALES_CHAT_ID = process.env.REACT_APP_TELEGRAM_SALES_CHAT_ID;
    
    if (!BOT_TOKEN || !SALES_CHAT_ID) {
      console.error("Telegram credentials not found");
      return false;
    }

    const message = `🆕 НОВАЯ ЗАЯВКА НА КОНСУЛЬТАЦИЮ

📋 Тема: ${data.type || theme}
👤 Имя: ${data.name}
📞 Телефон: ${data.tel}
📝 Вопрос: ${data.text || 'Не указано'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}
🌐 Источник: Блок "Нужна помощь эксперта"`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: SALES_CHAT_ID,
        text: message,
        parse_mode: 'HTML' // Если используете HTML, убедитесь, что в тексте нет знаков < или >
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    return false;
  }
}

// 3. Главный обработчик формы
async function def(e) {
  e.preventDefault();
  setLoading(true);

  const formData = {
    name: e.target[0].value,
    tel: e.target[1].value,
    type: e.target[2].value || theme,
    text: e.target[3].value || 'Не указано',
  };

  console.log('Отправка данных из HelpYr в TG и Email:', formData);

  try {
    // Запускаем оба запроса одновременно
    const [telegramSent, emailSent] = await Promise.all([
      sendToTelegram(formData),
      sendToEmailApi(formData)
    ]);

    // Логика валидации успеха: 
    // Форма считается успешно отправленной, если сработал ХОТЯ БЫ ОДИН канал (через ||)
    // Если вам строго нужно, чтобы ушло и туда и туда — поменяйте на &&
    if (!telegramSent && !emailSent) {
      throw new Error("Не удалось отправить заявку ни в один из каналов связи");
    }

    // Небольшие предупреждения в консоль разработчика на всякий случай
    if (!telegramSent) console.warn("В Телеграм не ушло, но Email отправлен успешно.");
    if (!emailSent) console.warn("На почту не ушло, но Телеграм доставлен успешно.");

    setForm(true);
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
  } finally {
    setLoading(false);
  }
}

  return (
    <section className="HelpYr">
      <div className="container">
        <p className="HelpYr_slogan">
          Нужна помощь эксперта{" "}
          <span className="yellow">по {theme}?</span> <br /> Поможем,
          обращайтесь!
        </p>

        <form
          style={form ? { display: "none" } : {}}
          onSubmit={def}
          className="HelpYr_form flex"
        >
          <h2>
            Запись на <span className="yellow">бесплатную консультацию</span>
          </h2>

          <input
            placeholder="Имя"
            className="HelpYr_form_input"
            type="text"
            name="name"
            required
          />

          <ReactInputMask
            required
            className="HelpYr_form_input"
            placeholder="Телефон"
            mask="+7 (999) 999 99 99"
            type="tel"
            name="phone"
          />

          <input
            type="hidden"
            name="type"
            value={theme}
          />

          <textarea
            placeholder="Задайте свой вопрос?"
            className="HelpYr_form_input text_area"
            name="question"
            required
          ></textarea>
          <div className="form_checkbox">
            <input
              className="f_checkbox"
              type="checkbox"
              id="soglas"
              value="yes"
              required
            />
            <label className="HelpYr_form_place" htmlFor="soglas">
              Я принимаю <a href="/privacy-policy">пользовательское соглашение</a>
            </label>
          </div>
          <button
            data-type="Оставить заявку"
            disabled={loading}
          >
            {loading ? 'Отправка...' : 'Оставить заявку'}
          </button>


        </form>

        <div style={!form ? { display: "none" } : {}} className="HelpYr_form">
          <h3 style={{ color: "#fff" }}>
            Ваша заявка успешно отправлена, ожидайте звонка специалиста
          </h3>
        </div>
      </div>
    </section>
  );
}