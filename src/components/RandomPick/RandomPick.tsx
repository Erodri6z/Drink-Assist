import React from "react";
import { Cocktail } from "../../types/Drinks/Drinks";
// import CocktailCard from "../CocktailCard/CocktailCard";
import './RandomPick.css'
import { Link } from "react-router-dom";



interface CocktailRandomPickProps {
  randomDrink: {
    drinks: Cocktail[]
  }
}

const RandomPick: React.FC<CocktailRandomPickProps> = ({ randomDrink }) => {
  
  return (
    <>
    {
      randomDrink?.drinks? (
        randomDrink.drinks.map((recipe: any) => (
          <div key={recipe.idDrink} className="random-drink">
        <p className="recommendation">Dont Know What to drink? Try this one called "<Link to="/cocktail-recipe" key={recipe.idDrink} state={{ recipe }}>{recipe.strDrink}</Link>"</p>
      </div>))
    ):(
      <span></span>
    )}
    </>
  )
}

export default RandomPick