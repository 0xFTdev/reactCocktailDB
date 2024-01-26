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
    <div className="container">
      <h1>Add your own Cocktail</h1>
      <form onSubmit={submitUserInput}>
        <div className="mb-3">
          <input
            type="text"
            value={formular.name}
            onChange={(e) => setFormular({ ...formular, name: e.target.value })}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCocktail;
