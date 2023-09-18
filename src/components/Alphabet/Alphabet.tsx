import React from "react"
import './Alphabet.css'

import { getAllDrinksByLetter } from "../../services/drinkService"

interface DataFetchingProps {
  setRecipe: React.Dispatch<React.SetStateAction<any>>
}

const Alphabet: React.FC<DataFetchingProps> = ({ setRecipe }) => {


  const alpha: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'] 
  
  const fetchDrinksByLetter = async (letter:string) => {
    const drinksList = await getAllDrinksByLetter(letter)
    setRecipe(drinksList)
  }
  
  return(
    <>
    <div className="alpha-div">
      {alpha.map((a) => <li className="alpha" key={a}><button className="a-btn" onClick={() => fetchDrinksByLetter(`${a}`)}>{a.toUpperCase()}</button></li>
      )}
    </div>
    <div className="mobile-alpha-div">
        {alpha.map((a) => <li className="alpha" key={a}><button className="a-btn" onClick={() => fetchDrinksByLetter(`${a}`)}>{a.toUpperCase()}</button></li>
        )}
    </div>
    </>
  )
}

export default Alphabet