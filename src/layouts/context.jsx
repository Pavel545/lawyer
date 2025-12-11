import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [datatype, setDataType] = useState(null);
  

  const PopGo = (type) => {
    setActive(!active);
    setDataType(type);
  }
  return (
    <AppContext.Provider value={{ active, setActive, datatype, setDataType, PopGo }}>
      {children}
    </AppContext.Provider>
  );
};

// Создаем хук для использования контекста
export const useAppContext = () => {
  return useContext(AppContext);
};
