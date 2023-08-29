import React from "react"
import './SideBar.css'
import { getAllDrinksByLetter } from "../../services/drinkService"

const SideBar: React.FC = () => {

  console.log(getAllDrinksByLetter('a'))
  return (
    <div className="sidebar">
      <h2 >Nothing here yet but this is where the ingredients will be listed'</h2>
    </div>
  )
}

export default SideBar