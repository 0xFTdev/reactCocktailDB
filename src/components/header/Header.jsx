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
    <div>
      <input
        type="text"
        value={suchInput}
        onChange={(e) => setSuchInput(e.target.value)}
        placeholder="Suche nach Cocktails ..."
      />
      <button onClick={suchen}>Suchen</button>
    </div>
  );
};

export default Header;
