import React from "react";
import {textMedium} from "../../../utils/themes";
import PropTypes from "prop-types";
import {typeCart} from "../../../utils/types";
import Cart from "./cart/cart";
import styles from "./ingredient-carts.module.css"



function IngredientCarts(props) {
	const carts = (props.data.filter(elem => elem.type === props.type))
	return (
		<div>
			<div className={`${textMedium} mb-10`}>{props.children}</div>
			<div className={styles.carts}>
				{carts.map(cart =>
					<Cart cart={cart} key={cart._id} bill={cart.count}/>
				)
				}
			</div>
		</div>
	)
}

IngredientCarts.propTypes={
	data:PropTypes.arrayOf(PropTypes.shape(typeCart)).isRequired,
	children:PropTypes.string.isRequired
}

export default IngredientCarts;