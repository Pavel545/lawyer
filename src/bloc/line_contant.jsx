
export function LineContact(params) {
    return(
        <div  className="lineContact">
                <div className="container">
                    {params.line?
                    <p style={{color:"#000"}} className="big">Стоимость услуги по <span style={{color:"#003840"}}>{params.line}</span></p>:
                    <p className="big">Остались вопросы? <span className="green">Оставьте заявку </span>- поможем!</p>
                    }
                    {params.line?
                    <div data-info={params.line} data-type="Узнать стоимость" className="lineContact_button pop_up">
                    Узнать стоимость
               </div>:
                    <button data-type="Оставить заявку" className="lineContact_button pop_up">
                         Оставить заявку
                    </button>
                    }
                    
                </div>
                
        </div>
    )
}