import React, { useContext, useEffect } from "react";
import { mainContext } from "../../context/mainProvider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
      <Link to="/cocktails/alkoholfrei">
        <button>Alkoholfrei</button>
      </Link>
      <Link to="/cocktails/zufall">
        <button>Zufall</button>
      </Link>
    </div>
  );
};

export default Home;
