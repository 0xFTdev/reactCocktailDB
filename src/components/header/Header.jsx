import React, { useContext, useState } from "react";
import { mainContext } from "../../context/mainProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cocktail.png";

const Header = () => {
  const { setSuche } = useContext(mainContext);
  const [suchInput, setSuchInput] = useState("");
  const navigate = useNavigate();

  const suchen = () => {
    console.log("Suchbegriff", suchInput);
    setSuche(suchInput);
    navigate("/search/suche");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "3rem", marginRight: "0.3rem" }}
            />
            Drinkify™
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <input
            type="text"
            value={suchInput}
            onChange={(e) => setSuchInput(e.target.value)}
            className="form-control me-2"
            placeholder="Search for Cocktails ..."
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={suchen}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
