import React from "react"
import './Alphabet.css'

const Alphabet: React.FC = () => {

  const alpha: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'] 
  return(
    <div className="alpha-div">
        { alpha.map((a) => 
          <li className="alpha"><button className="a-btn">{a.toUpperCase()}</button></li>
        )}
    </div>
  )
}

export default Alphabet