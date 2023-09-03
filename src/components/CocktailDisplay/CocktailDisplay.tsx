import React from "react"
// import { Cocktail } from "../../types/Drinks/Drinks"
import { useLocation } from "react-router-dom"
// import { useState } from "react"



const CocktailDisplay: React.FC = () => {

  const location = useLocation()
  const cocktailRecipe = location.state.recipe

  console.log(cocktailRecipe)


  // console.log(location.state.recipe.)

  return (
    <>
    <div className="cocktail-display">
      <h2>{cocktailRecipe.strDrink} ({cocktailRecipe.strAlcoholic})</h2>
      <div>
        <img src={cocktailRecipe.strDrinkThumb} alt="drink-picture" />
        <li className="ingredients">{cocktailRecipe.strIngredient1} {cocktailRecipe.strMeasure1}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient2} {cocktailRecipe.strMeasure2}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient3} {cocktailRecipe.strMeasure3}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient4} {cocktailRecipe.strMeasure4}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient5} {cocktailRecipe.strMeasure5}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient6} {cocktailRecipe.strMeasure6}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient7} {cocktailRecipe.strMeasure7}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient8} {cocktailRecipe.strMeasure8}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient9} {cocktailRecipe.strMeasure9}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient10} {cocktailRecipe.strMeasure10}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient11} {cocktailRecipe.strMeasure11}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient12} {cocktailRecipe.strMeasure12}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient13} {cocktailRecipe.strMeasure13}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient14} {cocktailRecipe.strMeasure14}</li>
        <li className="ingredients">{cocktailRecipe.strIngredient15} {cocktailRecipe.strMeasure15}</li>
      </div>
      <h4>Recommended Glass: {cocktailRecipe.strGlass}</h4>
      <div>
      <p>{cocktailRecipe.strInstructions}</p>
      </div>
    </div>

    </>
  )
}

export default CocktailDisplay