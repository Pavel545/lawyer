export function PrinciplesOperat(params) {
  return (
    <section className="principles">
      <div className="container flex ">
        <h2>ПРИНЦИП РАБОТЫ</h2>
        <div className="principles_body">
          <div className="principles_body_left ">
            <img src={process.env.PUBLIC_URL + "/img/princip1.jpg"} alt="" />
            <img src={process.env.PUBLIC_URL + "/img/princip2.jpg"} alt="" />
          </div>
          <div className="principles_body_right">
            <div className="principles_body_right_item">
              <img src={process.env.PUBLIC_URL + "/img/number/1.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Честность, прямота и беспристрастность
                <span>
                  Наша команда руководствуется высочайшими стандартами при
                  выполнении своей работы.
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={process.env.PUBLIC_URL + "/img/number/2.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Интересы клиентов
                <span>
                  Мы относимся к интересам своих клиентов как к первостепенным,
                  но всегда при условии соблюдения своих обязанностей перед
                  судом и интересами правосудия, обязанностей следовать закону и
                  этическим стандартам.{" "}
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={process.env.PUBLIC_URL + "/img/number/3.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Обязательство
                <span>
                  Мы чтим любое обязательства, принятое в ходе своей практики,
                  до тех пор, пока это обязательства не исполнено.{" "}
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={process.env.PUBLIC_URL + "/img/number/4.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Компетентность
                <span>
                  Работа выполняется компетентными юристами и своевременным
                  образом.{" "}
                </span>
              </p>
            </div>
            <div className="principles_body_right_item">
              <img src={process.env.PUBLIC_URL + "/img/number/5.png"} alt="" />
              <p className="big principles_body_right_item_text">
                Реалистичность прогнозов
                <span>
                  Наши специалисты всесторонне рассматривают и изучают ситуацию,
                  предупредят Вас о возможных рисках и дальнейшей перспективе
                  работы.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}
