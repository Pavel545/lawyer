import { useEffect, useState, lazy, Suspense } from "react";
import { useAppContext } from "../layouts/context";
import "../css/main.css";
import { StructuredData } from "../bloc/StructuredData";
import { useDomainContent } from "../hooks/useDomainContent";
import { SEO } from "../bloc/SEO";
import { useMemo } from "react";

// Ленивая загрузка компонентов
const LegalServices = lazy(() => import("../bloc/legalServiceses"));
const WeWork = lazy(() => import("../bloc/weWork"));
const PrinciplesOperat = lazy(() => import("../bloc/principlesOperat"));
const Goals = lazy(() => import("../bloc/goals"));
const Lawyers = lazy(() => import("../bloc/lawyers"));
const Questions = lazy(() => import("../bloc/questions"));
const LineContact = lazy(() => import("../bloc/line_contant"));

// Можно добавить fallback для загрузки
const LoadingFallback = () => (
  <div className="loading-placeholder">
    {/* Можно добавить спиннер или скелетон */}
  </div>
);

export default function Main(params) {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const { PopGo } = useAppContext();
  const { replaceTemplate  } = useDomainContent(); // Получаем контент для текущего домена
const fullText = useMemo(() => {
  return replaceTemplate(
    `Независимая оценка имущества и экспертиза в {{city.in}}`
  );
}, [replaceTemplate]);
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
      }, 50);

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
    <>
      <SEO
        title={replaceTemplate(`Независимая оценка имущества и экспертиза в {{city.in}}`)}
        description={replaceTemplate(`Независимая оценка оборудования, бизнеса, акций, недвижимости и авто в {{city.in}} и Приволжском округе. Судебная экспертиза, оспаривание кадастровой стоимости. Отчет за 1–7 дней. Бесплатная консультация — звоните!`)}
      />
      <StructuredData type="organization" />
      <StructuredData type="localbusiness" />
      <StructuredData type="breadcrumb" />
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
              Полное соответствие  Федерального закона «Об оценочной деятельности в Российской Федерации» от 29.07.1998 N 135-ФЗ
            </p>
            <button
              onClick={() => PopGo("Получить консультацию")}
              className="pop_up"
            >
              Получить консультацию
            </button>
          </div>
        </section>

        {/* Обернуть все лениво загружаемые компоненты в Suspense */}
        <Suspense fallback={<LoadingFallback />}>
          <LegalServices />
          <WeWork />
          <PrinciplesOperat />
          <Goals />
          <Lawyers />
          <Questions />
          <LineContact />
        </Suspense>
      </main></>
  );
}