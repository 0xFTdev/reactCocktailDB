import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [id, setId] = useState();
  const [daten, setDaten] = useState();
  const [cocktail, setCocktail] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    const getCocktail = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );
      setDaten(response.data.drinks);
    };
    {
      category ? getCocktail() : null;
    }
  }, [category]);

  return (
    <mainContext.Provider
      value={{ daten, category, id, cocktail, setCategory, setCocktail, setId }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
