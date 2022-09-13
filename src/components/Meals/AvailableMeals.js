import { useEffect, useState } from "react"
import Card from "../UI/Card"
import "./AvailableMeals.css"
import MealItem from "./MealItem/MealItem"
// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ]

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState()
  useEffect(() => {
    async function fetchMeals () {
      const response = await fetch("https://bellatest1-7d966-default-rtdb.europe-west1.firebasedatabase.app/xx.json")
      if (!response.ok) {
        throw new Error("Something went wrong!")
      }
      const responseData = await response.json()
      console.log(responseData)
      let mealResult = []
      for (const key in responseData) {
        mealResult.push(responseData[key])
      }
      setMeals(mealResult)
      setIsLoading(false)
    }
    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])
  if (isLoading) {
    return (
      <p className="isloading">Loading...</p>
    )
  }
  if (httpError) {
    return (
      <p className="mealsError">{httpError}</p>
    )
  }
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