import { useState } from "react";
import ReactInputMask from "react-input-mask";

export function HelpYr({ theme = "правовым вопросам" }) {
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);

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
      type: e.target[2].value || theme,
      text: e.target[3].value || 'Не указано',
    };

    console.log('Отправка данных из HelpYr:', formData);

    try {
      // Отправляем в Telegram
      const telegramSent = await sendToTelegram(formData);

      // Также отправляем на ваш бэкенд (если нужно)
      // try {
      //   await fetch('https://lawyer.agatech.ru/mail.php', {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });
      // } catch (apiError) {
      //   console.log('API ошибка:', apiError);
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