import { HeaderInfo } from "./HeaderInfo/HeaderInfo";
import { HeaderMain } from "./HeaderMain/HeaderMain";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";


function Header() {
    return (
        <>
            <HeaderInfo />
            <HeaderMain />
            <HeaderMenu />
        </>
    );
}

export default Header;