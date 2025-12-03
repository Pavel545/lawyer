import { useState } from "react";

export function Questions(params) {
  const [active, setActive] = useState(2);
  return (
    <section className="questions container flex">
      <h2>ПОПУЛЯРНЫЕ ВОПРОСЫ</h2>
      <div className="questions_box">
        <div onClick={() => setActive(1)}  className={
              active === 1
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Когда нужно обращаться к юристу?</p>
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
              В самой общей форме ответ таков: как только у Вас возникли
              сомнения по поводу реализации ваших прав.
            </p>
          </div>
        </div>
        <div onClick={() => setActive(2)} className={
              active === 2
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Как не ошибиться в выборе юриста? </p>
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
              Для того чтобы выбрать подходящего юриста, нужно учитывать ряд
              первостепенных критериев. В первую очередь следует обратить
              внимание на того, кто является добросовестным специалистом и
              специализируется в той сфере, которая относится к вашему вопросу,
              а также имеет опыт в решении подобных проблем. Оценить
              компетентность юриста можно уже на первой встрече, когда он
              проявляет внимание к вам, задает уточняющие вопросы и запрашивает
              необходимые документы. Только после этого вы получите
              мотивированный, ясный и полный ответ на ваш вопрос. Обоснованное
              доверие вызывает юрист, с которым можно легко связаться и чья
              деятельность прозрачна. Важно понимать, что хотя профессионал
              прилагает все усилия для достижения результата, он не может
              гарантировать стопроцентный успех.
            </p>
          </div>
        </div>
        <div onClick={() => setActive(3)} className={
              active ===3
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Действия, которые необходимо совершить перед консультацией </p>
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
              Для начала, необходимо восстановить всю хронологию событий. Важно
              – не упустить деталей. Принесите на юридическую консультацию весь
              пакет документов, связанных с Вашей проблемой, например, в случае
              если Вам продали некачественный товар, имейте с собой чеки,
              гарантийные талоны на товар. Чем больше Вы расскажите о своей
              проблеме юристу, тем проще ему будет объяснить Вам, что надо
              сделать для решения Вашей проблемы. Если же Вы не будете до конца
              откровенны и не расскажите всех важных обстоятельств Вашей
              проблемы, то и юристу будет трудно представлять Ваши интересы в
              суде.
            </p>
          </div>
        </div>
        <div onClick={() => setActive(4)} className={
              active === 4
                ? "questions_item questions_item_active"
                : "questions_item "
            }>
          <div className="questions_item_head">
            <p>Мне поможет юрист? </p>
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
              Контролировать действия юриста – это нормально. Главное, чтобы
              этот контроль не перерос во вмешательство в работу. Вы имеете
              право представить свое видение дела, однако не стоит настаивать на
              этом, возможно, Вы можете ошибаться. Профессионал не постесняется
              обосновать, почему невозможно поступить так, как вы предполагали.
              Юрист всесторонне изучит Ваше дело, предупредит о возможных риска
              и дальнейшей перспективе работы.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
