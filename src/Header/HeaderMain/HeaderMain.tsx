import './HeaderMain.sass'
import HeaderMainIcons from './HeaderMainIcons/HeaderMainIcons';
import HeaderMainSearh from './HeaderMainSearh/HeaderMainSearh';
import HeaderMainTel from './HeaderMainTel/HeaderMainTel';
import HeaderMainCatalog from './HeaderMainCatalog/HeaderMainCatalog';
import HeaderMainLogo from './HeaderMainLogo/HeaderMainLogo';




export function HeaderMain() {
    return(
        <>
        <div className='header-main'>
            <div className="container">

                <div className='header-main-flex'>
                    <HeaderMainLogo />
                    <HeaderMainCatalog />
                    <HeaderMainSearh />

                    <div className='header-main-info'>
                        <HeaderMainTel />
                        <HeaderMainIcons />
                    </div>

                </div>
            </div>
        </div>
        </>
    )  
}