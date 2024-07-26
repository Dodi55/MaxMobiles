import { FiBarChart2, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './HeaderMainIcons.sass'

function HeaderMainIcons() {
    return (
        <div className='header-main-info-icons'>
            <Link to="/error"><FiBarChart2 className='header-main-info-icon'/></Link>

            <Link to='/heart'  style={{position: 'relative'}}>
                <FiHeart className='header-main-info-icon' />
            </Link>
            
            <Link to="/user"><FiUser className='header-main-info-icon'/></Link>

            <Link to="/basket" style={{position: 'relative'}}>
                <FiShoppingCart className={'header-main-info-icon'}/>
                {/* <div className='shopBasket-count'>{data.length != 0 && data.length}</div> */}
            </Link>

            {/* <div className={'header-main-info-basket'}>
                
                <div className='header-main-info-basket-price-block'>
                    <p className='header-main-info-basket-price'>Итог: <span style={{color: '#FFD700'}}>{price && price.toLocaleString('es-ES')}</span> ₽</p>
                    <button onClick={() => setValue()} className='header-main-info-basket-price-reset'>Удалить все</button>
                </div>
            </div> */}

        </div>
    );
}

export default HeaderMainIcons;