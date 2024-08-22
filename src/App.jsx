import Range from "./components/Range/Range.jsx";
import Products from "./components/Products.jsx";
import Rooms from "./components/Rooms/Rooms.jsx";
import Header from "./components/Header/Header.jsx";
import Sharing from './components/Sharing.jsx'
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx'

export default function App(){
    return <>  
        <Header />
        <Main />
        <Range /> 
        <Products />
        <Rooms />
        <Sharing />
        <Footer />
    </>
}