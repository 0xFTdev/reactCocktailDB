import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mainContext = createContext();

const MainProvider = ({ children }) => {
  const [id, setId] = useState();
  const [daten, setDaten] = useState();
  const [cocktail, setCocktail] = useState();
  const [category, setCategory] = useState();
  const [suche, setSuche] = useState("");
  const [userCocktails, setUserCocktails] = useState([]);

  console.log(suche);
  console.log(daten);

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

  return (
    <mainContext.Provider
      value={{
        daten,
        category,
        id,
        cocktail,
        suche,
        userCocktails,
        setCategory,
        setCocktail,
        setId,
        setSuche,
        setUserCocktails,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export default MainProvider;
