import React, {useEffect, useState} from 'react';
import Rezept from './Rezept'
import './App.css';

const App = () => {
  const APP_ID = "2da5a007";
  const APP_KEY = "b6a8d44bd4848952270856608eb3725f";

  const [rezepte, setRezept] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("banana");

//Wenn query verändert, führe getRezept() aus
  useEffect( async () => {
    getRezept();
  }, [query]);

//Fetch Rezepte vom API & schreibt in rezepte rein
  const getRezept = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRezept(data.hits);
  }

//Schreibt Input in search rein
  const updateSearch = event => {
    setSearch(event.target.value);
  }

//Input bekommen, wenn Form submit
const getSearch = event => {
  //Kein Page refresh
  event.preventDefault();
  setQuery(search);
  setSearch("");
}

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="Suche nach Essen" className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="rezepte">
      {rezepte.map(rec => (
        <Rezept
        key={rec.recipe.label}
        title={rec.recipe.label}
        calories={rec.recipe.calories}
        img={rec.recipe.image}
        ingredients={rec.recipe.ingredients}/>
    ))}
      </div>
    </div>
  );
}

export default App;
