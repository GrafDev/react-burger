import React from "react";
import styles from "./burger-constructor.module.css"
import {textLarge} from "../../utils/themes";
import BurgerTab from "./burger-tab";
import IngredientCarts from "./ingredient-carts";

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function BurgerConstructor(props) {
	let burgers=props.data.map(elem=>
		elem.count=getRandomInt(4))
	const state={
		course:['bun','main','sauce'],
		current: 'bun'
	}

	return (
		<div className={styles.section}>
			<div className={`${styles.title} ${textLarge}`}>Соберите бургер</div>
			<div className={styles.tab}><BurgerTab current={state.current} /></div>
			<div className={styles.ingredients}>
				<IngredientCarts data={props.data} type={state.course[0]} bill={burgers}>Булки</IngredientCarts>
				<IngredientCarts data={props.data} type={state.course[1]} bill={burgers}>Соусы</IngredientCarts>
				<IngredientCarts data={props.data} type={state.course[2]} bill={burgers}>Начинка</IngredientCarts>
			</div>

		</div>
	)

}

export default BurgerConstructor;