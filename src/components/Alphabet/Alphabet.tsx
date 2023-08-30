import React from "react"
import './Alphabet.css'

import { getAllDrinksByLetter } from "../../services/drinkService"

const Alphabet: React.FC = () => {

  const alpha: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'] 
  return(
    <div className="alpha-div">
        { alpha.map((a) => 
          <li className="alpha" key={a}><button className="a-btn" onClick={() =>  getAllDrinksByLetter(`${a}`)}>{a.toUpperCase()}</button></li>
        )}
    </div>
  )
}

export default Alphabet