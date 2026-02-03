export default function PrinciplesOperat() {
  const steps = [
    {
      title: "Заявка",
      text: "Вы оставляете заявку или звоните",
    },
    {
      title: "Анализ задачи",
      text: "Мы уточняем цели (суд, банк, продажа) и список документов",
    },
    {
      title: "Договор и оплата",
      text: "Честная цена без скрытых доплат",
    },
    {
      title: "Работа эксперта",
      text: "Выезд на объект (при необходимости) или дистанционный анализ",
    },
    {
      title: "Готовый отчет",
      text: "Передача документов, соответствующих требованиям Федеральным стандартам оценки, а так же Федерального закона \"Об оценочной деятельности в Российской Федерации\" от 29.07.1998 N 135-ФЗ",
    },
  ];

  return (
    <section className="principles workScheme">
      <div className="container">
        <h2 className="h2">Схема работ</h2>

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
  );
}
