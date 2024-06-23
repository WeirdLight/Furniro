import React from "react";
import Services from "./components/Services.jsx";
import Ranges from "./components/Ranges.jsx";

export default function App(){
    return <>
        <header>
            <div className="container">
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
                    <Services />
                </div>
            </div>
        </header>
        <main>
            <div className="container">
                <div className="banner">
                    <span className="text">
                        <p className="label">New Arrival</p>
                        <h1>Discover Our <br/> New Collection</h1>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </span>
                    <button>Buy now</button>
                </div>
            </div>
        </main>
        <section className="range">
            <div className="container">
                <span className="text">
                    <h2>Browse The Range</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </span>
                <div className="ranges">
                    <Ranges img='dining' title='Dining' />
                    <Ranges img='living' title='Living' />
                    <Ranges img='bedroom' title='Bedroom' />
                </div>
            </div>
        </section>
    </>
}