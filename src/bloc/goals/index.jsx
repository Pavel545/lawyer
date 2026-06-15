import { Building2, Landmark, Scale, Users } from "lucide-react";
import "./goals.css";

export default function Goals(params) {
  const purposes = [
    {
      title: "Для Банков",
      description: "Ипотека, залог, кредитование (аккредитованы в банках).",
      icon: Landmark,
    },
    {
      title: "Для Суда",
      description:
        "Судебная экспертиза, рецензия судебной экспертизы",
      icon: Scale,
    },
    {
      title: "Для Налоговой и Госструктур",
      description: "Подтверждение стоимости сделки при купле-продаже, стоимости имущества для обеспечения.",
      icon: Building2,
    },
    {
      title: "Для НАСЛЕДСТВА",
      description: "Наследство, раздел имущества, купля-продажа.",
      icon: Users,
    },
  ];

  return (
    <section className="goals">
      <div className="container flex ">
        <h2>Для каких целей мы работаем</h2>

        <div className="goals-content">
          {purposes.map((purpose, index) => {
            const Icon = purpose.icon;
            return (
              <div key={index} className="goals-item-contain">
                <div className="goals-item ">
                  <div className="goals-item-icon">
                    <Icon className=" text-[#0a2540]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 >{purpose.title}</h3>
                    <p className="">{purpose.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
