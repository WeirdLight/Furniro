import React from "react"

export default function Ranges({img, title}){
    return <span className="item">
        <span className="img" style={{backgroundImage: `url(../src/range/${img}.png)`}}></span>
        <h3 className="title">{title}</h3>
    </span>
}