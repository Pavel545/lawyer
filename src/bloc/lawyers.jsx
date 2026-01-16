import { useAppContext } from "../layouts/context";

export function Lawyers() {
  const { PopGo } = useAppContext();
  return (
    <div className="container ">
      <div className="lawyers">
        <div className="lawyers_fixed">
          <div className="lawyers_fixed_content">
            <p className="big">
              Мы — команда экспертов, которая не просто «пишет отчеты», а
              вникает в суть вашего бизнеса и ситуации.
            </p>
            <button className="pop_up" onClick={() => PopGo("Оставить заявку")}>
              Оставить заявку
            </button>
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
              <p className="lawyers_info_content_h3">компетентность:</p>
              {/* <p className="big">мы сразу подсвечиваем слабые места и риски.</p> */}
              <ul className="lawyers_info_content_spisok">
                <li>мы сразу подсвечиваем слабые места и риски.</li>
              </ul>
            </div>
            <div>
              <p className="lawyers_info_content_h3">Опыт и Стабильность:</p>
              <ul className="lawyers_info_content_spisok">
                <li>13 лет на рынке.</li>
                <li>
                  Штатные сотрудники с квалификационными аттестатами (сдаем
                  экзамены каждые 3 года).
                </li>
              </ul>
              <p className="lawyers_info_content_bleac">
                Обращаясь к нам, Вы получите полноценную консультацию эксперта с
                изучением документов и анализом ситуации.
              </p>
            </div>
            <div>
              <p className="lawyers_info_content_h3">Ответственность:</p>
              <p className="lawyers_info_content_punkt">
                Нас не нужно контролировать.
              </p>
              <p className="lawyers_info_content_punkt">
                Соблюдение сроков — наш принцип.
              </p>
            </div>
            <br />
            <div>
              <p className="lawyers_info_content_h3">
                работаем по всей России:
              </p>
              <p className="lawyers_info_content_bleac">
                Работаем  по всей России (опыт работы
                с объектами от Сочи до Хабаровска).
              </p>
            </div>
            <div className="razdel_decor">
              <p className="lawyers_info_content_h3">
                ОЦЕНКА И ЭКСПЕРТИЗА:
              </p>
              <p className="lawyers_info_content_bleac">
                Мы специализируемся на задачах любой сложности для бизнеса и
                частных лиц:
              </p>

              <ul className="lawyers_info_content_spisok">
                <li>
                  Для Суда: Судебная экспертиза, рецензирование отчетов, Обоснование и защита итоговой стоимости
                </li>
                <li>
                  Для Банков: Оценка для ипотеки и залога (аккредитованы в банках).
                </li>
                <li>
                 Для Бизнеса: Внесение в уставной капитал, изменение балансовой стоимости основных средств, решение имущественного спора, в том числе нематериальных активов и ценных бумаг.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
