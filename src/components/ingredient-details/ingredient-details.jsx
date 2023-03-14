import React, {useContext} from "react";
import style from './ingredient-details.module.css'
import Context from "../../utils/contexts";
import {
	digitsInactiveDefault,
	inactiveDefault,
	textLarge,
	textMedium
} from "../../utils/themes";

function IngredientDetails() {


	const value = useContext(Context);

	const data = value.currentIngredient;

	const Ingredient = (text, part) => {
		return (
			<div className={style.ingredient}>
				<div className={inactiveDefault} style={{marginBottom: '8px'}}>{text}</div>
				<div className={digitsInactiveDefault} style={{textAlign: 'center'}}>{part}</div>
			</div>
		)
	}

	return (
		<div>
			<div className={style.title}>
					<span className={`${textLarge} ${style.text}`}>Детали ингредиента</span>
			</div>
			<div className={style.modal}>
				<img className={style.image} style={{paddingBottom: '16px'}} src={data.image} alt={'atribute'}/>
				<span className={textMedium} style={{paddingBottom: '32px'}}>{data.name}</span>
				<div className={style.ingredients}>
					{Ingredient('Калории,ккал', data.calories)}
					{Ingredient('Белкиб г', data.proteins)}
					{Ingredient('Жиры, г', data.fat)}
					{Ingredient('Углеводы, г', data.carbohydrates)}
				</div>
			</div>


		</div>

	)
}

export default IngredientDetails;