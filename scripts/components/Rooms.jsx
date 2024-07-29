import React, {useEffect} from "react"
import Room from "./Room";


function nextRoom(){
    const container = document.querySelector('.container-rooms');
    const rooms = container.querySelectorAll('.room');
    const circles = document.querySelectorAll('.circles');

    rooms.forEach((el, index) => {
        if(el.style.order == ''){
            el.style.order = index+1;
            if(el.style.order == 1) el.classList.add('first');
        }
        else{
            el.style.order = el.style.order - 1 == 0 ? 3 : el.style.order - 1;
            if(el.style.order == 1 || el.style.order == 3) el.classList.toggle('first');
        }
        if(el.style.order == 1){
            circles[0].children[index].classList.add('active');
        } else{
            circles[0].children[index].classList.remove('active');
        }
    });
}

function prevRoom(){
    const container = document.querySelector('.container-rooms');
    const rooms = container.querySelectorAll('.room');
    const circles = document.querySelectorAll('.circles');

    rooms.forEach((el, index) => {
        el.style.order = Number(el.style.order) + 1 == 4 ? 1 : Number(el.style.order) + 1;
        if(el.style.order == 1){
            circles[0].children[index].classList.add('active');
        } else{
            circles[0].children[index].classList.remove('active');
        }
        if(circles[0].children[index].classList == 'circle active'){
            el.classList.add('first');
        }
        else{
            el.classList.remove('first');
        }
    });
}
export default function Rooms(){

    let data = [
        {
            id: 1,
            title: 'Inner Peace',
            img: '../../src/rooms/innerPeace.png',
            typeOfRoom: 'Bed room',
            link: '#'
        },
        {
            id: 2,
            title: 'Light room',
            img: '../../src/rooms/lightRoom.png',
            typeOfRoom: 'Office',
            link: '#'
        },
        {
            id: 3,
            title: 'Scandinavia',
            img: '../../src/rooms/scandinavianRoom.png',
            typeOfRoom: 'Bed room',
            link: '#'
        },
    ]

    useEffect(() => {
        if(document.querySelector('.room')){
            nextRoom();

            const nextButton = document.querySelector('.next');
            nextButton.addEventListener('click', nextRoom);

            const prevButton = document.querySelector('.prev');
            prevButton.addEventListener('click', prevRoom)
        }
    }, []); 

    useEffect(() => {
        let circles = document.querySelectorAll('.circle');
        if(circles){
            let circlesContainer = document.querySelector('.circles')
            data.forEach(el => {
                circlesContainer.style.width = Number((circlesContainer.style.width).replace('px', '')) + 18 + 'px'
            });

            circles.forEach((el, index) => el.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active');
                el.classList.add('active');
                
                let rooms = document.querySelectorAll('.container-rooms');
                document.querySelector('.first').classList.remove('first');
                rooms[0].children[index].style.order = 1;
                console.log(rooms[0].children[index]);
                rooms[0].children[index].classList.add('first');
                
                let j = 1, o = 0;
                for(let i=index; i != (index + 1 == rooms[0].children.length ? 0 : index+1); (i == 0 ? i = rooms[0].children.length-1 : i = i-1)){
                    rooms[0].children[i-j < 0 ? rooms[0].children.length-1 : i-j].style.order = rooms[0].children.length - o;
                    o++;
                }
            }))
        }
    }, [])

    return(
        <section className="rooms">
            <div className="container">
                <div className="title">
                    <span>                    
                        <h2>50+ Beautiful rooms inspiration</h2>
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    </span>
                    <button>Explore more</button>
                </div>
                <div className="container-rooms">
                    {data.map(el => Room(el))}
                </div>
                <div className="wrapper">
                    <span className="prev"></span>
                    <div id="circle" className="circles">
                        {data.map((el, index) => <span key={index+1} id={index+1} className="circle"><span className="inside"></span></span>)}
                    </div>
                    <span className="next"></span>
                </div>
            </div>
        </section>
    );
}