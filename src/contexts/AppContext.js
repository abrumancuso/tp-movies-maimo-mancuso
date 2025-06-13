"use client";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = ({ title, poster_path, id }) => {
    setFavorites((favorites) => [...favorites, { title, poster_path, id }]);
  };

  return (
    <AppContext.Provider value={{ favorites, handleAddToFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContext;
