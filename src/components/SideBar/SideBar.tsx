import React from "react"
import * as drinkService from './../../services/drinkService'
import './SideBar.css'

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}

const SideBar: React.FC<DataFetchingProps> = ({ setRecipe }) => {

  // console.log(getAllDrinksByLetter('a'))

  const searchByIngredient = async (spirit: string) => {
    const drinksList = await drinkService.getDrinksByAlcohol(spirit)
    setRecipe(drinksList)
  }

  return (
    <>
    <div className="sidebar">
      <ul>
        <p>Spirits Or Ingredients</p>
        <li><button onClick={() => searchByIngredient('vodka')}>Vodka</button></li>
        <li><button onClick={() => searchByIngredient('whiskey')}>Whiskey</button></li>
        <li><button onClick={() => searchByIngredient('scotch') }> Scotch</button></li>
        <li><button onClick={() => searchByIngredient('gin') }> Gin </button></li>
        <li><button onClick={() => searchByIngredient('tequila')} > Tequila </button></li>
        <li><button onClick={() => searchByIngredient('mezcal')}>Mezcal</button></li>
        <li><button onClick={() => searchByIngredient('light_rum')}>Light Rum</button></li>
        <li><button onClick={() => searchByIngredient('dark_rum')}>Dark Rum</button></li>
        <li><button onClick={() => searchByIngredient('cognac')}>Cognac</button></li>
        <li><button onClick={() => searchByIngredient('brandy')}>Brandy</button></li>
        <form>
        <li>
          <label htmlFor="spirit"></label>
            <input type="text" className="i-search" placeholder="Other"/>
            <button type="submit">Search</button>
          </li>
        </form>
      </ul>
    </div>
    </>
  )
}

export default SideBar