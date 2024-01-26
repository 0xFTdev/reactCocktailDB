import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [id, setId] = useState();
  const [daten, setDaten] = useState();
  const [cocktail, setCocktail] = useState();
  const [category, setCategory] = useState();
  const [suche, setSuche] = useState("");

  useEffect(() => {
    const getCocktail = async () => {
      let url = "";

      if (category) {
        if (category === "Non_Alcoholic") {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
        } else {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`;
        }
      } else if (suche) {
        url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${suche}`;
      } else {
        url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
      }

      try {
        const response = await axios.get(url);
        if (response.data.drinks) {
          setDaten(response.data.drinks);
        }
      } catch (error) {
        console.error("Fehler bei der Datensammlung", error);
      }
    };

    getCocktail();
  }, [category, suche]);

  // useEffect(() => {
  //   const getCocktail = async () => {
  //     const response = await axios.get(
  //       `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
  //     );
  //     setDaten(response.data.drinks);
  //   };
  //   {
  //     category ? getCocktail() : null;
  //   }
  // }, [category]);

  return (
    <mainContext.Provider
      value={{
        daten,
        category,
        id,
        cocktail,
        suche,
        setCategory,
        setCocktail,
        setId,
        setSuche,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
