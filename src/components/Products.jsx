import { useState, useEffect } from "react";

export default function Products() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://products-furniro.wiremockapi.cloud/main-page/')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    if (!data) return <div></div>;

    return (
        <section className="our-products">
            <h2>Our Products</h2>
            <div className="container">
                {content(data)}
            </div>
            <button>Show more</button>
        </section>
    );

    function content(data) {
        return data.map((el, index) => (
            <div key={index} className="item">
                <span className="img" style={{ backgroundImage: `url(${el.img})` }}>
                    {el.sale !== 0 && <span className="sale">-{el.sale}%</span>}
                    {el.isNew && <span className="new">New</span>}
                </span>
                <div className="under">
                    <h3>{el.title}</h3>
                    <p>{el.descr}</p>
                    <span>
                        <p className="current-price">Rp {(el.fullPrice * (100 - el.sale)) * 0.01}</p>
                        {el.sale !== 0 && <p className="old-price">Rp {el.fullPrice}</p>}
                    </span>
                </div>
                <div className="hover">
                    <div className="container">
                        <button className="cart">Add to cart</button>
                        <span className="actions">
                            <span className="action">
                                <span style={{ backgroundImage: 'url(../images/icons/share.svg)' }}></span>
                                Share
                            </span>
                            <span className="action">
                                <span style={{ backgroundImage: 'url(../images/icons/compare.svg)' }}></span>
                                Compare
                            </span>
                            <span className="action">
                                <span style={{ backgroundImage: 'url(../images/icons/like.svg)' }}></span>
                                Like
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        ));
    }
}