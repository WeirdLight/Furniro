import bedroom from '../../../images/range/bedroom.png';
import dining from '../../../images/range/dining.png';
import living from '../../../images/range/living.png';

export default function Ranges({img, title}){
    let rooms = {
        bedroom: bedroom,
        dining: dining,
        living: living
    }
    console.log(rooms[img])
    return <span className="item">
        <img className='img' src={rooms[img]} alt={img} width='300' height='400' />
        <h3 className="title">{title}</h3>
    </span>
}