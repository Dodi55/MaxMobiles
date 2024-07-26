import { NavLink } from 'react-router-dom';
import './HeaderMainLogo.sass'

function HeaderMainLogo() {
    return (
        <div className='header-main-logo'>
            <NavLink to="/">
                <img src="https://maxmobiles.ru/images/logos/73/logo__.svg" width={195} alt="MaxMobiles" />
            </NavLink>
        </div>
    );
}

export default HeaderMainLogo;