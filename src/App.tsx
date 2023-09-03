import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Alphabet from './components/Alphabet/Alphabet'
import CocktailsResults from './components/CocktailResults/CocktailsResults'
import './App.css'
// import React from 'react'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'

function App() {


  const [recipeData, setRecipeData] = useState<any> (null)

  return (
    <>
      <Header title="Gloomy Spirits"/>
      <div className="content-container">
        <SideBar setRecipe={setRecipeData}/>
        <div className="app-content">
          <Alphabet setRecipe={setRecipeData} />
          <SearchBar setRecipe={setRecipeData}/>
          <CocktailsResults recipesData = {recipeData} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
