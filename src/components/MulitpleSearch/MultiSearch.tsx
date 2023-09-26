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

  const searchByIngredient = async (spirit: string) => {
    const drinksList = await drinkService.getDrinksByAlcohol(spirit)
    setRecipe(drinksList)
  }

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    searchByIngredient(query);
  };


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(searchQuery); 
  };
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