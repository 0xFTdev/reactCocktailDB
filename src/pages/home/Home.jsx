import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div>
          <Link to="/cocktails/gin">
            <button>Gin</button>
          </Link>
          <Link to="/cocktails/vodka">
            <button>Vodka</button>
          </Link>
          <Link to="/cocktails/rum">
            <button>Rum</button>
          </Link>
          <Link to="/cocktails/scotch">
            <button>Scotch</button>
          </Link>
          <Link to="/cocktails/Non_Alcoholic">
            <button>Alkoholfrei</button>
          </Link>
          <Link to="/cocktails/zufall">
            <button>Zufall</button>
          </Link>
          <Link to="/add-cocktail">
            <button>Add Cocktail</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
