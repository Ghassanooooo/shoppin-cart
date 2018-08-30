import * as actionsTypes from './actionsTypes'

import axios from 'axios'

export const orderFromHm = () => {
    return {
        type: actionsTypes.ORDER_FROM_HM
    }
}


export const removeOneHm = () => {
    return {
        type: actionsTypes.REMOVE_ONE_FROM_HM
    }
}

export const removeAllHm = () => {
    return {
        type: actionsTypes.REMOVE_ALL_FROM_HM
    }
}


export const checkoutFromHm = () => {
    return {
        type: actionsTypes.CHECKOUT_FROM_HM
    }
}



export const setHmData = (hmData) => {

    
    return {
        type: actionsTypes.FETCH_HM_DATA,
        hmData
        
    }
}


export const fetchHmData = () =>{
    return dispatch => { 
        
        axios.get('http://10.0.1.33:4000/api')
        .then(res =>{
         dispatch(setHmData(res.data[0]))
         console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHH',res.data)
        })
        
        
        }
    
}