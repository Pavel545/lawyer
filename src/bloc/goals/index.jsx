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
        "Судебная экспертиза, рецензирование отчетов других оценщиков.",
      icon: Scale,
    },
    {
      title: "Для Налоговой и Госструктур",
      description: "Оспаривание кадастра, внесение в уставной капитал.",
      icon: Building2,
    },
    {
      title: "Для Личных целей",
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
                <div  className="goals-item ">
                  <div className="goals-item-icon">
                    <Icon className="w-6 h-6 text-[#0a2540]" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="">{purpose.title}</h3>
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
