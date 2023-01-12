import React from "react";
import styles from "./burger-ingredients.module.css"
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientPart from "./ingredient-part.jsx";
import {digitsMedium} from "../../utils/themes";


function getIngredient(arr){
    let piece=arr.filter((elem=>elem.type!=='bun'))
    return piece.filter(elem=>Math.random() > 0.5)
}
function getBun(arr){
    let buns=arr.filter((elem=>elem.type==='bun'))
    let temp=buns.find(elem=>Math.random() > 0.5)
    return temp === undefined ? buns[0] : temp
}

function BurgerIngredients(props){
    let pieces=getIngredient(props.data)
    let bun=getBun(props.data)

    return(
    <div className={styles.section}>
        <div className={styles.ingredients}>
            <div className={styles.bun}>
                <IngredientPart types={'top'} part={bun}></IngredientPart>
            </div>
            <div className={styles.pieces}>
                {pieces.map(elem=>
                    <IngredientPart types={''} part={elem} key={elem._id}></IngredientPart>
                )}
            </div>
            <div className={styles.bun}>
            <IngredientPart types={'bottom'} part={bun}></IngredientPart>
            </div>
        </div>
        <div className={styles.button}>
            <div className={styles.total}>
                <div className={` ${digitsMedium}`}>
                    1564
                </div>
                <div className={styles.icon}>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
            <Button htmlType="button" type="primary" size="large">
                Оформить заказ
            </Button>
        </div>

    </div>
)
}


export default BurgerIngredients;