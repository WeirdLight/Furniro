import SVG from "./SVG.jsx";
import React from "react"
import { useState } from "react";

export default function Services({type}){
    const [color, setNewColor] = useState(false);

    return <a onClick={()=>setNewColor(!color)} href="#"><SVG isChangeColor={color} type={type} /></a>
}