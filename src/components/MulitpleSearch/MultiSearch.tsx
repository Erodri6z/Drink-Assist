import React from "react";
import { useState, useEffect } from "react";
import * as drinkService from '../../services/drinkService'
import './IngredientsSearch.css'

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

  const searchByIngredients = async () => {
    if (selectedIngredients.length === 0){
      console.log('nothing is selected')
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchByIngredients()
  }

  console.log(selectedIngredients)
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
      <button type="submit" className="spirit-btn">Search</button>
      </form>
    </div>
  )

}


export default MultiSearch