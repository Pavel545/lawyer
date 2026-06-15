import { useAppContext } from "../layouts/context";

export default function Lawyers() {
  const { PopGo } = useAppContext();
  return (
    <div className="container ">
      <div className="lawyers">
        <div className="lawyers_fixed">
          <div className="lawyers_fixed_content">
                     <img className="lawyers_fixed_content_img" src="img/fon_about.png" alt="Наша команда"/>

          </div>
        </div>
        <div className="lawyers_info">
          <p className="lawyers_info_title">
            Надёжный партнер в сложных вопросах
          </p>
          <p className="lawyers_info_content_bleac">
            Наша цель — не просто сдать бумагу, а защитить ваши интересы перед
            банком, судом или налоговой.
          </p>
          <div className="lawyers_info_content">
            <div>
              <p className="lawyers_info_content_h3">Наши преимущества:</p>
              <ul className="lawyers_info_content_spisok">
                <li>Защита ваших интересов в суде</li>
                <li>Фиксированная стоимость — без сюрпризов</li>
                <li>Бесплатный предварительный аудит стоимости</li>
              </ul>
              <p className="lawyers_info_content_h3">компетентность:</p>
              {/* <p className="big">мы сразу подсвечиваем слабые места и риски.</p> */}
              <ul className="lawyers_info_content_spisok">
                <li>Состав команды — наша главная ценность</li>
                <li>Способность выявлять, оценивать и нивелировать риски</li>
                <li>Мы не считаем стоимость. Мы ее обосновываем</li>
              </ul>
            </div>
            <div>
              <p className="lawyers_info_content_h3">Опыт и Стабильность:</p>
              <ul className="lawyers_info_content_spisok">
                <li>
                  13 лет работы - опыт, который нельзя купить за год. Его можно
                  только заработать за десятилетие
                </li>
                <li>Мы всегда на связи — тогда, сейчас и завтра</li>
                <li>Более 5000 завершенных проектов</li>
              </ul>
            </div>

            <div>
              <p className="lawyers_info_content_h3">Ответственность:</p>

              <ul className="lawyers_info_content_spisok">
                <li> Страхование профессиональной ответственности</li>
                <li>Прозрачный процесс и этапность</li>
                <li>Конфиденциальность как основа ответственности</li>
              </ul>
            </div>
            <br />
            <div>
              <p className="lawyers_info_content_h3">
                работаем по всей России:
              </p>
              <p className="lawyers_info_content_bleac">
                Работаем по всей России (опыт работы с объектами от Сочи до
                Хабаровска).
              </p>
            </div>
            <div className="razdel_decor">
              <p className="lawyers_info_content_h3">ОЦЕНКА И ЭКСПЕРТИЗА:</p>
              <p className="lawyers_info_content_bleac">
                Мы специализируемся на задачах любой сложности для бизнеса и
                частных лиц:
              </p>

              <ul className="lawyers_info_content_spisok">
                <li>
                  Для Суда: Судебная экспертиза, рецензирование отчетов,
                  Обоснование и защита итоговой стоимости
                </li>
                <li>
                  Для Банков: Оценка для ипотеки и залога (аккредитованы в
                  банках).
                </li>
                <li>
                  Для Бизнеса: Внесение в уставной капитал, изменение балансовой
                  стоимости основных средств, решение имущественного спора, в
                  том числе нематериальных активов и ценных бумаг.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
