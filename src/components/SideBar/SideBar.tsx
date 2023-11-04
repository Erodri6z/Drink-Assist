import React, { useState } from "react"
// import { useState } from "react"
// import * as drinkService from './../../services/drinkService'
import ISearch from "../IngredientsSearch/IngredientsSearch"
import MultiSearch from '../MulitpleSearch/MultiSearch'
import './SideBar.css'
import Switch from "../Switch/Switch"

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}



const SideBar: React.FC<DataFetchingProps> = ({ setRecipe })=> {

  const [isSwitchOn, setIsSwtichOn] = useState(true)

  const handleSwitchToggle = (newState: boolean) => {
    setIsSwtichOn(newState)
    if(newState) {
      console.log('Switch is on')
    } else {
      console.log("And now its off")
    }
  }

  return (
    <>
    <div className="sidebar-comp">
      <ul>
        <p className="spirits-title">Spirits Or Ingredients</p>
        <Switch defaultChecked={isSwitchOn} onSwitchChange={handleSwitchToggle} />
        <li className="spirit-list">
          {isSwitchOn?
          <ISearch setRecipe={ setRecipe } />
          :
          <MultiSearch setRecipe={ setRecipe } />
          }
        </li>
      </ul>
    </div>
    </>
  )
}

export default SideBar