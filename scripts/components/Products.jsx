import React from "react";

export default function Products(){

    let data = [
        {
            title: 'Syltherine',
            descr: 'Stylish cafe chair',
            sale: 30,
            fullPrice: 3500000,
            isNew: false,
            img: '../../src/syltherine.png'
        },
        {
            title: 'Leviosa',
            descr: 'Stylish cafe chair',
            sale: 0,
            fullPrice: 2500000,
            isNew: false,
            img: '../../src/leviosa.png'
        },
        {
            title: 'Lolito',
            descr: 'Luxury big sofa',
            sale: 50,
            fullPrice: 14000000,
            isNew: false,
            img: '../../src/lolito.png'
        },
        {
            title: 'Respira',
            descr: 'Outdoor bar table and stool',
            sale: 0,
            fullPrice: 500000,
            isNew: true,
            img: '../../src/respira.png'
        },
        {
            title: 'Grifo',
            descr: ' Night lamp',
            sale: 0,
            fullPrice: 1500000,
            isNew: false,
            img: '../../src/grifo.png'
        },
        {
            title: 'Muggo',
            descr: 'Small mug',
            sale: 0,
            fullPrice: 150000,
            isNew: true,
            img: '../../src/muggo.png'
        },
        {
            title: 'Pingky',
            descr: 'Cute bed set',
            sale: 50,
            fullPrice: 14000000,
            isNew: false,
            img: '../../src/pingky.png'
        },
        {
            title: 'Potty',
            descr: 'Minimalist flower pot',
            sale: 0,
            fullPrice: 500000,
            isNew: true,
            img: '../../src/potty.png'
        }
    ]

    function content(){
        let toReturn = [];
        data.forEach((el, index) => {
            toReturn.push(
                <div key={index} className="item">
                    <span className="img" style={{backgroundImage: `url(${el.img})`}}>
                        {el.sale != 0 ? <span className="sale">-{el.sale}%</span> : ''}
                        {el.isNew ? <span className="new">New</span> : ''}
                    </span>
                    <div className="under">
                        <h3>{el.title}</h3>
                        <p>{el.descr}</p>
                        <span>
                            <p className="current-price">Rp {(el.fullPrice * (100-el.sale))*0.01}</p>
                            {el.sale != 0 ? <p className="old-price">Rp {el.fullPrice}</p> : ''} 
                        </span>
                    </div>
                    <div className="hover">
                        <div className="container">
                            <button className="cart">Add to cart</button>
                            <span className="actions">
                                <span className="action">
                                    <span></span>
                                    Share
                                </span>
                                <span className="action">
                                    <span></span>
                                    Compare
                                </span>
                                <span className="action">
                                    <span></span>
                                    Like
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            );
        })
        return toReturn;
    }
    return(
        <section className="our-products">
            <h2>Our Products</h2>
            <div className="container">
                {content()}
            </div>
            <button>Show more</button>
        </section>
    );
}