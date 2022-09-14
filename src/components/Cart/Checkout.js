import { useRef, useState } from "react"
import classes from './Checkout.module.css'
const isEmpty = (value) => {
  return value.trim() === ""
}
const isFiveChars = (value) => {
  return value.trim().length === 5
}

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    nameValidity: true,
    streetValidity: true,
    postalCodeValidity: true,
    cityValidity: true,
  })
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostalCode = postalCodeInputRef.current.value
    const enteredCity = cityInputRef.current.value
    const enteredNameIsValid = !isEmpty(enteredName)
    const enteredStreetIsValid = !isEmpty(enteredStreet)
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode)
    const enteredCityIsValid = !isEmpty(enteredCity)
    setFormInputValidity({
      nameValidity: enteredNameIsValid,
      streetValidity: enteredStreetIsValid,
      postalCodeValidity: enteredPostalCodeIsValid,
      cityValidity: enteredCityIsValid
    })
    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid
    if (!formIsValid) {
      return
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
  }
  const nameControlClasses = `${classes.control} ${formInputValidity.nameValidity ? "" : classes.invalid}`
  const streetControlClasses = `${classes.control} ${formInputValidity.streetValidity ? "" : classes.invalid}`
  const postalCodeControlClasses = `${classes.control} ${formInputValidity.postalCodeValidity ? "" : classes.invalid}`
  const cityControlClasses = `${classes.control} ${formInputValidity.cityValidity ? "" : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputValidity.nameValidity && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputValidity.streetValidity && <p>Please enter a valid street!</p>}

      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputValidity.postalCodeValidity && <p>Please enter a valid postal code(5 characters long)!</p>}

      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputValidity.cityValidity && <p>Please enter a valid city!</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  )
}

export default Checkout