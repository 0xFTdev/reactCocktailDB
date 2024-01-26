import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import CocktailList from "./pages/cocktailList/CocktailList";
import AddCocktail from "./pages/addCocktail/AddCocktail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails/:categories" element={<CocktailList />} />
        <Route path="/search/suche" element={<CocktailList />} />
        <Route path="/add-cocktail" element={<AddCocktail />} />
      </Routes>
    </>
  );
}

export default App;
