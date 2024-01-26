import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";
import axios from "axios";

const CocktailDetails = () => {
  const { id, cocktail, setCocktail, setId } = useContext(mainContext);
  useEffect(() => {
    const getCocktail = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setCocktail(response.data.drinks);
    };
    {
      id ? getCocktail() : null;
    }
  }, [id]);
  return (
    <>
      {cocktail ? (
        <div id="cocktailDetail" className="cocktailDetail">
          <h2>{cocktail[0].strDrink}</h2>
          <h3>Zutaten</h3>
          <p>
            {cocktail[0].strIngredient1} {cocktail[0].strMeasure1}
          </p>
          <button
            onClick={() => {
              setCocktail(null);
              setId(null);
            }}
          >
            Go Back!
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CocktailDetails;
