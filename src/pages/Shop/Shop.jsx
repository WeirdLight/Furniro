import './index.css';
import Title from '../../components/Title.jsx';
import filter from '../../images/shop/filter.svg';
import list from '../../images/shop/list.svg';
import block from '../../images/shop/block.svg';
import { useEffect, useState, useRef } from 'react';

export default function Shop(){
    const drop = useRef();
    const nums = useRef();

    const [option, newOption] = useState('16');

    let newOpt = (value) => {
        newOption(value);
    }

    useEffect(() => {
        if(nums.current){
            nums.current.addEventListener('mouseover', () => {
                drop.current.style.display = 'block';
                
            });
            nums.current.addEventListener('mouseout', () => {
                drop.current.style.display = 'none';
            });
        }
    }, [])

    console.log(option);
    return <>
        <Title title='Shop' />
        <section className="filter">
            <div className="container">
                <div className="left">
                    <span className='filter-settings'>                    
                        <img src={filter} alt="filter" />
                        <p>Filter</p>
                    </span>
                    <div className="choise">
                        <img src={block} alt="block" />
                        <img src={list} alt="list" />
                    </div>
                    <hr />
                    <p className='num-showing'>Showing 1–16 of 32 results</p>
                </div>
                <div className="right">
                    <form action="">
                        <span>
                            <label htmlFor="show">Show</label>
                            <div className="dropdown" ref={nums}>
                                <textarea className='num' id="show" value={option} readOnly />
                                <ul id='dropdown' ref={drop}>
                                    <li onClick={(el) => {newOpt(el.target.innerText)}}>4</li>
                                    <li onClick={(el) => {newOpt(el.target.innerText)}}>8</li>
                                    <li onClick={(el) => {newOpt(el.target.innerText)}}>24</li>
                                </ul>
                            </div>
                        </span>
                        <span>
                            <label htmlFor="short">Short by</label>
                            <textarea className='short' id="short" value='Default' readOnly />
                        </span>
                    </form>
                </div>
            </div>
        </section>
    </>
}