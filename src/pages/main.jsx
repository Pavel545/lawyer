import { useRef, useState } from "react";
import { Lawyers } from "../bloc/lawyers";
import { LegalServices } from "../bloc/legalServiceses";
import { LineContact } from "../bloc/line_contant";
import { PrinciplesOperat } from "../bloc/principlesOperat";
import { Questions } from "../bloc/questions";
import { Reviews } from "../bloc/reviews";
import "../css/main.css";
import { Popup } from "../bloc/fos_popup";
import { useEffect } from "react";
import { WeWork } from "../bloc/weWork";

export function Main(params) {
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
  return (
    <main>
      <section className="faceBloc">
        <div className="container">
          <p className="gold">Мы предлагаем</p>
          <h1>Профессиональную ЮРИДИЧЕСКУЮ ПОМОЩЬ</h1>
          <p className="slogan">Наша работа - защита ваших интересов.</p>
          <button  data-type="Получить консультацию" className="pop_up">
          Получить консультацию
          </button>
        </div>
      </section>
      <LegalServices/>
      <WeWork/>
      <PrinciplesOperat/>
      <Lawyers />
      <Reviews/>
      <Questions/>
      <LineContact />
      <Popup active={modal} setActive={setModal} datatype={data}/>
    </main>
  );
}


