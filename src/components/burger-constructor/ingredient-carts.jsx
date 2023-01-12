import React from "react";
import {digitsDefault, textMedium} from "../../utils/themes";
import styles from "./ingredient-carts.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";


function Cart(props) {
	let cart = props.cart;

	return (
		<div className={styles.cart}>
			{(props.bill>0)?<div className={`${styles.count} ${digitsDefault}`}>{props.bill}</div>:null}
			<img src={cart.image} alt={cart.name}></img>
			<div className={styles.cost}>
				<div className={`${styles.text} ${digitsDefault}`}>
					{cart.price}
				</div>
				<div className={styles.icons}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<div className={styles.name}>
				{cart.name}
			</div>
		</div>

	);
};

function IngredientCarts(props) {
	let carts = (props.data.filter(elem => elem.type === props.type))
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

export default IngredientCarts;