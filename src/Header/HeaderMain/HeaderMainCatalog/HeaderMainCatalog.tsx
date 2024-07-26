import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import './HeaderMainCatalog.sass'


function HeaderMainCatalog() {
    return (
        <div className='header-main-catalog'>
            <FiAlignJustify className='header-main-catalog-icon'/>
            <button className=''>Каталог</button>
            <FiChevronDown  className='header-main-catalog-icon2'/>
        </div>
    );
}

export default HeaderMainCatalog;