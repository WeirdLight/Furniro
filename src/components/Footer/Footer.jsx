import './index.css';

export default function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="company">
                    <h1 className="logo">Furniro.</h1>
                    <p className="location">400 University Drive Suite 200 Coral Gables,<br/>FL 33134 USA</p>
                </div>
                <ul>
                    <li>Links</li>
                    <li><a href="home">Home</a></li>
                    <li><a href="shop">Shop</a></li>
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
    );
}