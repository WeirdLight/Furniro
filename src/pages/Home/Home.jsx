import Main from "../../components/Home/Main.jsx";
import Range from "../../components/Home/Range/Range.jsx";
import Products from "../../components/Home/Products.jsx";
import Rooms from "../../components/Home/Rooms/Rooms.jsx";
import Sharing from "../../components/Home/Sharing.jsx";

import './index.css';

export default function Home(){
    return <>
            <Main />
            <Range /> 
            <Products />
            <Rooms />
            <Sharing />
        </>
}