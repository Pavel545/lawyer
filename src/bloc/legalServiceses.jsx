import { useRef } from "react"
import { fizlic,yrid } from "../data/basa"
import { Link, NavLink } from "react-router-dom"



export function LegalServices() {
    
    return(
        <section id="legalServices" className="container legalServices flex">
            <h2 >
            ЮРИДИЧЕСКИЕ УСЛУГИ
            </h2>
            <h3>
            Физическим лицам
            </h3>
            <div className="legalServices_box">
                {
                    fizlic.map((e,i)=>(
                        <Legal key={i} direction={e.direction} name={e.name} img={e.img}/>
                        ))
                }
            </div>
            <h3>
            Юридическим лицам
            </h3>
            <div id="legalServices_yr" className="legalServices_box">
                {
                    yrid.map((e,i)=>(
                        <Legal key={i} direction={e.direction} name={e.name} img={e.img} mini={e.mini}/>
                        ))
                }
            </div>
            
      </section>
    )
}

function Legal({direction,name,img,mini}) {
    return(
        <Link preventScrollReset={false} className="uslug" to={`/uslugi/${direction}`} >
            <div>
            <img src={img} alt={name} />
            </div>
            <p>
            {name}<br/>
            <b>
            {mini}
            </b>
            </p>
            <button>Подробнее</button>
        </Link>
    )
}