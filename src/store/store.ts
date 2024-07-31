import { configureStore } from "@reduxjs/toolkit"

const stateDef = {
  basket: (JSON.parse(localStorage.getItem('basket') || '[]')),
  heart: [{id: 5, img: 'wffscs'}],
  basketActive: false
}


const reducer = (state = stateDef, {type, value}: {type: string, value: any}) => {

  switch (type) {
    case 'AddBasket':
      localStorage.setItem('basket', JSON.stringify([...state.basket,value]));
      return {...state,basket: [...state.basket,value]};

    case 'RemoveBasket':
      const filtArray = state.basket.filter(el => el.id !== value.id)
      localStorage.setItem('basket', JSON.stringify(filtArray));
      if (filtArray.length) return {...state,basket: filtArray}
      return {...state,basket: filtArray,basketActive: false}

    case 'BasketActive':
      if (state.basket.length) return {...state,basketActive: !state.basketActive};
      else return {...state}
      
    case 'BasketCleare':
        localStorage.setItem('basket','[]')
        return {...state,basket: [],basketActive: false}

    default:
      return state;
  }
}

export const store = configureStore({
  reducer: reducer,
})


