import React from "react";
import Services from "./components/Services.jsx";
import Ranges from "./components/Ranges.jsx";
import Products from "./components/Products.jsx";
import Rooms from "./components/Rooms.jsx";

export default function App(){
    return <>
        <header>
            <div className="container">
                <div className="burger"></div>
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
        <Products />
        <Rooms />
        <section className="sharing">
            <p>Share your setup with</p>
            <h2>#FuniroFurniture</h2>
            <div>
                <img src="../src/sharing.png" alt="photos" />
                <img src="../src/sharing.png" alt="photos" />
                <img src="../src/sharing.png" alt="photos" />
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="company">
                    <h1 className="logo">Furniro.</h1>
                    <p className="location">400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA</p>
                </div>
                <ul>
                    <li>Links</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul>
                    <li>Help</li>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Privacy Policies</a></li>
                </ul>
                <form action="">
                    <label htmlFor="Newsletter">Newsletter</label>
                    <input type="email" name="newsletter" id="newsletter" placeholder="Enter Your Email Address" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
            <div className="container">
                <hr/>
                <p className="rights">2023 furino. All rights reverved</p>
            </div>
        </footer>
    </>
}