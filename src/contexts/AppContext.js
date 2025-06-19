"use client";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = ({ title, poster_path, id }) => {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.find((fav) => fav.id === id);
      if (exists) return prevFavorites;
      return [...prevFavorites, { title, poster_path, id }];
    });
  };

  const handleRemoveFromFavorites = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== id)
    );
  };

  return (
    <AppContext.Provider value={{ favorites, handleAddToFavorites, handleRemoveFromFavorites }}>
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
