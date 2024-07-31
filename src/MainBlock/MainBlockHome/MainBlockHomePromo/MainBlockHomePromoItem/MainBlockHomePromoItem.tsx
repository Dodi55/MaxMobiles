import './MainBlockHomePromoItem.sass'

function MainBlockHomePromoItem({src,href}) {
    
    
    return (
        <a href={href} className='main-block-promo-item'>
            <img src={src} alt="" />
        </a>
    );
}

export default MainBlockHomePromoItem;