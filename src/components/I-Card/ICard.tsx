
const ICard = (props:any) => {
  return(
    <div className="ingredient-card">
      <img
        src={`https://www.thecocktaildb.com/images/ingredients/${props.ingredient}-Small.png`}
        alt={props.ingredient}
        className="img-ingredients" />
      <div>
        <h3>{props.ingredient}</h3>
        <p>{`(${props.measure ? props.measure : 'Eye-ball It'})`}</p>
      </div>
    </div>
  )
}

export default ICard