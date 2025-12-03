export function Lawyers(params) {
  return (
    <div className="container lawyers">
      <div className="lawyers_fixed">
        <div className="lawyers_fixed_content">
          <p className="big">
            
              Будем рады помочь в Вашем вопросе и компетентно сопроводить Ваше
              дело!
            
          </p>
          <button  className="pop_up" onClick={params.popupClick} data-type="Оставить заявку">Оставить заявку</button>
        </div>
      </div>
      <div className="lawyers_info">
        <p className="lawyers_info_title">
          Наши <span>юристы</span> имеют многолетний успешный опыт в разрешении
          конфликтов любой сложности.
        </p>
        <div className="lawyers_info_content">
          <div>
            <p className="lawyers_info_content_h3">
              Наши преимущества заключаются:
            </p>
            <p className="big">
              в том, что мы ищем пути решения проблемы на стадии досудебного
              урегулирования.
            </p>
            <p className="lawyers_info_content_bleac">
              Но если дело все же доведено до суда, мы станем для вас надежным
              проводником в сложной законодательной системе, подготовив
              необходимые документы и выработав правовую позицию по делу.
            </p>
          </div>
          <div>
            <p className="lawyers_info_content_h3">
              Дела наших клиентов лежат в различных областях права:
            </p>
            <ul className="lawyers_info_content_spisok">
              <li>семейное;</li>
              <li>трудовое;</li>
              <li>жилищное;</li>
              <li>защита прав потребителей и др.</li>
            </ul>
            <p className="lawyers_info_content_bleac">
              Обращаясь к нам, Вы получите полноценную консультацию юриста с
              изучением документов и анализом ситуации.
            </p>
          </div>
          <div>
            <p className="lawyers_info_content_h3">
              Представление Ваших интересов в суде включает в себя :
            </p>
            <p className="lawyers_info_content_punkt">
              ознакомление с материалами дела, проведение правового анализа;{" "}
            </p>
            <p className="lawyers_info_content_punkt">
            подготовка и подача искового заявления, письменных возражений и прочих процессуальных документов;             </p>
            <p className="lawyers_info_content_punkt">
            разработка и заключение мировых соглашений.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
