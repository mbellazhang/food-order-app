import React, { useContext, useState } from "react"
import "./Cart.css"
import Modal from "../UI/Modal"
import CartContext from "../../Store/cart-context"
import CartItem from "./CartItem"
import Checkout from "./Checkout"
const Cart = (props) => {
  const cartCtx = useContext(CartContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [isCheckout, setIsCheckout] = useState(false)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const orderHandler = () => {
    setIsCheckout(true)
  }
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch("https://bellatest1-7d966-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }
  const cartItems = <ul className="cart-items">{cartCtx.items.map((item) => <CartItem
    key={item.id}
    name={item.name}
    price={item.price}
    amount={item.amount}
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}
  />)}</ul>
  const modalActions = (<div className="actions">
    <button className="button--alt" onClick={props.onClose}>Close</button>
    {hasItems && <button className="order-button" onClick={orderHandler}>Order</button>}
  </div>)
  const cartModalContent =
    <React.Fragment>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </React.Fragment>
  const isSubmittingModalContent = <p>Sending order data...</p>
  const didSubmitModalContent =
    <React.Fragment>
      <p>Order successfully submitted!</p>
      <div className="actions">
        <button className="order-button" onClick={props.onClose}>Close</button>
      </div>
    </React.Fragment>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )

}
export default Cart