import React, { useContext, useState } from "react";
import { mainContext } from "../../context/mainProvider";

const Header = () => {
  const { setSuche } = useContext(mainContext);
  const [suchInput, setSuchInput] = useState("");

  const suchen = () => {
    console.log("Suchbegriff", suchInput);
    setSuche(suchInput);
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
