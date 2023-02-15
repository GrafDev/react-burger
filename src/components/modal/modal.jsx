import './modal.module.css'
import {createPortal} from "react-dom";
import style from './modal.module.css'

function Modal(props){

	return (
		<div className={style.modal}>
				{props.children}
		</div>
	)
}
export default Modal;