export function PrinciplesOperat(params) {
  return (
    <section className="principles">
      <div className="container flex ">
        <h2>Схема работы</h2>
        <div className="principles_body">
          <div className="principles_body_left ">
            <img src={ "/img/princip1.webp"} alt="" />
            <img src={ "/img/princip2.webp"} alt="" />
          </div>
          <div className="principles_body_right">
            <div className="principles_body_right_item">
              <img src={ "/img/number/1.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Заявка
                <span>Вы оставляете заявку или звоните.</span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={ "/img/number/2.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Анализ задачи
                <span>
                  Мы уточняем цели (суд, банк, продажа) и список документов.
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={ "/img/number/3.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Договор и Оплата
                <span>Честная цена без скрытых доплат.</span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={ "/img/number/4.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Работа эксперта
                <span>
                  Выезд на объект (при необходимости) или дистанционный анализ.
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={ "/img/number/5.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Готовый отчет
                <span>
                  Передача документов, соответствующих всем стандартам ФСО и
                  ФЗ-135.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
