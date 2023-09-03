import { Cocktail } from "../../types/Drinks/Drinks"
import CocktailCard from "../CocktailCard/CocktailCard";
import { Link } from "react-router-dom";
import React from "react"
import './CocktailResults.css'


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
          <Link to="/cocktail-recipe" className="cocktail-link" key={recipe.idDrink} state={{ recipe }}>          
            <CocktailCard key={recipe.idDrink} recipe={recipe} />
          </Link>
        ))
      ) : (
        <h2>No Results</h2>
      )}
    </div>
  );
};


export default CocktailsResults