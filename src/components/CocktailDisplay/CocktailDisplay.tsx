import React, { useEffect, useState } from "react"
// import { Cocktail } from "../../types/Drinks/Drinks"
import { useLocation } from "react-router-dom"
import * as drinkService from './../../services/drinkService'

import './CocktailDisplay.css'
import CocktailCard from "../CocktailCard/CocktailCard"



const CocktailDisplay: React.FC = () => {

  const [cocktailRecipe, setCocktailRecipe] = useState<any>({})

  const location = useLocation()
  const cocktailId = location.state.recipe.idDrink


  useEffect(() => {
    const getDetailsOfDrink = async (id: string) => {
      const cocktailRecipe = await drinkService.getDetails(id)
      setCocktailRecipe(cocktailRecipe.drinks[0])
    }
    getDetailsOfDrink(cocktailId)
  }, [])



  console.log()

  return (
    <>
    <div className="cocktail-display">

        <div className="pic-and-ingredients">
        <div className="drink-thumbnail">
          <CocktailCard key={cocktailRecipe.idDrink} recipe={cocktailRecipe} /> 
          <p className="misc-info">Recommended Glass: {cocktailRecipe.strGlass}</p>
          <p className="misc-info">This drink is {cocktailRecipe.strAlcoholic}</p>
        </div>
        <div className="i-div">
          <p className="ingredients-title">Ingredients</p>
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
                  {`${ingredient}`}
                  <p>
                  {`( ${measure})`}
                  </p>
                </li>
              );
            }
            
            return null; 
          })}
          </div>
        </div>
      </div>
          
      <h4 className="instructions-label">Instructions</h4>
      <div className="instructions">
      <p>{cocktailRecipe.strInstructions}</p>
      </div>
    </div>

    </>
  )
}

export default CocktailDisplay