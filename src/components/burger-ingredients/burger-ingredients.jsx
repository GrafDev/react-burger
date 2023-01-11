import React from "react";
import styles from "./burger-ingredients.module.css"
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientPart from "./ingredient-part.jsx";
import {digitsDefault, digitsLarge, digitsMedium,textDefault} from "../../utils/themes";


function getIngredient(arr){
    return arr.filter(elem=>Math.random() > 0.5)
}


function BurgerIngredients(props){
    let burgers=getIngredient(props.data)
    return(
    <div className={styles.section}>
        <div className={styles.ingredients}>
            {burgers.map((elem,index,arr)=> {
                let type='';
                if (index===0) type='top';
                if (index===arr.length-1) type='bottom';
               return  <IngredientPart types={type} part={elem} key={elem._id}></IngredientPart>
            })}
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