// import React from "react"
import { Cocktail } from "../../types/Drinks/Drinks"

interface CocktailResultsProps {
  recipe: Cocktail
}

const CocktailCard = (props: CocktailResultsProps ) => {


  return (
    <div>
      {/* <img src="" alt="placeholder" /> */}
      <div>
        <h4 className="cocktail-name">{props.recipe.idDrink}</h4>
      </div>
    </div>
  )
}

export default CocktailCard