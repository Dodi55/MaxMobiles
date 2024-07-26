import { SlMagnifier } from "react-icons/sl";
import './HeaderMainSearh.sass'

function HeaderMainSearh() {
    return (
        <div className='header-main-search'>
            <input type="text" />
            <SlMagnifier className='header-main-search-icon'/>
        </div>
    );
}

export default HeaderMainSearh;