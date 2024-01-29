import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../../context/mainProvider";
import axios from "axios";

const CocktailDetails = () => {
  const { id, cocktail, setCocktail, setId } = useContext(mainContext);
  const [zutaten, setZutaten] = useState();
  const [menge, setMenge] = useState();

  useEffect(() => {
    const getCocktail = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setCocktail(response.data.drinks);
      const arrZuObj = response.data.drinks[0];
      Object.keys(arrZuObj).forEach(
        (key) => !arrZuObj[key] && delete arrZuObj[key]
      );
      const filteredToArray = Object.entries(arrZuObj);
      const zutaten = filteredToArray.filter((obj) => {
        return obj.some((el) => el.includes("strIngredient"));
      });
      setZutaten(zutaten);
      const menge = filteredToArray.filter((obj) => {
        return obj.some((el) => el.includes("strMeasure"));
      });
      setMenge(menge);
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
              <div className="closeButton">
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
              <div className="imgTitle">
                <h5 className="modal-title">{cocktail[0].strDrink}</h5>
                <img
                  src={cocktail[0].strDrinkThumb}
                  alt={cocktail[0].strDrink}
                  width="250px"
                />
              </div>
            </div>
            <div className="modal-body">
              <h3>Zutaten</h3>
              <div className="zutatenListe">
                <div>
                  {menge.map((element, index) => {
                    return <p key={index}>{element[1]}</p>;
                  })}
                </div>
                <div>
                  {zutaten.map((element, index) => {
                    return <p key={index}>{element[1]}</p>;
                  })}
                </div>
              </div>
              <h3>Beschreibung</h3>
              <p>{cocktail[0].strInstructionsDE}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CocktailDetails;
