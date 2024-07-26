import { FiPhoneCall } from "react-icons/fi";
import './HeaderMainTel.sass'


function HeaderMainTel() {
    return (
        <div className='header-main-info-phone'>
            <FiPhoneCall style={{color: 'black', fontSize: '26px'}}/>
            <a href="tel:+79783462144" >8 (978) 346-21-44</a>
        </div>
    );
}

export default HeaderMainTel;