import React from "react";
import Services from "./components/Services.jsx";
import Ranges from "./components/Ranges.jsx";
import Products from "./components/Products.jsx";
import Rooms from "./components/Rooms.jsx";

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
        <Products />
        <Rooms />
        <section className="sharing">
            <p>Share your setup with</p>
            <h3>#FuniroFurniture</h3>
            <div className="container">
                <div><img src="../../src/sharing/image.png" alt="image1" /></div>
                <div><img src="../../src/sharing/img2.png" alt="image2" /></div>
                <div><img src="../../src/sharing/img3.png" alt="image3" /></div>
                <div><img src="../../src/sharing/img4.png" alt="image4" /></div>
                <div><img src="../../src/sharing/img5.png" alt="image5" /></div>
                <div><img src="../../src/sharing/img6.png" alt="image6" /></div>
                <div><img src="../../src/sharing/img7.png" alt="image7" /></div>
                <div><img src="../../src/sharing/img8.png" alt="image8" /></div>
                <div><img src="../../src/sharing/img9.png" alt="image9" /></div>
            </div>
        </section>
    </>
}