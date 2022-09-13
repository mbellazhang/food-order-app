import { useEffect, useState } from "react"
import Card from "../UI/Card"
import "./AvailableMeals.css"
import MealItem from "./MealItem/MealItem"
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
  let [meals, setMeals] = useState([])
  useEffect(() => {
    async function fetchData () {
      // You can await here

      let xx = await fetch("https://bellatest1-7d966-default-rtdb.europe-west1.firebasedatabase.app/xx.json")
      let json = await xx.json()
      console.log(json)
      let result = []
      for (const key in json) {
        result.push(json[key])
      }
      setMeals(result)
    }
    fetchData()


    //https://bellatest1-7d966-default-rtdb.europe-west1.firebasedatabase.app/xx.json
    // fetch("https://bellatest1-7d966-default-rtdb.europe-west1.firebasedatabase.app/xx.json").then(value => {
    //   console.log(value)
    // })

  }, [])
  const mealList = meals.map(meal => <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price} />)
  return (
    <section className="meals">
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  )
}
export default AvailableMeals