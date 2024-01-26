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

    if (id) {
      getCocktail();
    }
  }, [id, setCocktail]);

  return (
    <>
      {cocktail && (
        <div className="modal" style={{ display: id ? "block" : "none" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{cocktail[0].strDrink}</h5>
              <button
                className="close"
                onClick={() => {
                  setId(null);
                  setCocktail(null);
                }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h3>Zutaten</h3>
              <p>
                {cocktail[0].strIngredient1} {cocktail[0].strMeasure1}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CocktailDetails;
