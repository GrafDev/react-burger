import React from "react";
import AppHeader from "./components/app-header/app-header";
import "./App.css";

import BurgerConstructor from './components/burger-constructor/burger-constructor';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import ReadData from "./utils/read-data";

function App() {
    let data=ReadData();
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
                    <BurgerIngredients data={data}/>
                </div>
            </main>
        </div>
    );
}

export default App;
