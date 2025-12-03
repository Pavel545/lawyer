// сдесь расписывается вся маршрутизация на сервере
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Services } from "./pages/Servies";
import { Uslugi } from "./pages/uslugi";
import { Kontacts } from "./pages/kontact";
import { Error404 } from "./pages/404";
import React, { Suspense, useState } from "react";
import "./css/global.css";
export const AppRoutes = () => {
  
  return (
      <Routes >
        <Route path="*" element={ <Error404 />}/>

        <Route path="/" element={ <><Main /></>}/>
        <Route path={`/uslugi/:direction`} element={<><Services /></> }/>
        <Route path={`/uslugi/`} element={ <Uslugi />}/>
        <Route path={`/kontacts/`} element={ <Kontacts />}/>
        
      </Routes>
    
    
    
  );
};
