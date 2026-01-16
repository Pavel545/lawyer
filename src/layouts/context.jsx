import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [datatype, setDataType] = useState(null);
  const [title, settitle] = useState(null);
  

  const PopGo = (type, title) => {
    setActive(!active);
    setDataType(type);
    settitle(title)
    if (!active) {
      document.body.style.overflow = "hidden";
    } 
  }

  const closePop = () => {
    setActive(false);
    document.body.style.overflow = "auto";
  }
  return (
    <AppContext.Provider value={{ active, setActive, datatype, setDataType, PopGo, title, settitle, closePop }}>
      {children}
    </AppContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useAppContext = () => {
  return useContext(AppContext);
};
