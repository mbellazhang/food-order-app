import React, { useState } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import CartProvider from "./Store/CartProvider"
function App () {
  const [cartIsShow, setCartIsShow] = useState(false)
  const cartShowHandler = () => {
    setCartIsShow(true)
  }
  const cartCloseHandler = () => {
    setCartIsShow(false)
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={cartCloseHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
