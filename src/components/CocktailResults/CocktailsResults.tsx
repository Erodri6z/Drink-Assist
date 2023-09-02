import { Cocktail } from "../../types/Drinks/Drinks"
import React from "react"
import CocktailCard from "../CocktailCard/CocktailCard";


interface CocktailResultsProps {
  recipesData: {
    drinks: Cocktail[]
  }
}


const CocktailsResults: React.FC<CocktailResultsProps> = ({ recipesData }) => {

  // const { drinks } = recipesData
  return (
    <div className="drink-list">
      {/* {console.log(recipesData.drinks.length)} */}
      {recipesData?.drinks?.length > 0 ? (
        recipesData.drinks.map((recipe) => (
          // <div key={recipe.idDrink}>
          //   <h2>{recipe.strDrink}</h2>
          // </div>
          // <h1 key={recipe.idDrink}>{recipe.strDrink}</h1>
          <CocktailCard recipe={recipe} />
        ))

      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );
};


export default CocktailsResults