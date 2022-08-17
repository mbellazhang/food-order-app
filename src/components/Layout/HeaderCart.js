import React from "react"
import "./HeaderCart.css"
import CartIcon from "../Cart/CartIcon"
import "./HeaderCart.css"
const HeaderCart = (props) => {
  return (
    <button type="button" className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge" > 0</span >
    </button >
  )
}
export default HeaderCart