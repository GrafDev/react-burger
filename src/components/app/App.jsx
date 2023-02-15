import React, {useEffect, useMemo, useState} from "react";
import AppHeader from "../app-header/app-header";
import "./App.css";

import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import ReadData from "../../utils/read-data";
import Modal from "../modal/modal";
import ModalOverlay from "../modal/modal-overlay";


function App() {
	const [state, setState] = useState({
		isLoading: true,
		hasError: false,
		data: []
	})
	const [modalOpen,setIsModalOpen]=useState(false);

	useEffect(() => {
		ReadData(state,setState)
	}, [])

	const openModal=(event)=>{
		setIsModalOpen(true);
	}

	const closeModal=(event)=>{
		event.target.id==='modalOverlay' && setIsModalOpen(false);
	}

	const {data, isLoading, hasError} = state;
	let order=data;
	let total = useMemo(() => order.reduce((sum, elem) => sum + elem.price, 0), [order]);
	return (
		<div className='App'>
			<header className='App-header' >
				<AppHeader />
			</header>
			{isLoading && 'Загрузка...'}
			{hasError && 'Произошла ошибка'}
			{!isLoading &&
				!hasError &&
				data.length &&
				<main>
					<div className={'section01 mr-10'}>
						<BurgerConstructor data={data} openModal={setIsModalOpen}/>
					</div>
					<div className={'section02'}>
						<BurgerIngredients order={order} total={total}/>
					</div>
				</main>
			}

			{modalOpen &&
				<ModalOverlay open={modalOpen} onClose={closeModal}>
					<Modal>
						Hello
					</Modal>
				</ModalOverlay>
			}


		</div>
	);




}

export default App;
