import { useState } from "react";

export function Reviews() {
    const [number, setNumber] = useState(1);
    function Sled(param) {
        if (param==="go") {
            if (number!==3) {
                setNumber(number+1)
            }
        }
        if (param==="beac") {

            if (number!==1) {
                setNumber(number-1)
            }
            
        }
     }
    return (
        <div id="reviews" className="reviews">
            <div className="container">
                <div className="reviews_items">
                    <div className={number===1?"reviews_item r_active":"reviews_item"}>
                        <div className="reviews_item_star">
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                        </div>
                        <p className="reviews_item_text">
                            Спасибо за своевременное оказание юридической помощи в нужный
                            момент. Очень помогли и выручили! В случае необходимости будем
                            обращаться. Спасибо!
                        </p>
                        <p className="reviews_item_author">Лисицин Александр</p>
                        <p className="reviews_item_data">11.08.22</p>

                    </div>
                    <div className={number===2?"reviews_item r_active":"reviews_item"}>
                        <div className="reviews_item_star">
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                        </div>
                        <p className="reviews_item_text">
                            Спасибо за своевременное оказание юридической помощи в нужный
                            момент.
                        </p>
                        <p className="reviews_item_author">Шанова Рита</p>
                        <p className="reviews_item_data">06.09.22</p>

                    </div>
                    <div className={number===3?"reviews_item r_active":"reviews_item"}>
                        <div className="reviews_item_star">
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                            <img src={ "/img/Star.png"} alt="" />
                        </div>
                        <p className="reviews_item_text">
                            Спасибо !
                        </p>
                        <p className="reviews_item_author">Елескина Елена</p>
                        <p className="reviews_item_data">31.02.23</p>

                    </div>
                </div>
                <div className="arows_box">
                    <p onClick={()=>Sled("beac")} className={number<2?"arows_item":"arows_item arows_item_active"}>←</p>
                    <p onClick={()=>Sled("go")} className={number===3?"arows_item":"arows_item arows_item_active"}>→</p>
                </div>
            </div>
        </div>
    );
}
