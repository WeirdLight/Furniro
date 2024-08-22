import sharing from '../images/sharing.png'

export default function Sharing(){
    return(
        <section className="sharing">
            <p>Share your setup with</p>
            <h2>#FuniroFurniture</h2>
            <div>
                <img src={sharing} alt="photos" />
                <img src={sharing} alt="photos" />
                <img src={sharing} alt="photos" />
            </div>
        </section>
    );
}