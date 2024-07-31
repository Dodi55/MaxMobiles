import { Route, Routes } from "react-router-dom";
import MainBlockHome from "./MainBlockHome/MainBlockHome";
import MainBlockError from "./MainBlockError/MainBlockError";
import MainBlockProduct from "./MainBlockProduct/MainBlockProduct.js";
import {bdAirPods} from '../database/bdAirPods.js';
import {bdBY} from '../database/bdBY.js';
import {bdGame} from '../database/bdGame.js';
import {bdIphone} from '../database/bdIphone.js';
import {bdMac} from '../database/bdMac.js';
import {bdSale} from '../database/bdSale.js';
import {bdWatch} from '../database/bdWatch.js';
import Outlet1 from "./Outlet1.js";
import Outlet2 from "./Outlet2.js";

function MainBlock() {
    return (
        <Routes>
                <Route path='/' element={<MainBlockHome/>}>
                    <Route index element={<Outlet1/>}/>
                    <Route path='home-watch' element={<Outlet2/>}/>
                </Route>
				<Route path='/sale'   element={<MainBlockProduct bd={bdSale} name={'Скидки %'} banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/used'   element={<MainBlockProduct bd={bdBY} name={'Идеальное БУ'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/85/11x_jpg.webp'}/>}/>
                <Route path='/iphone'   element={<MainBlockProduct bd={bdIphone} name={'iPhone'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/mac'   element={<MainBlockProduct bd={bdMac} name={'Mac'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/watch'   element={<MainBlockProduct bd={bdWatch} name={'Watch'}  banner={'https://kalix.club/uploads/posts/2023-03/1677763649_kalix-club-p-eppl-votch-zastavka-krasivo-47.png'}/>}/>
                <Route path='/airpods'   element={<MainBlockProduct bd={bdAirPods} name={'AirPods'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
                <Route path='/game'   element={<MainBlockProduct bd={bdGame} name={'Все для игр'}  banner={'https://maxmobiles.ru/images/ab__webp/abt__ut2/banners/all/75/csyj8wbfmv7v22k2pk2avif3fc7d7i16_png.webp'}/>}/>
				<Route path='*'   element={<MainBlockError/>}/>
		</Routes>
    );
}

export default MainBlock;3