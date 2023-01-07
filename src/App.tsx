import React from 'react';
import AppHeader from "./components/app-header/app-header";
import './App.css';

import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

function App() {
    return (
        <div className="App pt-10 pl-10">
            <header className="App-header mr-10">
                <AppHeader/>
            </header>
            <main>
                <div className={"section mr-10"}>
                    <BurgerConstructor/>
                </div>
                <div className={"section"}>
                    <BurgerIngredients/>
                </div>
            </main>
        </div>
    );
}

export default App;
