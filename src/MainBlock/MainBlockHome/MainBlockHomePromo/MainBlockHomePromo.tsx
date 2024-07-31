import React, { useEffect, useState } from "react";
import "./MainBlockHomePromo.sass";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import MainBlockHomePromoItem from "./MainBlockHomePromoItem/MainBlockHomePromoItem";
import { promoBd } from "./promoBd.js";


function MainBlockHomePromo() {
    const [count, setCount] = useState(0);
    const [countMax, setCountMax] = useState(0);

    

    const promoSlaiderRef = React.createRef();
    

    const style = {
        transform: `translateX(${-356.66 * count}px)`
    }

    useEffect(() => {
        const slaiderElement = promoSlaiderRef.current;
        setCountMax(promoBd.length - 4);
        let x = document.documentElement.scrollWidth;
    },[countMax])

    useEffect(() => {
        const slaiderElement = promoSlaiderRef.current;
    },[count])


    function moveNext() {
        if (count == countMax) {
            setCount(0)
            return
        } 
        setCount(count + 1)
    }

    function movePrev() {
        if (count == 0) return 
        setCount(count - 1)
    }

    return (
        <div className='main-block-promo'>
            
            <div style={{position: 'relative'}}>
                <div style={{overflow: 'hidden'}}>
                    <div className="main-block-promo-move" ref={promoSlaiderRef} style={style}>
                        {promoBd.map((el: {id: number,src: string,href: string}[]) => {
                            return <MainBlockHomePromoItem src={el.src} key={el.id} href={el.href}/>
                        })}
                    </div>
                </div>
                <div className="main-block-promo-arrows">
                    <div onClick={() => movePrev()} className={count == 0 ? "main-block-promo-arrow promo-arrow-left promo-arrow-left-hidden" : "main-block-promo-arrow promo-arrow-left"}><FaArrowLeft /></div>
                    <div onClick={() => moveNext()} className="main-block-promo-arrow promo-arrow-right"><FaArrowRight  /></div>
                </div>
                
            </div>
            
            <div style={{marginTop: '10px'}}>
                <a href="#">
                    <button className="main-block-promo-all">Все промо акции</button>
                </a>
            </div>
            
        </div>
    );
}

export default MainBlockHomePromo;