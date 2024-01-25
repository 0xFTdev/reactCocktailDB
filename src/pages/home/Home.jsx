import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";

const Home = () => {
  const { fetchCocktails } = useContext(mainContext);
  useEffect(() => {
    fetchCocktails("www.thecocktaildb.com/api/json/v1/1/random.php");
  }, [fetchCocktails]);
  return <div>Home</div>;
};

export default Home;
