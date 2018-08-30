import * as actionsTypes from './actionsTypes'

import axios from 'axios'

export const orderFromMediaMarket = () => {
    return {
        type: actionsTypes.ORDER_FROM_MEDIAMARKET
    }
}

export const removeOneMediaMarket = () => {
    return {
        type: actionsTypes.REMOVE_ONE_FROM_MEDIAMARKET
    }
}

export const removeAllMediaMarket = () => {
    return {
        type: actionsTypes.REMOVE_ALL_FROM_MEDIAMARKET
    }
}


export const checkoutFromMediaMarket = () => {
    return {
        type: actionsTypes.CHECKOUT_FROM_MEDIAMARKET
    }
}


export const setMediaMarketData = (MediaMarket) => {

    
    return {
        type: actionsTypes.FETCH_MEDIAMARKET_DATA,
        MediaMarket
        
    }
}


export const fetchMediaMarketData = () =>{
    return dispatch => { 
        
        axios.get('http://10.0.1.33:4000/api')
        .then(res =>{
         dispatch(setMediaMarketData(res.data[1]))
         console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHH',res.data)
        })
        
        
        }
    
}