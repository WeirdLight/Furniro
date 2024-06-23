import SVG from "./SVG.jsx";
import React, { useState } from "react"

export default function Services({type}){
    const [activeOld, activeNew] = useState('');
    return(       
        <>
            <a href="#" onClick={() => activeNew(activeOld == 'account' ? '' : 'account')} id="account" ><SVG type='account' active={activeOld}/></a>
            <a href="#" onClick={() => activeNew(activeOld == 'search' ? '' : 'search')} id="search" ><SVG type='search' active={activeOld} /></a>
            <a href="#" onClick={() => activeNew(activeOld == 'favourite' ? '' : 'favourite')} id="favourite" ><SVG type='favourite' active={activeOld} /></a>
            <a href="#" onClick={() => activeNew(activeOld == 'basket' ? '' : 'basket')} id="basket" ><SVG type='basket' active={activeOld} /></a>
        </>
    );
}