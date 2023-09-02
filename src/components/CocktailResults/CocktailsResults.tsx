import { Cocktail } from "../../types/Drinks/Drinks"
import React from "react"
import CocktailCard from "../CocktailCard/CocktailCard";


interface CocktailResultsProps {
  recipesData: {
    drinks: Cocktail[]
  }
}


const CocktailsResults: React.FC<CocktailResultsProps> = ({ recipesData }) => {

  return (
    <div className="drink-list">
      {recipesData?.drinks?.length > 0 ? (
        recipesData.drinks.map((recipe) => (
          <CocktailCard recipe={recipe} />
        ))
      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );
};


export default CocktailsResults