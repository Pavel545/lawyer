import { Lawyers } from "../bloc/lawyers";
import { LegalServices } from "../bloc/legalServiceses";
import { LineContact } from "../bloc/line_contant";
import { PrinciplesOperat } from "../bloc/principlesOperat";
import { Questions } from "../bloc/questions";
import "../css/main.css";
import { WeWork } from "../bloc/weWork";
import Goals from "../bloc/goals";
import { useEffect, useState } from "react";
import { useAppContext } from "../layouts/context";

export function Main(params) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const { PopGo } = useAppContext();
  const fullText = "ПРОФЕССИОНАЛЬНАЯ ОЦЕНКА И ЭКОНОМИЧЕСКО-ФИНАНСОВАЯ ЭКСПЕРТИЗА";
 
  // Эффект для мигающего курсора
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Эффект для печатания текста
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, 50); // Скорость печати - 50ms на символ

      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText]);

  // Стили для курсора
  const cursorStyle = {
    display: "inline-block",
    width: "2px",
    backgroundColor: "currentColor",
    marginLeft: "2px",
    opacity: cursorVisible ? 1 : 0,
    transition: "opacity 0.1s",
    height: "1.1em",
    verticalAlign: "text-bottom",
  };

  return (
    <main>
      <section className="faceBloc">
        <video
          autoPlay
          loop
          muted
          pip="false"
          playsInline
          className="faceBloc-video"
          poster={"/img/fon_section1.webp"}
        >
          <source src={"/video/main.webm"} type="video/mp4" />
          <source src={"/video/main.mp4"} type="video/mp4" />
        </video>
        <div className="faceBloc-overlay"></div>
        <div className="container">
          <p className="faceBloc-text gold">
            Комплексные решения для бизнеса и частных лиц с опытом 13 лет.
            Работаем по всей России.
          </p>
          <h1>
            {displayedText}
            {displayedText.length < fullText.length && (
              <span style={cursorStyle}></span>
            )}
          </h1>
          <p className="slogan">
            Гарантия сдачи отчетов в срок. Аккредитация в банках. <br />
            Полное соответствие  Федерального закона "Об оценочной деятельности в Российской Федерации" от 29.07.1998 N 135-ФЗ
          </p>
          <button
            onClick={() => PopGo("Получить консультацию")}
            className="pop_up"
          >
            Получить консультацию
          </button>
        </div>
      </section>
      <LegalServices />
      <WeWork />
      <PrinciplesOperat />
      <Goals />
      <Lawyers />
      {/* <Reviews/> */}
      <Questions />
      <LineContact />
    </main>
  );
}
