import React from "react"

const Alphabet: React.FC = () => {

  const alpha: string[] = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'] 
  return(
    <div>
        { alpha.map((a) => 
          <li>{a}</li>
        )}
    </div>
  )
}

export default Alphabet