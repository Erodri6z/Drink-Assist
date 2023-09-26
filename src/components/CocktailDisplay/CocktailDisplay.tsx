import React, { useEffect, useState } from "react"
// import { Cocktail } from "../../types/Drinks/Drinks"
import { useLocation } from "react-router-dom"
import * as drinkService from './../../services/drinkService'

import './CocktailDisplay.css'
import CocktailCard from "../CocktailCard/CocktailCard"
import ICard from "../I-Card/ICard"



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
          <div className="card">
            <CocktailCard key={cocktailRecipe.idDrink} recipe={cocktailRecipe} /> 
          </div>
          <div className="drink-pic">
            <h2>{cocktailRecipe.strDrink}</h2>
            <img src={cocktailRecipe.strDrinkThumb} alt="drink-pic" className="drink-photo"/>
          </div>
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

            if (ingredient) {
              return (
                <li key={ingredientKey} className="ingredients">
                  <ICard  ingredient={ingredient} measure={measure}/>
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