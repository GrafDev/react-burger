import React from 'react';
import {Logo,BurgerIcon,ListIcon,ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { inactiveDefault, activeDefault} from "../../utils/themes";

function AppHeader(){
return (
    <div className={styles.header}>
        <nav className={styles.nav}>
            <a href={''} className={styles.item}>
                <div className={styles.icon}>
                    <BurgerIcon type={'primary'}/>
                </div>
                <span className={activeDefault} >Конструктор</span>
            </a>
            <a href={''} className={styles.item}>
                <div className={styles.icon}>
                    <ListIcon type={'secondary'}/>
                </div>
                <span className={inactiveDefault} >Лента заказов</span>
            </a>

        </nav>
        <div className={styles.logo}>
            <Logo />
        </div>
        <a href={''} className={styles.user}>
            <div className={styles.icon}>
                <ProfileIcon  type={'secondary'}/>
            </div>
            <span className={inactiveDefault} >Личный кабинет</span>
        </a>
    </div>


)
}
export default AppHeader;