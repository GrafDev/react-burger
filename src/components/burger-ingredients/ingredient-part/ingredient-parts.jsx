import React from "react";
import {ConstructorElement,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-parts.module.css"
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";

function IngredientParts(props){
	let elem=props.piece;
	let type=props.type
	return(
		<div className={styles.box}>
			{type===''? <div className={styles.icon}><DragIcon  type="primary" /></div>:<div className={styles.zero}></div>}
			<ConstructorElement
				text={elem.name}
				type={elem.type}
				price={elem.price}
				thumbnail={elem.image_mobile}
			/>
		</div>
	)
}


IngredientParts.propTypes={
	part: PropTypes.shape(typeCart),
	types:PropTypes.oneOf(['top', 'bottom', '']),
}
export default IngredientParts;