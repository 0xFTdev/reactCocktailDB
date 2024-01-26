import React, { useContext, useState } from "react";
import { mainContext } from "../../context/mainProvider";
import { useNavigate } from "react-router-dom";

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
    </nav>
  );
};

export default Header;
