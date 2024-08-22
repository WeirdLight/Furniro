export default function Room(data){
    return(
        <div key={data.id} className="room" style={{backgroundImage: `url(${data.img})`}}>
            <div className="content">
                <div className="box">
                    <p className="type-of-room">{`${data.id < 10 ? `0${data.id}` : data.id}`} <span></span> {data.typeOfRoom}</p>
                    <h3>{data.title}</h3>
                </div>
                <a href={data.link}></a>
            </div>
        </div>
    )
}