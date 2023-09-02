import { Cocktail } from "../../types/Drinks/Drinks"
import React from "react"


interface CocktailResultsProps {
  recipesData: {
    drinks: Cocktail[]
  }
}


const CocktailsResults: React.FC<CocktailResultsProps> = ({ recipesData }) => {

  // const { drinks } = recipesData
  return (
    <div>
      {/* {console.log(recipesData.drinks.length)} */}
      {recipesData?.drinks.length > 0 ? (
        recipesData.drinks.map((recipe) => (
          // <div key={recipe.idDrink}>
          //   <h2>{recipe.strDrink}</h2>
          // </div>
          <h1 key={recipe.idDrink}>{recipe.idDrink}</h1>
        ))
      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );
};


export default CocktailsResults