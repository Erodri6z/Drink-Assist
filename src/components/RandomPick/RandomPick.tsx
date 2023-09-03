import React from "react";
import { Cocktail } from "../../types/Drinks/Drinks";


interface CocktailRandomPickProps {
  randomPick: {
    drink: Cocktail
  }
}

const RandomPick: React.FC<CocktailRandomPickProps> = ({ randomPick }) => {
  return (
    <div>
      
    </div>
  )
}

export default RandomPick