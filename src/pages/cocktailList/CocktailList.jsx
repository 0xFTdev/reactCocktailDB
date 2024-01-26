import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";
import { useParams } from "react-router-dom";
import CocktailDetails from "../../components/cocktailDetails/CocktailDetails";

const CocktailList = () => {
  const { daten, category, setId, setCategory } = useContext(mainContext);
  const { categories } = useParams();

  useEffect(() => {
    setCategory(categories);
  }, [daten]);
  return (
    <>
      <CocktailDetails />
      {daten ? (
        <>
          <h2>{category}</h2>
          {daten.map((cocktail, index) => {
            return (
              <div key={index}>
                <h3>{cocktail.strDrink}</h3>
                <img src={cocktail.strDrinkThumb} />
                <button onClick={() => setId(cocktail.idDrink)}>
                  See Details
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default CocktailList;
