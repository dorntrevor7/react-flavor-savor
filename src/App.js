import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe";
import "./App.css";

function App() {
  const recipeID = "43295c4f";
  const recipeKEY = "8ec387abba983b997fa25e14be336ccc";
  const [recipe, setRecipes] = useState([]);
  const recipeURL = `https://api.edamam.com/search?app_key=
    ${recipeKEY}
    &app_id=
    ${recipeID}
    &q=recipe
    &to=18`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(recipeURL);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <>
      <div className="App">
        <p>Recipe List</p>
        <form></form>
        {recipe.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
