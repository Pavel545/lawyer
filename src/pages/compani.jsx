import { useAppContext } from "../layouts/context";

export default function Compani(params) {
  const {PopGo} = useAppContext();
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
          poster={process.env.PUBLIC_URL + "/img/fon_section1.webp"}
        >
          <source
            src={process.env.PUBLIC_URL + "/video/main.webpm"}
            type="video/mp4"
          />
          <source
            src={process.env.PUBLIC_URL + "/video/main.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="faceBloc-overlay"></div>
        <div className="container">
          <p className="faceBloc-text gold">
            ООО «Финэкс» и ООО «Актавия-Про». Мы объединили усилия, чтобы предоставить бизнесу и частным лицам экспертную оценку любой сложности — от квартиры до производственного комплекса.
          </p>
          <h1>13 ЛЕТ БЕЗУПРЕЧНОЙ РЕПУТАЦИИ НА РЫНКЕ ОЦЕНКИ</h1>
          <p className="slogan">
            Гарантия сдачи отчетов в срок. Аккредитация в банках. Полное
            соответствие ФЗ-135.
          </p>
          <button onClick={()=>PopGo("Получить консультацию")} className="pop_up">
            Получить консультацию
          </button>
        </div>
      </section>
    </main>
  );
}
