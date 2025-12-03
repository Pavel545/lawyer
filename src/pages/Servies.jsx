import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../bloc/breadСrumbs";
import { Services_data } from "../data/data_servises";

import "../css/Servises.css";
import { useEffect, useState } from "react";
import { HelpYr } from "../bloc/hellpYr";
import { RangeServices } from "../bloc/rangeServices";
import { Popup } from "../bloc/fos_popup";
import { LineContact } from "../bloc/line_contant";
import { CostServises } from "../bloc/costServises";
import { yrid } from "../data/basa";

export function Services() {
  const params = useParams();
  const current = Services_data[params.direction];

  const [chek, setChek] = useState(null);
  const [yur, setYur] = useState(false);

  const [modal,setModal]=useState(false)
  const [data,setData]=useState(null)
  setTimeout(() => Start(), 500)
  
  const Start = ()=>{
    
    const butt=document.querySelectorAll(".pop_up")
  
    butt.forEach((e)=>{
      e.addEventListener("click",()=>{
        
        setModal(!modal)
        setData(e.dataset.type)
      })
    })
  }
  
  
    if (!current) {
      return (
        <h2 className="flex">Страница отсутствует</h2>
      )
    }
    let ar =[]

    if (current.tab) {
      for (let i = 0; i < current.tab.length; i++) {
        ar[i]=i
      }
    }
    
    function Open(i) {
      console.log(chek);
      if (chek===i) {
        setChek(null)
        
      }else{
         setChek(i)
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
                <img src={process.env.PUBLIC_URL + `/img/servies/${current.title}.jpg`} alt={current.name} />
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
              {current.tab &&
                
                  current.tab.map((e,i)=>(
                    <div key={i}  onClick={(e) => Open(i)}
                  className={
                    chek===i
                      ? "services_faise_ul_box services_faise_ul_box_active"
                      : "services_faise_ul_box "
                  }
                >
                  <span  data-index={i}
                    
                    className={chek===i ? "qw qw_active" : "qw "}
                  ></span>
                  <p  className="services_faise_ul_name" dangerouslySetInnerHTML={{ __html: e.tabName }}>
                    
                  </p>
                  <ul  dangerouslySetInnerHTML={{ __html: e.tabBody }} className="services_faise_ul">
                    
                  </ul>
                </div>
                  ))
                
              }
              {current.textEnd &&
                <p
                className="services_faise_text"
                dangerouslySetInnerHTML={{ __html: current.textEnd }}
              ></p>}
            </div>
          </div>
        </div>
      </section>
      <HelpYr theme={current.help}/>
      <RangeServices rod={current.rod} funct={current.funct}/>
      {/* {current.yslug&&
      <CostServises/>
      }
       */}
      {current.line?
      <LineContact line={current.line} />:
      <LineContact  />
      }
      <Popup active={modal} setActive={setModal} datatype={data}/>
    </main>
  );
}
