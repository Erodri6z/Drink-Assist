import React, { useEffect } from "react"
import { useState } from "react"
import * as drinkService from './../../services/drinkService'
import './SideBar.css'

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}



const SideBar: React.FC<DataFetchingProps> = ({ setRecipe }) => {
  
  const [ingredients, setIngredients] = useState<any>([])
  
  useEffect(() => {
    const getIngredients = async () => {
      const ingredientList = await drinkService.getAlIngredients()
      setIngredients(ingredientList.drinks.sort((a:any , b:any) => a.strIngredient1.localeCompare(b.strIngredient1)))
    }
    getIngredients()
  }, [])


  // console.log(ingredients.sort((a:any , b:any) => a.strIngredient1.localeCompare(b.strIngredient1)))

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

  // const showForm = ():boolean => {
  //   const currentURL = window.location.href
  //   return currentURL.includes('/cocktail-recipe')
  // }

  // showForm()


  return (
    <>
    <div className="sidebar">
      <ul>
        <p>Spirits Or Ingredients</p>
        <li className="spirit-list">
          <div className="home-btn">
            <a href="/">
              <h4>Home</h4>
            </a>
          </div>
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
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar