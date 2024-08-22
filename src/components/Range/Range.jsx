import Ranges from "./Ranges";

export default function Range(){
    return (
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
    );
}