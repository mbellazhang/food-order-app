import "./MealItem.css"
const MealItem = (props) => {
  return (
    <li>
      {props.children}
    </li>
  )
}
export default MealItem