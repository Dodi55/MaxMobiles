import { MdOutlineDelete } from 'react-icons/md';
import './HeaderBasketItem.sass'
import { store } from '../../../../store/store';

function HeaderBasketItem({src, name, price, id}: {src: string, name: string, price: number; id: number}) {
    
    
    return (
        <div className='header-basket-item'>
            <img height={70} src={src} alt="" />
            <p className='header-basket-item-name'>{name}</p>
            <p>
                <button className='header-basket-item-btn'>-</button>
                <button className='header-basket-item-btn-count'>1</button>
                <button className='header-basket-item-btn'>+</button>
            </p>
            <p className='header-basket-item-price'>{price.toLocaleString() + ' ₽'}</p>
            <button className='header-basket-item-delete'
                onClick={(): void => {
                    store.dispatch({type: 'RemoveBasket',value:{'id': id}})
                }}>
            <MdOutlineDelete/></button>

        </div>
    );
}

export default HeaderBasketItem;