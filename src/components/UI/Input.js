import "./Input.css"
const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input} />
    </div>
  )

}
export default Input