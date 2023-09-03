import React from "react"
import { useState } from "react"
import * as drinkService from './../../services/drinkService'
import './SideBar.css'

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}

const SideBar: React.FC<DataFetchingProps> = ({ setRecipe }) => {


  const searchByIngredient = async (spirit: string) => {
    const drinksList = await drinkService.getDrinksByAlcohol(spirit)
    setRecipe(drinksList)
  }

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    searchByIngredient(query);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('vodka')}>Vodka</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('whiskey')}>Whiskey</button>
        </li>
        <li className="spirit-list">
          <button className="spirit-btn" onClick={() => searchByIngredient('scotch') }> Scotch</button>
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
        </li>
        <li className="spirit-list">
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} className="i-search" placeholder="Other"/>
            <button type="submit" className="spirit-btn">Search</button>
          </form>
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar