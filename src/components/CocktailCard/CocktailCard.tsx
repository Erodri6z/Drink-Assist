// import React from "react"
import { Cocktail } from "../../types/Drinks/Drinks"
import './CocktailCard.css'

interface CocktailResultsProps {
  recipe: Cocktail
}

const CocktailCard = (props: CocktailResultsProps ) => {


  return (
    <div className="drink-card">
      <img src={props.recipe.strDrinkThumb} className="thumbnail" alt="thumbnail" />
        <h4 className="cocktail-name">{props.recipe.strDrink}</h4>
    </div>
  )
}

export default CocktailCard