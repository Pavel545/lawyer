import { Link } from "react-router-dom";

export function Error404(params) {
    return(
        <main className="error">
            <div className="container flex">
                <img className="error_img" src={process.env.PUBLIC_URL + `/404.jpg`} alt="" />
                <p>Данная страница не найдена</p>
                <Link className="but error_but" to="/">Вернуться на главную</Link>
            </div>
        </main>
    )
}