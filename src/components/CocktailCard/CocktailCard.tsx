import { Cocktail } from "../../types/Drinks/Drinks"
import './CocktailCard.css'

interface CocktailResultsProps {
  recipe: Cocktail
}

const CocktailCard = (props: CocktailResultsProps ) => {


  return (
    <div className="drink-card">
      <img src={props.recipe.strDrinkThumb} className="thumbnail" alt="thumbnail" />
      <div className="drink-name-box">
        <h5 className="cocktail-name">{props.recipe.strDrink}</h5>
      </div>
    </div>
  )
}

export default CocktailCard