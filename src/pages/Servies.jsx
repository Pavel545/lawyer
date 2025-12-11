import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../bloc/breadСrumbs";
import { Services_data } from "../data/data_servises";

import "../css/Servises.css";
import { useState } from "react";
import { HelpYr } from "../bloc/hellpYr";
import { RangeServices } from "../bloc/rangeServices";
import { LineContact } from "../bloc/line_contant";
import { CostServises } from "../bloc/costServises";

export function Services() {
  const params = useParams();
  const current = Services_data[params.direction];

  const [chek, setChek] = useState(null);

  if (!current) {
    return <h2 className="flex">Страница отсутствует</h2>;
  }
  let ar = [];

  if (current.tab) {
    for (let i = 0; i < current.tab.length; i++) {
      ar[i] = i;
    }
  }

  function Open(i) {
    console.log(chek);
    if (chek === i) {
      setChek(null);
    } else {
      setChek(i);
    }
  }

  return (
    <main className="services">
      <BreadCrumbs />
      <section className="services_faise">
        <div className="container flex">
          <h1 className="h2">{current.name}</h1>
          <div className="services_faise_box">
            <div className="services_faise_img">
              <img
                src={
                  process.env.PUBLIC_URL + `/img/servies/${current.title}.png`
                }
                alt={current.name}
              />
            </div>
            <div className="services_faise_text">
              <h3
                className="services_faise_title"
                dangerouslySetInnerHTML={{ __html: current.text }}
              ></h3>
              <p
                className="services_faise_text"
                dangerouslySetInnerHTML={{ __html: current.text2 }}
              ></p>

              {current.textEnd && (
                <p
                  className="services_faise_text"
                  dangerouslySetInnerHTML={{ __html: current.textEnd }}
                ></p>
              )}
            </div>
          </div>
        </div>
      </section>
      <HelpYr theme={current.help} />
      <RangeServices rod={current.rod} funct={current.funct} />
      <CostServises tab={current.tab} />
      {current.line ? <LineContact line={current.line} /> : <LineContact />}
    </main>
  );
}
