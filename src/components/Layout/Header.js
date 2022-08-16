import React, { Fragment } from "react"
import "./Header.css"
import HeaderCart from "./HeaderCart"
import mealsImage from "../../assets/meals.jpg"

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCart></HeaderCart>
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Selection of meals cannot be shown"></img>
      </div>
    </Fragment>
  )
}
export default Header