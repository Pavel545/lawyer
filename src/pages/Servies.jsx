import { useLocation, useParams } from "react-router-dom";
import { BreadCrumbs } from "../bloc/breadСrumbs";
import { Services_data } from "../data/data_servises";

import "../css/Servises.css";
import { useEffect } from "react";
import { HelpYr } from "../bloc/hellpYr";
import { RangeServices } from "../bloc/rangeServices";
import  LineContact  from "../bloc/line_contant";
import { CostServises } from "../bloc/costServises";
import { useRef } from "react";

export function Services() {
  const params = useParams();
  const current = Services_data[params.direction];
 const location = useLocation();
 const videoRef = useRef(null);
  // Эффект для обработки смены страницы
  useEffect(() => {
    // Функция для полной перезагрузки видео
    const reloadVideo = () => {
      if (videoRef.current) {
        const video = videoRef.current;
        
        // Сохраняем текущие атрибуты
        const wasPlaying = !video.paused;
        const currentTime = video.currentTime;
        
        // Перезагружаем видео
        video.load();
        
        // Восстанавливаем состояние
        if (wasPlaying) {
          video.play().catch(e => console.log('Автовоспроизведение не удалось:', e));
        }
        video.currentTime = currentTime;
      }
    };

    // Вызываем после небольшой задержки для гарантии
    const timer = setTimeout(() => {
      reloadVideo();
    }, 100);

    // Прокрутка вверх
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => clearTimeout(timer);
  }, [location.key]); // Используем location.key вместо current
  if (!current) {
    return <h2 className="flex">Страница отсутствует</h2>;
  }
  let ar = [];

  if (current.tab) {
    for (let i = 0; i < current.tab.length; i++) {
      ar[i] = i;
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
              <video
                autoPlay
                loop
                muted
                pip="false"
                playsInline
                className="services_faise_img"
                ref={videoRef}
                poster={`/img/servies/${current.title}.webp`}
              >
                <source
                  src={`/video/servies/${current.title}.webm`}
                  type="video/webm"
                />
                <source
                  src={`/video/servies/${current.title}.mp4`}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="services_faise_text">
              {current.text && (
                <p
                  className="services_faise_text"
                  dangerouslySetInnerHTML={{ __html: current.text }}
                />
              )}

              <div className="services_faise_text">
                {Array.isArray(current.list) && current.list.length > 0 && (
                  <ul className="services_faise_list">
                    {current.list.map((item, idx) => (
                      <li key={`${current.title}-li-${idx}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              {current.text2 && (
                <p
                  className="services_faise_text"
                  dangerouslySetInnerHTML={{ __html: current.text2 }}
                />
              )}

              {current.textEnd && (
                <p
                  className="services_faise_text"
                  dangerouslySetInnerHTML={{ __html: current.textEnd }}
                />
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
