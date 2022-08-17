import React, { Fragment, useState } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
function App () {
  const [cartIsShow, setCartIsShow] = useState(false)
  const cartShowHandler = () => {
    setCartIsShow(true)
  }
  const cartCloseHandler = () => {
    setCartIsShow(false)
  }
  return (
    <Fragment>
      {cartIsShow && <Cart onClose={cartCloseHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
