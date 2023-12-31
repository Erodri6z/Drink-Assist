import React from "react";
import { useState, useEffect } from "react";
import * as drinkService from '../../services/drinkService'
import './MultiSearch.css'

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}

const MultiSearch: React.FC<DataFetchingProps> = ({ setRecipe }) => {
  
  const [ingredients, setIngredients] = useState<any[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    const getIngredients = async () => {
      const ingredientList = await drinkService.getAlIngredients()
      setIngredients(ingredientList.drinks.sort((a:any , b:any) => a.strIngredient1.localeCompare(b.strIngredient1)))
    }
    getIngredients()
  }, [])

  useEffect(() => {
    const intSearch = async () => {
      searchByIngredients()
    }
    intSearch()
  }, [selectedIngredients])

  const searchByIngredients = async () => {
    if (selectedIngredients.length === 0){
      return
    }
    const drinksList = await drinkService.getDrinksByAlcohol(
      selectedIngredients.join(",")
      )
      setRecipe(drinksList)
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = e.target.value 
      if(selectedIngredients.includes(selectedOption)) {
        setSelectedIngredients((prevIngredient) => 
        prevIngredient.filter((ingredient) => ingredient !== selectedOption)
        )
      } else if (selectedIngredients.length === 5){
        console.log('limit reached')
      } else {
        setSelectedIngredients((prevIngredients) => [
          ...prevIngredients,
          selectedOption,
        ]
        )
      }
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchByIngredients()
  }


  const clearOptions = () => {
    setSelectedIngredients([])
  }
  return (
    <div className="i-search-component">
      <p className="multi">Multi Select</p>
    <form onSubmit={handleSubmit} >
      <select name="i-search" id="i-select" onChange={handleChange}>
        <option value="">Select Multi</option>
          {ingredients.map((i:any) => 
            <option key={i.strIngredient1} value={i.strIngredient1}>
              {i.strIngredient1}
            </option>
          )}
        </select>
      </form>
      <div className="ingredient-div">
        <ul className="ingredient-imgs">
          {selectedIngredients.map((i) =>
            <li key={i}>
              <img className="mi-img" src={`https://www.thecocktaildb.com/images/ingredients/${i}-Small.png`} alt={i} />
            </li>
          )}
        </ ul>
      </div>
      <button onClick={clearOptions}>Clear</button>
    </div>
  )
}

export default MultiSearch