import {digitsDefault} from "../../../../utils/themes";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import {typeCart} from "../../../../utils/types";
import styles from "./cart.module.css"


function Cart(props) {
	const {setIsOpenModal}=props;
	let cart = props.cart;

	return (
		<div className={styles.cart} onClick={setIsOpenModal}>
			{(props.bill>0)?<div className={`${styles.count} ${digitsDefault}`}>{props.bill}</div>:null}
			<img src={cart.image} alt={cart.name}/>
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
}

Cart.propTypes = {
	bill: PropTypes.number,
	cart: PropTypes.shape(typeCart)
}

export default Cart;