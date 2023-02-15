import './modal.module.css'
import {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import style from './modal.module.css';
import Modal from "./modal";

const modalRootElement = document.getElementById('react-modals');

function ModalOverlay(props) {
	const {open, onClose} = props;
	const element = useMemo(() => document.createElement('div'), []);
	useEffect(() => {
		modalRootElement.appendChild(element);
		return () => {
			modalRootElement.removeChild(element);
		};

	});
	if (open) {
		return createPortal(
			<div className={style.overlay} onClick={onClose} id={"modalOverlay"}>
				<div>
					<Modal>123</Modal>
				</div>
			</div>
			, element)
	}
	return null;
}

export default ModalOverlay;