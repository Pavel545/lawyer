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
        <h2>НАДЕЖНЫЙ ПАРТНЕР В СЛОЖНЫХ ВОПРОСАХ</h2>
        <div className="weWork_content">
          <div data-item="1" className="weWork_content_item">
            <span > <span className="gold">Опыт и Стабильность:</span>
               13 лет на рынке. Штатные сотрудники с квалификационными аттестатами (сдаем экзамены каждые 3 года).
            </span>
          </div>
          <div data-item="2" className="weWork_content_item">
            <span>
              <span className="gold">География:</span>
               Работаем по всей россии <br /><br /><br /> 
            </span>
          </div>
          <div data-item="3" className="weWork_content_item">
            
            <span><span className="gold">Глубокий анализ:</span> Мы сразу подсвечиваем слабые места и риски. Наша цель — не просто сдать бумагу, а защитить ваши интересы.</span>
          </div>
          <div data-item="4" className="weWork_content_item">
            <span>
              <span className="gold">Ответственность:</span>
               Нас не нужно контролировать. Соблюдение сроков — наш принцип.</span>
          </div>
          {/* <div data-item="5" className="weWork_content_item">
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
          </div> */}
        </div>
      </div>
    </section>
  );
}
