import React from 'react'
import '../styles/menu.css';
import CannonSteak from "../images/cannonsteak.jpg";
import CosmoBurger from "../images/cosmoB.jpg";
import FireBurger from "../images/fireNB.jpg";
import MonsieurSteak from "../images/monsieursteak.jpg";
import PizzaOfLife from "../images/pizza.jpg";
import WackyBurger from "../images/wackyB.jpg";

function menu() {

    
    return (
        <div className="menu">
            <div class="box">
                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${CannonSteak})`}}>
                    </div>
                    <div class="details">
                        <h2>Cannon Steak <br /> <span>20 zł</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${CosmoBurger})` }}>
                   
                    </div>
                    <div class="details">
                        <h2>Cosmo Burger<br /><span>18 zł</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${FireBurger})` }}>
                    
                     </div>
                    <div class="details">
                        <h2>Fire'N'Burger<br /><span>22 zł</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${MonsieurSteak})` }}>
                    
                    </div>
                    <div class="details">
                        <h2>Monsieur Steak<br /><span>19 zł</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${PizzaOfLife})` }}>
                    
                    </div>
                    <div class="details">
                        <h2>Pizza Of Life<br /><span>20 zł</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx" style={{ backgroundImage: `url(${WackyBurger})` }}>
                    
                    </div>
                    <div class="details">
                        <h2>Wacky Burger<br /><span>18 zł</span></h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default menu
