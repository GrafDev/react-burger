import './modal.module.css'
import style from './modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useContext, useEffect} from "react";
import contexts from "../../utils/contexts";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";



function Modal(){

const value = useContext(contexts);

const handlerOverlay = ()=>{
	 value.closeModal()
}

	useEffect(() => {
		const handleEscape=({key})=>{
			if(key==='Escape') value.closeModal()
		}
		document.addEventListener('keydown',handleEscape)
		return () => document.removeEventListener('keydown',handleEscape)
	});


	return (
		<div className={style.modal}>
			<div className={style.closeCross} onClick={handlerOverlay}>
				<CloseIcon type="primary"  />
			</div>
			<div>
				{value.isOrder && <OrderDetails/>}
				{value.isIngredients && <IngredientDetails/>}
			</div>
		</div>
	)
}

export default Modal;