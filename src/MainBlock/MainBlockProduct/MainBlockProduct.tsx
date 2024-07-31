import { useEffect, useReducer } from 'react';
import { Decrement, Increment, store } from '../../store/store';
import './MainBlockProduct.sass'
import { MainProductItem } from './MainProductItem/MainProductItem';


function MainBlockProduct({bd, name, banner}) {

    const style = {
        backgroundImage: `url(${banner})`
    }
    
    return (
        <div className="main-block-product">
            <div className="container">
                <h1>{name}</h1>

                <div className="main-block-product-banner" style={style}></div>

                <div className="categori-menu-tovar">
                    { bd.map(el => <MainProductItem src={el.src} name={el.name} price={el.price} key={el.id} id={el.id} />)}
                </div>
            </div>
        </div>


    );
}

export default MainBlockProduct;