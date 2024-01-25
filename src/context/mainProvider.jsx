import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const fetchCocktails = async (url) => {
    const response = await axios.get(url);
    setCocktails(response.data.drinks);
  };

  useEffect(() => {
    fetchCocktails("www.thecocktaildb.com/api/json/v1/1/random.php");
  }, []);

  return (
    <mainContext.Provider
      value={{
        cocktails,
        selectedCocktail,
        fetchCocktails,
        setSelectedCocktail,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
