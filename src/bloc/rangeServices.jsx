import { useState } from "react";
import { useAppContext } from "../layouts/context";

export function RangeServices(params) {
  const [mass, setMass] = useState(6);
  let arr = params.funct;
  function GO() {
    setMass(arr.length);
    document.querySelector(".more").classList.add("none");
  }

  return (
    <section className="RangeServices container flex">
      <h2>
        <span className="orange">ООО «Финэкс» и ООО «Актавия-Про»</span>
        <br /> оказывает широкий спектр услуг в сфере {params.rod}, в том числе:
      </h2>
      <div className="RangeServices_list">
        {arr.slice(0, mass).map((e, i) => (
          <Funct key={i} name={e.name} text={e.text} />
          // <List key={i} text={e.name} />
        ))}
      </div>
      {arr.length > 6 && (
        <p onClick={GO} className="more">
          Посмотреть еще услуги
        </p>
      )}
    </section>
  );
}

function Funct({ name, text }) {
  const {PopGo} = useAppContext();
  return (
    <div className="uslug">
      <div>
        <p>{name}</p>
      </div>
      <span>{text}</span>
      <button onClick={()=>PopGo(name)} className="pop_up">Оставить заявку</button>
    </div>
  );
}
function List({ text }) {
  return <p className="uslug_list">{text}</p>;
}
