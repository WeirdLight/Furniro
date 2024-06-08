import React from "react";
import Services from "./components/Services.jsx";

export default function App(){
    return <>
        <header>
            <a href="#" className="logo">
                <img src="./src/logo.svg" alt="logo" />
                <h1>Furniro</h1>
            </a>
            <nav>
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Shop</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </nav>
            <div className="services">
                <Services type={'account'}/>
                <Services type={'search'}/>
                <Services type={'favourite'}/>
                <Services type={'basket'}/>
            </div>
        </header>
        <main>
            <div className="banner">
                <span className="text">
                    <p className="label">New Arrival</p>
                    <h1>Discover Our <br/> New Collection</h1>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </span>
                <button>Buy now</button>
            </div>
        </main>
    </>
}