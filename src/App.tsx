// import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import * as drinkService from './services/drinkService'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Alphabet from './components/Alphabet/Alphabet'
import CocktailsResults from './components/CocktailResults/CocktailsResults'
import SearchBar from './components/SearchBar/SearchBar'
import RandomPick from './components/RandomPick/RandomPick'
import { Routes, Route } from 'react-router-dom'
import CocktailDisplay from './components/CocktailDisplay/CocktailDisplay'
import ISearch from './components/IngredientsSearch/IngredientsSearch'

function App() {

  const [randomPick, setRandomPick] = useState<any> (null)
  const [recipeData, setRecipeData] = useState<any> (null)

  useEffect(() => {
    const getDrink = async () => {
      try{
        const randomDrink = await drinkService.randomPick()
        setRandomPick(randomDrink)
      } catch (error) {
        console.error('cannot get random drink', error)
      }
    }
    getDrink()
  }, [])

  return (
    <>
      <Header title="Gloomy Spirits"/>
      <div className="content-container">
          <div className='sidebar'>
            <SideBar setRecipe={setRecipeData}/>
          </div>
        <div className="app-content">
        <Routes>
          <Route 
          path='/'
          element={
          <>
          <Alphabet setRecipe={setRecipeData} />
          <SearchBar setRecipe={setRecipeData} />
          <RandomPick randomDrink={randomPick} />
          <ISearch setRecipe={setRecipeData} />
          <CocktailsResults recipesData={recipeData} />
          </>
          }
          />
          <Route
          path='/cocktail-recipe'
          element={
            <>
              <CocktailDisplay />
            </>
          }
          />
        </ Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
