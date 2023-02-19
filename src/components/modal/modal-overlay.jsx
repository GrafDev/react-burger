import './modal.module.css'
import {useContext, useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import style from './modal.module.css';
import Modal from "./modal";
import Context from "../../utils/context";

const modalRootElement = document.getElementById('react-modals');

function ModalOverlay(props) {
	const element = useMemo(() => document.createElement('div'), []);

	const value = useContext(Context);

	useEffect(() => {
		modalRootElement.appendChild(element);
		return () => {
			modalRootElement.removeChild(element);
		};

	});

	const handlerClick= (event)=>{
		event.target.id==='targetOverlay' && value.closeModal();
	}

	return createPortal(
		<div className={style.overlay} id='targetOverlay' onClick={handlerClick}>
			<div>
				<Modal/>
			</div>
		</div>
		, element)
}


export default ModalOverlay;