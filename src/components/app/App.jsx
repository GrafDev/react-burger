import React, {useMemo} from "react";
import AppHeader from "../app-header/app-header";
import "./App.css";

import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import ReadData from "../../utils/read-data";
import getOrder from "../../utils/get-order";

function App() {
    const data=ReadData();
    let order=getOrder(data);
    let total= useMemo(() => order.reduce((sum,elem)=>sum + elem.count*elem.price,0), [order]);
console.log(total)
    return (
        <div className='App'>
            <header className='App-header'>
                <AppHeader/>
            </header>
            <main>
                <div className={'section01 mr-10'}>
                    <BurgerConstructor data={data}/>
                </div>
                <div className={'section02'}>
                    <BurgerIngredients order={order} total={total}/>
                </div>
            </main>
        </div>
    );
}

export default App;
