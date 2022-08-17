import "./Modal.css"
import ReactDOM from "react-dom"
import { Fragment } from "react"

const Backdrop = (props) => {
  return (
    <div className="backdrop" onClick={props.onClose}></div>
  )
}
const ModalOverLay = (props) => {
  return (
    <div className="modal">
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}
const portalElement = document.getElementById("overlays")
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </Fragment>
  )
}
export default Modal