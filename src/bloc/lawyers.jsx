import { useAppContext } from "../layouts/context";

export function Lawyers() {
  const { PopGo } = useAppContext();
  return (
    <div className="container lawyers">
      <div className="lawyers_fixed">
        <div className="lawyers_fixed_content">
          <p className="big">
            Мы — команда экспертов, которая не просто «пишет отчеты», а вникает
            в суть вашего бизнеса и ситуации.
          </p>
          <button
            className="pop_up"
            onClick={()=>PopGo("Оставить заявку")}
          >
            Оставить заявку
          </button>
        </div>
      </div>
      <div className="lawyers_info">
        <p className="lawyers_info_title">
          Наша цель — не просто сдать бумагу, а защитить ваши интересы перед
              банком, судом или налоговой.
        </p>
        <div className="lawyers_info_content">
          <div>
            <p className="lawyers_info_content_h3">
              Наши преимущества:
            </p>
            <p className="big">
              компетентность мы сразу подсвечиваем слабые места и риски.
            </p>
          
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
            <p className="lawyers_info_content_h3">работаем по всей россии:</p>
            <p className="lawyers_info_content_bleac">
              Работаем в Ульяновске и дистанционно по всей России (опыт работы с
              объектами от Сочи до Хабаровска).
            </p>
          </div>
          <div>
            <p className="lawyers_info_content_h3">
              ПРЕДСТАВЛЕНИЕ ВАШИХ ИНТЕРЕСОВ И ЭКСПЕРТИЗА:
            </p>
            <p className="lawyers_info_content_bleac">
              Мы специализируемся на задачах любой сложности для бизнеса и
              частных лиц:
            </p>

            <ul className="lawyers_info_content_spisok">
              <li>
                Для Суда: Судебная экспертиза, рецензирование отчетов других
                оценщиков, выработка правовой позиции по стоимости.
              </li>
              <li>
                Для Банков: Оценка для ипотеки и залога (аккредитованы в
                банках).
              </li>
              <li>
                Для Бизнеса: Оспаривание кадастровой стоимости, оценка
                оборудования, НМА и ценных бумаг.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
