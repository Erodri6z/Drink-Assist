import React from "react"
// import { useState } from "react"
// import * as drinkService from './../../services/drinkService'
import ISearch from "../IngredientsSearch/IngredientsSearch"
import './SideBar.css'

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}



const SideBar: React.FC<DataFetchingProps> = ({ setRecipe }) => {


  return (
    <>
    <div className="sidebar">
      <ul>
        <p className="spirits-title">Spirits Or Ingredients</p>
        <li className="spirit-list">
          <ISearch setRecipe={ setRecipe } />
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar