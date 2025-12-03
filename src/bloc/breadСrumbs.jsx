import { NavLink, useLocation } from "react-router-dom";
import { Services_data } from "../data/data_servises";

export function BreadCrumbs() {
    const link =useLocation()
    const parts =[]= link.pathname.split("/");
    
    function Links(params) {
        if (params.title==="") {
            return(
                <NavLink to="/" className="breadCrumbs_link">
                    Главная 
                </NavLink>
            )
        }
        if (params.title==="kontacts") {
            return(
                <NavLink to="/kontacts" className="breadCrumbs_link">
                    Контакты
                </NavLink>
            )
        }
         if (params.title==="uslugi") {
            return(
                <NavLink to="/uslugi" className="breadCrumbs_link">
                    Услуги
                </NavLink>
            )

        }else  {
            return(
                <NavLink to={`/uslugi/${params.title}`} className="breadCrumbs_link">
                    {Services_data[params.title].name}
                </NavLink>
            )
        }
    }
    return(
        <div className="container">
            <div className="BreadCrumbs">
            {
                parts.map((e,i)=>(
                    <Links key={i} title={e} />
                    
                ))
            }
            </div>
            
        </div>
    )
}