import { useAppContext } from "../layouts/context";

import "../css/compani.css";
import { HelpYr } from "../bloc/hellpYr";
import { StructuredData } from "../bloc/StructuredData";
import { useState } from "react";

// Компонент для модального окна с изображением
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        <img src={image.img} alt={image.title} />
        <p className="image-modal-caption">{image.title}</p>
      </div>
    </div>
  );
};

export default function Compani() {
  const { PopGo } = useAppContext();
  const [showAllDocs, setShowAllDocs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const principles = [
    {
      title: "КОМПЕТЕНТНОСТЬ",
      text: "В нашем штате работают эксперты, имеющие квалификационные аттестаты по всем направлениям оценки (Недвижимость, Движимое имущество, Бизнес). Мы подтверждаем квалификацию на экзаменах каждые 3 года.",
    },
    {
      title: "ЧЕСТНОСТЬ И ОБЪЕКТИВНОСТЬ",
      text: "Мы дорожим своей репутацией!  При определении стоимости мы учитываем специфику рынка, используем научно обоснованные методики, судебную практику.",
    },
    {
      title: "ОТВЕТСТВЕННОСТЬ",
      text: "Нас не нужно контролировать. Мы строго соблюдаем сроки, прописанные в договоре. Профессиональная ответственность оценщиков застрахована.",
    },
  ];

  const steps = [
  
    {
      title: "Анализ документов",
      text: "Вы присылаете сканы. Мы проверяем их комплектность и оцениваем перспективу.",
    },
    {
      title: "Договор",
      text: "Фиксируем стоимость и сроки. Никаких скрытых доплат.",
    },
    {
      title: "Работа эксперта",
      text: "Расчет стоимости, подбор аналогов, анализ рынка.",
    },
    {
      title: "Результат",
      text: "Вы получаете прошитый отчет с печатью и электронной подписью (ЭЦП).",
    },
  ];

 // Документы с указанием позиции в сетке
  const docs = [
    { 
      title: "15749 Диплом", 
      img: "/img/compani/15749 Диплом_00001.jpg",
      gridArea: { 
        column: '1 / 3',     // первая колонка
        row: '1 '     // занимает строки с 1 по 3
      }
    },
    {
      title: "Диплом РЭУ им Плеханова",
      img: "/img/compani/Диплом РЭУ им Плеханова.jpg",
      gridArea: { 
        column: '1 / 3',     // вторая колонка
        row: '2'     // занимает строки с 1 по 3
      }
    },
    {
      title: "Квалификационные аттестат бизнес 2024",
      img: "/img/compani/квал. аттестат_бизнес 2024_00001.jpg",
      gridArea: { 
        column: '3',     // третья колонка
        row: '1 / 2'     // занимает строки с 1 по 5
      }
    },
    {
      title: "Квалификационные аттестат движимость 2024",
      img: "/img/compani/квал. аттестат_движимость 2024_00001.jpg",
      gridArea: { 
        column: '1',     // первая колонка
        row: '3 '     // занимает строки с 3 по 6
      }
    },
    {
      title: "Квалификационные аттестат недвижимость 2024",
      img: "/img/compani/квал. аттестат_недвижимость 2024_00001.jpg",
      gridArea: { 
        column: '2',     // вторая колонка
        row: '3'     // занимает строки с 3 по 6
      }
    },
    {
      title: "Полис ФИНЕКС 25-26",
      img: "/img/compani/Полис ФИНЕКС 25-26.jpg",
      gridArea: { 
        column: '3',     // третья колонка
        row: '3'     // занимает строки с 5 по 8
      }
    },
  ];
  const visibleDocs = showAllDocs ? docs : docs.slice(0, 3);
  const bankLogos = [
    { title: "Сбербанк", img: "/img/banks/sber.webp" },
    { title: "ВТБ", img: "/img/banks/vtb.webp" },
    { title: "И другие банки", img: "/img/banks/other.webp" },
  ];

  return (
   <>
    <StructuredData type="organization" />
          <StructuredData type="localbusiness" />
          <StructuredData type="breadcrumb" />


           {/* Модальное окно для просмотра изображений */}
      <ImageModal 
        isOpen={!!selectedImage}
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    <main>
      {/* HERO (у тебя уже есть) */}
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
          <source src={"/video/main.webpm"} type="video/mp4" />
          <source src={"/video/main.mp4"} type="video/mp4" />
        </video>

        <div className="faceBloc-overlay"></div>

        <div className="container">
          <p className="faceBloc-text gold">
            ООО «Финэкс» и ООО «Актавия-Про». Мы объединили усилия, чтобы
            предоставить бизнесу и частным лицам экспертную оценку любой
            сложности — от квартиры до производственного комплекса.
          </p>

          <h1>13 ЛЕТ БЕЗУПРЕЧНОЙ РЕПУТАЦИИ НА РЫНКЕ ОЦЕНКИ</h1>

          <p className="slogan">
            Гарантия сдачи отчетов в срок. Аккредитация в банках. Соответствие требованиям Федеральным стандартам оценки, а так же Федерального закона "Об оценочной деятельности в Российской Федерации" от 29.07.1998 N 135-ФЗ
          </p>

          <button
            onClick={() => PopGo("Получить консультацию")}
            className="pop_up"
          >
            Получить консультацию
          </button>
        </div>
      </section>

      {/* БЛОК 3: Больше, чем просто отчет */}
      <section className="aboutBlock sectionPad aboutNew">
        <div className="container">
          <h2 className="h2 ">БОЛЬШЕ, ЧЕМ ПРОСТО ОТЧЕТ</h2>

          <div className="aboutNew-grid">
            {/* Left */}
            <div className="aboutNew-left">
              <p className="aboutNew-lead">
                Наша команда состоит из аттестованных экспертов, которые лично погружаются  в&nbsp;детали  
                <span className="aboutNew-accent"> каждого дела.</span>
              </p>

              <p className="aboutNew-text">
                Мы понимаем, что экспертиза является важным документом доказательного значения. Подготовка которого требует квалификации специалистов и высокой степени ответственности.
                Мы не просто называем стоимость — мы подсвечиваем риски, находим слабые места в документах и помогаем заказчику принять взвешенное финансовое решение.

              </p>

              <div className="aboutNew-spec">
                <h3 className="aboutNew-specTitle">НАША СПЕЦИАЛИЗАЦИЯ:</h3>
                <ul className="listGold">
                  <li>Сложные объекты (оборудование, бизнес, НМА)</li>
                  <li>Судебная экспертиза</li>
                  <li>Защита интересов в банках</li>
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="aboutNew-right">
              <div className="aboutNew-media">
                <img
                  src={"/img/compani/bos.png"}
                  alt="О компании"
                  loading="lazy"
                />
                <button
                  className="aboutNew-play"
                  type="button"
                  aria-label="Смотреть видео"
                  // onClick={() => PopGo("Видео о компании")}
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 4: Принципы */}
      <section className="principles sectionPad principlesNew">
        <div className="container">
          <h2 className="h2 principlesNew-title">НАШИ ПРИНЦИПЫ</h2>

          <div className="principlesNew-grid">
            {principles.map((p, idx) => (
              <article className="principlesNew-card" key={idx}>
                <div className="workScheme-num principlesNew-num">
                  {idx + 1}
                </div>
                <h3 className="principlesNew-cardTitle">{p.title}</h3>
                <p className="principlesNew-cardText">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 5: География и опыт */}
      <section className="geo sectionPad geoNew">
        <div className="geoNew-bg">
          <img src={"/img/fon_compani.png"} alt="" aria-hidden="true" />
        </div>

        <div className="container geoNew-content">
          <h2 className="h2 geoNew-title">РАБОТАЕМ ПО ВСЕЙ РОССИИ</h2>
          <p className="geoNew-text">
            Имеем большой опыт выполнения сложных проектов для клиентов в Москве, Сочи, Новороссийске и Хабаровске и других городах.
          </p>

          <div className="geoNew-cards">
            <div className="geoNew-card">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.5 70C50.5 70 64 52.6211 64 44.9286C64 37.236 57.9558 31 50.5 31C43.0442 31 37 37.236 37 44.9286C37 52.6211 50.5 70 50.5 70ZM50.5 53.2857C54.9735 53.2857 58.6 49.5441 58.6 44.9286C58.6 40.313 54.9735 36.5714 50.5 36.5714C46.0265 36.5714 42.4 40.313 42.4 44.9286C42.4 49.5441 46.0265 53.2857 50.5 53.2857Z"
                  fill="white"
                />
              </svg>

              <div className="geoNew-cardLabel">
                {" "}
                ООО «Центр Оценки Консалтинга» и Финансовой Экспертизы «Финэкс»
              </div>
            </div>

            <div className="geoNew-card">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50.5 70C50.5 70 64 52.6211 64 44.9286C64 37.236 57.9558 31 50.5 31C43.0442 31 37 37.236 37 44.9286C37 52.6211 50.5 70 50.5 70ZM50.5 53.2857C54.9735 53.2857 58.6 49.5441 58.6 44.9286C58.6 40.313 54.9735 36.5714 50.5 36.5714C46.0265 36.5714 42.4 40.313 42.4 44.9286C42.4 49.5441 46.0265 53.2857 50.5 53.2857Z"
                  fill="white"
                />
              </svg>

              <div className="geoNew-cardLabel">
                ООО "Актавия-Про" 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 6: Документы и аккредитации */}
        <section id='accreditation' className="docs sectionPad docsNew">
          <div className="container">
            <h2 className="h2 docsNew-title">ДОКУМЕНТЫ И АККРЕДИТАЦИИ</h2>

            <div 
              className="docs-grid-container"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: 'minmax(80px, auto)',
                gap: '25px'
              }}
            >
              {visibleDocs.map((d, idx) => (
                <figure 
                  className="docCard"
                  key={idx}
                  onClick={() => setSelectedImage(d)}
                  // style={{
                  //   gridColumn: d.gridArea.column,
                  //   gridRow: d.gridArea.row
                  // }}
                >
                  <div className="docCard-imgWrap">
                    <img src={d.img} alt={d.title} loading="lazy" />
                    <div className="docCard-zoom-icon">🔍</div>
                  </div>
                  <figcaption className="docCard-title">{d.title}</figcaption>
                </figure>
              ))}
            </div>

            {docs.length > 3 && (
              <div className="docsNew-showMore">
                <button 
                  className="show-more-btn"
                  onClick={() => setShowAllDocs(!showAllDocs)}
                >
                  {showAllDocs ? 'Скрыть' : 'Посмотреть все документы'}
                </button>
              </div>
            )}
          </div>
        </section>

      {/* БЛОК 7: Как мы работаем */}

      <section className="principles workScheme">
        <div className="container">
          <h2 className="h2">Как мы работаем</h2>

          <div className="workScheme-grid">
            {/* Левая картинка */}
            <div className="workScheme-media">
              <img src={"/img/bos.jpg"} alt="Схема работ" loading="lazy" />
            </div>

            {/* Правая часть */}
            <div className="workScheme-steps">
              {steps.map((s, idx) => (
                <div className="workScheme-step" key={idx}>
                  <div className="workScheme-num">{idx + 1}</div>

                  <div className="workScheme-text">
                    <div className="workScheme-title">{s.title}</div>
                    <div className="workScheme-sub">{s.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК 8: CTA */}
      <HelpYr theme={'оценке'}/>

    </main></>
  );
}
