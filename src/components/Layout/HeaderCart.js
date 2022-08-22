import React, { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import CartContext from "../../Store/cart-context"
import "./HeaderCart.css"
const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext)
  const numberofCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button type="button" className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge" > {numberofCartItems}</span >
    </button >
  )
}
export default HeaderCart