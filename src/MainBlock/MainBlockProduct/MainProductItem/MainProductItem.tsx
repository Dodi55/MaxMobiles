//import { useData } from "../../App"
import { MdOutlineDelete } from "react-icons/md";
import { FiHeart, FiBarChart2 } from "react-icons/fi";
import './MainProductItem.sass'
import { store } from "../../../store/store";
import { useEffect, useReducer } from "react";



export function MainProductItem({src, name, price, id}) {
    const [,forsUpdeta] = useReducer((x) => x + 1, 0)



    useEffect(() => {
        store.subscribe(() => {
            forsUpdeta();
        });
    },[])


    function isBasket(num) {
        const result = store.getState().basket.some(el => {
            return el.id == num;
        })
        return result
    }


    return(
            <div className="categori-menu-tovar-item">
                <img src={src} width={200} alt="" />
                <p className="categori-menu-tovar-item-name">{name}</p>
                <div className="item-heart-addchart">
                    <FiHeart className="item-heart" />
                    <FiBarChart2 className="item-heart"/>    
                </div>
                
                
                <div className="categori-menu-tovar-item-price-block" >
                    <p className="categori-menu-tovar-item-price">{price.toLocaleString()} ₽</p>
                    {!isBasket(id)   ?
                        <button className="categori-menu-tovar-item-btn tovar-item-btn-add"
                            onClick={() => store.dispatch({type: 'AddBasket',value:{'src': src, 'name': name, 'price': price, 'id': id}})}>
                            В корзину
                        </button>
                        :
                        <button className="categori-menu-tovar-item-btn tovar-item-btn-delete" 
                            onClick={() => store.dispatch({type: 'RemoveBasket',value:{'src': src, 'name': name, 'price': price, 'id': id}})}>
                            Удалить
                        </button>
                    }
                </div>

            </div>
    )
}