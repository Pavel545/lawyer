import { useState } from "react";

export function Questions(params) {
  const [active, setActive] = useState(2);
  return (
    <section className="questions container flex">
      <h2>ВОПРОСЫ И ОТВЕТЫ</h2>
      <div className="questions_box">
        <div onClick={() => setActive(1)}  className={
              active === 1
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Почему стоит обратиться  нам?</p>
            <div
              
              className={
                active === 1
                  ? "questions_item_head_chek q_active"
                  : "questions_item_head_chek "
              }
            >
              <span className="questions_item_head_chek_item chek_item_1"></span>
              <span className="questions_item_head_chek_item chek_item_2"></span>
            </div>
          </div>
          <div
            className={
              active === 1
                ? "questions_item_body body_active"
                : "questions_item_body "
            }
          >
            <p>
Мы максимально клиентоориентрованны и подходим индивидуально к решению вопроса стоящего перед клиентом.
Делаете ли вы судебную экспертизу? Да, мы специализируемся на оценочной и финансово-экономической судебной экспертизе и написании рецензий на отчеты оппонентов.
Как быстро будет готов отчет?
Зависит от объекта. Квартира/транспорт — от 1-2 дней. Сложный бизнес или оборудование — обсуждается индивидуально, но сроки фиксируются в договоре.
             </p>
          </div>
        </div>
        <div onClick={() => setActive(2)} className={
              active === 2
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Делаете ли вы судебную экспертизу?</p>
            <div
              onClick={() => setActive(2)}
              className={
                active === 2
                  ? "questions_item_head_chek q_active"
                  : "questions_item_head_chek "
              }
            >
              <span className="questions_item_head_chek_item chek_item_1"></span>
              <span className="questions_item_head_chek_item chek_item_2"></span>
            </div>
          </div>
          <div
            className={
              active === 2
                ? "questions_item_body body_active"
                : "questions_item_body "
            }
          >
            <p>
              Да, мы специализируемся на судебной экспертизе и написании рецензий на отчеты оппонентов.
            </p>
          </div>
        </div>
        <div onClick={() => setActive(3)} className={
              active ===3
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Как быстро будет готов отчет? </p>
            <div
              onClick={() => setActive(3)}
              className={
                active === 3
                  ? "questions_item_head_chek q_active"
                  : "questions_item_head_chek "
              }
            >
              <span className="questions_item_head_chek_item chek_item_1"></span>
              <span className="questions_item_head_chek_item chek_item_2"></span>
            </div>
          </div>
          <div
            className={
              active === 3
                ? "questions_item_body body_active"
                : "questions_item_body "
            }
          >
            <p>
              Зависит от объекта. Квартира/транспорт — от 1-2 дней. Сложный бизнес или оборудование — обсуждается индивидуально, но сроки фиксируются в договоре жестко.
            </p>
          </div>
        </div>
        {/* <div onClick={() => setActive(4)} className={
              active === 4
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Мне поможет эксперт? </p>
            <div
              onClick={() => setActive(4)}
              className={
                active === 4
                  ? "questions_item_head_chek q_active"
                  : "questions_item_head_chek "
              }
            >
              <span className="questions_item_head_chek_item chek_item_1"></span>
              <span className="questions_item_head_chek_item chek_item_2"></span>
            </div>
          </div>
          <div
            className={
              active === 4
                ? "questions_item_body body_active"
                : "questions_item_body "
            }
          >
            <p>
              Контролировать действия эксперта – это нормально. Главное, чтобы
              этот контроль не перерос во вмешательство в работу. Вы имеете
              право представить свое видение дела, однако не стоит настаивать на
              этом, возможно, Вы можете ошибаться. Профессионал не постесняется
              обосновать, почему невозможно поступить так, как вы предполагали.
              Эксперт всесторонне изучит Ваше дело, предупредит о возможных риска
              и дальнейшей перспективе работы.{" "}
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
