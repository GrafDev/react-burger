import React, {useEffect, useMemo, useState} from "react";
import AppHeader from "../app-header/app-header";
import "./App.css";

import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import ReadData from "../../utils/read-data";
import ModalOverlay from "../modal/modal-overlay";
import Context from "../../utils/context";


function App() {
	const [state, setState] = useState({
		isLoading: true,
		hasError: false,
		data: []
	})
	const [currentIngredient,setCurrentIngredient]=useState(null)
	const [isModalOpen,setIsModalOpen]=useState(false);
	const [isOrder,setIsOrder]=useState(false)
	const [isIngredients,setIsIngredients]=useState(false)



	const openModal =(checkModal,data)=>{
		if (checkModal==='Order'){
			setIsOrder(true);
		} else if (checkModal==='Ingredients'){
			setIsIngredients(true);
			setCurrentIngredient(data);
		}
		setIsModalOpen(true);
	}

	const closeModal = ()=>{
		setIsOrder(false)
		setIsIngredients(false)
		setIsModalOpen(false)
	}

	useEffect(() => {
		ReadData(state,setState)
	}, [])

	const value ={
		isModalOpen,
		openModal,
		closeModal,
		isOrder,
		isIngredients,
		currentIngredient
	}


	const {data, isLoading, hasError} = state;
	let order=data;
	let total = useMemo(() => order.reduce((sum, elem) => sum + elem.price, 0), [order]);
	return (
		<Context.Provider className='App' value={value}>
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
						<BurgerConstructor data={data} />
					</div>
					<div className={'section02'}>
						<BurgerIngredients order={order} total={total}/>
					</div>
				</main>
			}

			{isModalOpen &&
				(<ModalOverlay />)
			}
		</Context.Provider>
	);
}

export default App;
