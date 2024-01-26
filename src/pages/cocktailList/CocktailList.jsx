import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";
import { useParams } from "react-router-dom";
import CocktailDetails from "../../components/cocktailDetails/CocktailDetails";
import Header from "../../components/header/Header";

const CocktailList = () => {
  const { daten, category, setId, setCategory } = useContext(mainContext);
  const { categories } = useParams();

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  return (
    <>
      <Header />
      <CocktailDetails />
      <div className="container">
        <h2>{category}</h2>
        <div className="row">
          {daten ? (
            daten.map((cocktail, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card">
                  <img
                    src={cocktail.strDrinkThumb}
                    className="card-img-top"
                    alt={cocktail.strDrink}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cocktail.strDrink}</h5>
                    {/* Use data-toggle and data-target to trigger the modal */}
                    <button
                      className="btn btn-primary"
                      onClick={() => setId(cocktail.idDrink)}
                      data-bs-toggle="modal"
                      data-bs-target="#cocktailDetailModal"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CocktailList;
