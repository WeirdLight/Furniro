import Services from "../Services.jsx";
import logo from "./logo.svg";

export default function Header(){
    return <header>
        <div className="container">
            <div className="burger"></div>
            <a href="#" className="logo">
                <img src={logo} alt="logo" />
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
            {/* <div className="shopping-cart">
                <h2>Shopping Cart</h2>
            </div> */}
        </div>
    </header>
}