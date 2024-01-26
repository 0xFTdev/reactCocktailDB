import React, { useContext, useState } from "react";
import { mainContext } from "../../context/mainProvider";

const AddCocktail = () => {
  const { setUserCocktails, userCocktails } = useContext(mainContext);
  const [formular, setFormular] = useState({
    name: "",
    category: "",
    imageUrl: "",
    description: "",
    ingredient1: "",
    measurement1: "",
    ingredient2: "",
    measurement2: "",
    ingredient3: "",
    measurement3: "",
  });

  const submitUserInput = (event) => {
    event.preventDefault();
    setUserCocktails([...userCocktails, formular]);
    setFormular({
      name: "",
      category: "",
      imageUrl: "",
      description: "",
      ingredient1: "",
      measurement1: "",
      ingredient2: "",
      measurement2: "",
      ingredient3: "",
      measurement3: "",
    });
  };

  return (
    <div>
      <h1>Add your own Cocktail</h1>
      <form onSubmit={submitUserInput}>
        <input
          type="text"
          value={formular.name}
          onChange={(e) => setFormular({ ...formular, name: e.target.value })}
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCocktail;
