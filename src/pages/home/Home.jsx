import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import gin from "../../assets/images/gin.png";
import rum from "../../assets/images/rum.png";
import scotch from "../../assets/images/scotch.png";
import vodka from "../../assets/images/vodka.png";
import zero from "../../assets/images/nonalcoholic.png";
import random from "../../assets/images/random.png";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mt-3">
        <div className="carousel">
          <h4>Welcome to the wonderful world of cocktails!</h4>
          <Carousel>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/gin">
                <img className="d-block w-100" src={gin} alt="Image One" />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/rum">
                <img className="d-block w-100" src={rum} alt="Image Two" />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/scotch">
                <img className="d-block w-100" src={scotch} alt="Image Two" />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/vodka">
                <img className="d-block w-100" src={vodka} alt="Image Two" />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/Non_Alcoholic">
                <img className="d-block w-100" src={zero} alt="Image Two" />
              </Link>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Link to="/cocktails/zufall">
                <img className="d-block w-100" src={random} alt="Image Two" />
              </Link>
            </Carousel.Item>
          </Carousel>
        </div>
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
      <Footer />
    </>
  );
};

export default Home;
