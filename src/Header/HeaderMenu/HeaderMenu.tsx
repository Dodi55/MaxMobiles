import './HeaderMenu.sass'
import { NavLink } from 'react-router-dom'
import { MdPercent, MdPhoneIphone, MdAutorenew, MdOutlineWatch } from "react-icons/md";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";





export function HeaderMenu() {
    return(
        <>
        <div className="header-menu">
            <div className="container">
                <div className='header-menu-nav'>
                    <div className='header-menu-a'>
                        <NavLink to="/sale"><MdPercent className='header-menu-a-icon'/>Скидки</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/used"><MdAutorenew className='header-menu-a-icon'/>Идеальное БУ</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/iphone"><MdPhoneIphone className='header-menu-a-icon'/>iPhone</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/mac"><IoIosLaptop className='header-menu-a-icon'/>Mac</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/watch"><MdOutlineWatch className='header-menu-a-icon'/>Watch</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/airpods"><TbDeviceAirpodsCase className='header-menu-a-icon'/>AirPons</NavLink>
                    </div>

                    <div className='header-menu-a'>
                        <NavLink to="/game"><IoGameControllerOutline className='header-menu-a-icon'/>Все для игр</NavLink>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}