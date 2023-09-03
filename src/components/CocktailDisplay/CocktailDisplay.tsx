import React from "react"
// import { Cocktail } from "../../types/Drinks/Drinks"
import { useLocation } from "react-router-dom"
// import { useState } from "react"

import './CocktailDisplay.css'



const CocktailDisplay: React.FC = () => {

  const location = useLocation()
  const cocktailRecipe = location.state.recipe

  console.log(cocktailRecipe)


  // console.log(location.state.recipe.)

  return (
    <>
    <div className="cocktail-display">
      <h2 className="drink-name">{cocktailRecipe.strDrink} ({cocktailRecipe.strAlcoholic})</h2>
        <div className="pic-and-ingredients">
        <img
          src={cocktailRecipe.strDrinkThumb}
          className="drink-thumbnail"
          alt="drink-picture"
        />
        <div className="ingredients-list">
          {Array.from({ length: 15 }, (_, index) => {
            const ingredientKey = `strIngredient${index + 1}`;
            const measureKey = `strMeasure${index + 1}`;
            const ingredient = cocktailRecipe[ingredientKey];
            const measure = cocktailRecipe[measureKey];

            if (ingredient && measure) {
              return (
                <li key={ingredientKey} className="ingredients">
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
                    alt={ingredient}
                    className="img-ingredients"
                  />
                  {`${ingredient} ${measure}`}
                </li>
              );
            }

            return null; 
          })}
        </div>
      </div>
      <h4>Recommended Glass: {cocktailRecipe.strGlass}</h4>
      <div className="instructions">
      <p>{cocktailRecipe.strInstructions}</p>
      </div>
    </div>

    </>
  )
}

export default CocktailDisplay