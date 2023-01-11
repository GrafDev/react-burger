import React from "react";
import {ConstructorElement,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-part.module.css"
function IngredientPart(props){
	let elem=props.part;
	let type=props.types
	return(
		<div className={styles.box}>
			{type===''? <div className={styles.icon}><DragIcon  type="primary" /></div>:<div className={styles.zero}></div>}
			<ConstructorElement
				text={elem.name}
				type={type}
				price={elem.price}
				thumbnail={elem.image_mobile}
			/>
		</div>
	)
}
export default IngredientPart;