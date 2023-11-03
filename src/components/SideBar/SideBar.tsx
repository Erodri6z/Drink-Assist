import React from "react"
// import { useState } from "react"
// import * as drinkService from './../../services/drinkService'
import ISearch from "../IngredientsSearch/IngredientsSearch"
// import MultiSearch from '../MulitpleSearch/MultiSearch'
import './SideBar.css'
import Switch from "../Switch/Switch"

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}



const SideBar: React.FC<DataFetchingProps> = ({ setRecipe }) => {


  return (
    <>
    <div className="sidebar-comp">
      <ul>
        <p className="spirits-title">Spirits Or Ingredients</p>
        <Switch />
        <li className="spirit-list">
          <ISearch setRecipe={ setRecipe } />
          {/* <MultiSearch setRecipe={ setRecipe } /> */}
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar