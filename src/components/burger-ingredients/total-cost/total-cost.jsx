import {digitsMedium} from "../../../utils/themes";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import styles from "./total-cost.module.css"

function TotalCost(props) {

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
			<Button htmlType="button" type="primary" size="large" >
				Оформить заказ
			</Button>
		</div>
	)
}

TotalCost.propTypes={
	total: PropTypes.number
}

export default TotalCost;