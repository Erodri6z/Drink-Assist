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


  // useEffect(() => {
  //   const sidebarCheck = async () => {
  //     const sB = document.querySelector('.sidebar')
  //     try{
  //       const checkUrl = location.pathname
  //       if (checkUrl.includes('/cocktail-recipe')) {
  //         sB?.classList.add('noshow')
  //         return
  //       } else {
  //         sB?.classList.remove('noshow')
  //         return
  //       }
  //     }catch (error) {
  //       console.error('cannot remove sidebar', error)
  //     }
  //   }
  //   sidebarCheck()
  //   console.log(location.pathname)
  // },[location.pathname])

  return (
    <>
      <Header title="Gloomy Spirits"/>
      <div className="content-container">
        <div className="app-content">
        <Routes>
          <Route 
          path='/'
          element={
          <>
          <div className='app-body'>
            <div className='sidebar'>
              <SideBar setRecipe={setRecipeData}/>
            </div>
            <div>
              <Alphabet setRecipe={setRecipeData} />
              <SearchBar setRecipe={setRecipeData} />
              <RandomPick randomDrink={randomPick} />
              <div className='isearch'>
                <ISearch setRecipe={setRecipeData} />
              </div>
            <CocktailsResults recipesData={recipeData} />
            </div>
          </div>
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
          <Route
            path='/*'
            element={
              <>
              <h3>youre not suppose to be here</h3>
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
