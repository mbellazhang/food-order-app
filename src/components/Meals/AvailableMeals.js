import "./AvailableMeals.css"
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
]

const AvailableMeals = (props) => {
  const mealList = DUMMY_MEALS.map(meal => (<li key={meal.id}>
    <h4>{meal.name}</h4>
    <p>{meal.description}</p>
    <h4>${meal.price}</h4>
  </li>))
  return (
    <section className="meals">
      <ul>
        {mealList}
      </ul>
    </section>
  )
}
export default AvailableMeals