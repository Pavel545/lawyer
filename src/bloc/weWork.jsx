import { useEffect } from "react";
import { useState } from "react";

export function WeWork(params) {
  const [time, setTime] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 5000);
    if (time === 5) {
      setTime(1);
    }
    return () => clearInterval(timer);
  });

  return (
    <section className="weWork">
      <div className="container flex">
        <h2>КАК МЫ РАБОТАЕМ</h2>
        <div className="weWork_content">
          <div data-item="1" className="weWork_content_item">
            <span>
              Свяжитесь с нашим специалистом по номеру телефона, мессенджер
              WhatsApp, Telegram или оставьте заявку на консультацию
            </span>
          </div>
          <div data-item="2" className="weWork_content_item">
            <span>
              Консультация по интересующему Вас вопросу по телефону или в офисе{" "}
            </span>
          </div>
          <div data-item="3" className="weWork_content_item">
            <span>Заключите договор на правовое обслуживание </span>
          </div>
          <div data-item="4" className="weWork_content_item">
            <span>Изучение представленных документов и материалов </span>
          </div>
          <div data-item="5" className="weWork_content_item">
            <span>Разработка стратегии по делу </span>
          </div>
          <div data-item="6" className="weWork_content_item">
            <span>Подготовка необходимых процессуальных документов </span>
          </div>
          <div data-item="7" className="weWork_content_item">
            <span>Судебный этап разрешения спора</span>
          </div>
          <div data-item="8" className="weWork_content_item">
            <span>Сопровождение исполнительного производства </span>
          </div>
        </div>
      </div>
    </section>
  );
}
