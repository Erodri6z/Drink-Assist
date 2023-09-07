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
      setIngredients(ingredientList.drinks.sort())
    }
    getIngredients()
  },[])


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
    <>
    <div className="sidebar">
      <ul>
        <p>Spirits Or Ingredients</p>
        {/* <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('vodka')}>Vodka</button>
        </li>
        <li className="catagory">
          <li>Whiskey</li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('whiskey')}>American Whiskey</button>
          </li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('scotch') }>Scotch</button>
          </li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('whisky') }>Canadian Whisky</button>
          </li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('irish whiskey') }>Irish Whiskey</button>
          </li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('bourbon') }>Bourbon</button>
          </li>
          <li className="spirit-list">
            <button className="spirit-btn" onClick={() => searchByIngredient('irish cream') }>Irish Cream</button>
          </li>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('gin') }>Gin</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('tequila')} > Tequila </button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('mezcal')}>Mezcal</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('light_rum')}>Light Rum</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('dark_rum')}>Dark Rum</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('cognac')}>Cognac</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('brandy')}>Brandy</button>
        </li> */}
        <li className="spirit-list">
          <form onSubmit={handleSubmit}>
            {/* <input type="text" value={searchQuery} onChange={handleChange} className="i-search" placeholder="Other"/> */}
            <select name="i-search" id="i-select" onChange={handleChange}>
            {ingredients.sort().map((i : any  ) => 
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