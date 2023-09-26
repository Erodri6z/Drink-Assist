import './ICard.css'

const ICard = (props:any) => {
  return(
    <div className="ingredient-card">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${props.ingredient}-Small.png`}
        alt={props.ingredient}
        className="img-ingredients" />
      <div className="i-info">
        <h3 className="i-name">{props.ingredient}</h3>
        <p className="i-messure">{`${props.measure ? props.measure : 'Eye-ball It'}`}</p>
      </div>
    </div>
  )
}

export default ICard