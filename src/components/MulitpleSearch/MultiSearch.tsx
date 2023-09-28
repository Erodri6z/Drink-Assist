import React from "react";
import { useState, useEffect } from "react";
import * as drinkService from '../../services/drinkService'
// import './IngredientsSearch.css'

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
      setRecipe('none found')
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
      }else {
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
    <form onSubmit={handleSubmit} >
      <select name="i-search" id="i-select" onChange={handleChange}>
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
              <img className="i-img" src={`https://www.thecocktaildb.com/images/ingredients/${i}-Small.png`} alt={i} />
            </li>
          )}
        </ ul>
      </div>
      <button onClick={clearOptions}>Clear</button>
    </div>
  )
}

export default MultiSearch