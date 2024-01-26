import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import CocktailList from "./pages/cocktailList/CocktailList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails/:categories" element={<CocktailList />} />
        <Route path="/search/suche" element={<CocktailList />} />
      </Routes>
    </>
  );
}

export default App;
