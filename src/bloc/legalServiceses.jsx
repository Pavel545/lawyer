import { fizlic, yrid, general } from "../data/basa";
import { Link } from "react-router-dom";

export default function LegalServices() {
  function transliterateWord(word) {
    const mapping = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "shch",
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
      " ": "_",
    };

    return word
      .toLowerCase()
      .split("")
      .map((char) => mapping[char] || char)
      .join("");
  }

  return (
    <section id="legalServices" className="container ">
     <div className="legalServices flex">
       <h2>ОЦЕНКА И ЭКСПЕРТИЗА</h2>

          <h3>Юридическим лицам</h3>
          <div id="legalServices_yr" className="legalServices_box">
            {yrid.map((e, i) => (
              <Legal
                key={i}
                direction={e.direction}
                name={e.name}
                img={e.img}
                mini={e.mini}
              />
            ))}
          </div>
          <h3>Физическим лицам</h3>
          <div className="legalServices_box">
            {fizlic.map((e, i) => (
              <Legal
                key={i}
                direction={e.direction}
                name={e.name}
                mini={e.mini}
                img={e.img}
              />
            ))}
          </div>

          <h3>Общее</h3>
          <div className="legalServices_box">
            {general.map((e, i) => (
              <Legal
                key={i}
                direction={e.direction}
                name={e.name}
                mini={e.mini}
                img={e.img}
              />
            ))}
          </div>
     </div>
    </section>
  );
}

function Legal({ direction, name, img, mini }) {
  return (
    <Link
      preventScrollReset={false}
      className="uslug"
      title={mini}
      to={`/uslugi/${direction}`}
    >
      <div>
        <img src={img} alt={name} />
      </div>
      <p>
        {name}
        <br />
        {/* <b>{mini}</b> */}
      </p>
      <button>Подробнее</button>
    </Link>
  );
}
