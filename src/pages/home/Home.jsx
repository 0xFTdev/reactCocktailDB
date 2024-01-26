import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <div className="row">
          <div className="col">
            <Link to="/cocktails/gin" className="btn btn-primary me-2">
              Gin
            </Link>
            <Link to="/cocktails/vodka" className="btn btn-primary me-2">
              Vodka
            </Link>
            <Link to="/cocktails/rum" className="btn btn-primary me-2">
              Rum
            </Link>
            <Link to="/cocktails/scotch" className="btn btn-primary me-2">
              Scotch
            </Link>
            <Link
              to="/cocktails/Non_Alcoholic"
              className="btn btn-primary me-2"
            >
              Alkoholfrei
            </Link>
            <Link to="/cocktails/zufall" className="btn btn-primary me-2">
              Zufall
            </Link>
            <Link to="/add-cocktail" className="btn btn-primary me-2">
              Add Cocktail
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
