import React from "react";
import { Cocktail } from "../../types/Drinks/Drinks";
// import CocktailCard from "../CocktailCard/CocktailCard";


interface CocktailRandomPickProps {
  randomDrink: {
    drinks: Cocktail
  }
}

const RandomPick: React.FC<CocktailRandomPickProps> = ({ randomDrink }) => {
  return (
    <>
    {
      randomDrink?.drinks ?
      randomDrink.drinks.map((recipe:any) => (
      <div key={recipe.idDrink} className="random-drink">
        <p>Dont Know What to drink? Try this one called "{recipe.strDrink}"</p>
      </div>))
      :
      <span></span>
    }
    </>
  )
}

export default RandomPick