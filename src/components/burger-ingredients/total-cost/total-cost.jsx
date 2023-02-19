import {digitsMedium} from "../../../utils/themes";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useContext} from "react";
import PropTypes from "prop-types";
import styles from "./total-cost.module.css"
import Context from "../../../utils/context";

function TotalCost(props) {

	const value = useContext(Context);

	const handleClick = ()=>{
		value.openModal('Order');
	}

	return(
		<div className={styles.button}>
			<div className={styles.total}>
				<div className={` ${digitsMedium}`}>
					{props.total}
				</div>
				<div className={styles.icon}>
					<CurrencyIcon type="primary"/>
				</div>
			</div>
			<Button htmlType="button" type="primary" size="large" onClick={handleClick}>
				Оформить заказ
			</Button>
		</div>
	)
}

TotalCost.propTypes={
	total: PropTypes.number
}

export default TotalCost;