import './MainBlockHome.sass'
import MainBlockHomeBanner from './MainBlockHomeBanner/MainBlockHomeBanner';
import MainBlockHomePromo from './MainBlockHomePromo/MainBlockHomePromo';
import MainBlockHomeСategories from './MainBlockHomeСategories/MainBlockHomeСategories';
import { NavLink, Outlet } from 'react-router-dom';



function MainBlockHome() {
    return (
        <div className="main-block">
            <div className="container">
                
                <div className="salider">
                    <h1>iPhone 15Pro Max - Titan</h1>
                </div>

                <MainBlockHomePromo />

                <MainBlockHomeСategories />
                <MainBlockHomeBanner />
                <NavLink to={'/'} style={{color: '#000'}}>iphone</NavLink><br />
                <NavLink to={'/home-watch'} style={{color: '#000'}}>watch</NavLink>
                <Outlet />
            </div>
        </div>
    );
}

export default MainBlockHome;