import * as actionsTypes from '../actions/actionsTypes'

const initState = {
    
      
}



 const MediaMarket = (state = initState, action) => {
     switch(action.type){

        case actionsTypes.FETCH_MEDIAMARKET_DATA:

        return state= action.MediaMarket


        case actionsTypes.ORDER_FROM_MEDIAMARKET:

        return {
            ...state,
            itemsMediaMarket :state.itemsMediaMarket > 0 ? state.itemsMediaMarket - 1 : state.itemsMediaMarket,
            ordersMediaMarket:state.itemsMediaMarket > 0 ? state.ordersMediaMarket + 1 : state.ordersMediaMarket,
           

            
        }

        case actionsTypes.REMOVE_ONE_FROM_MEDIAMARKET:

        return {
            
            ...state,
            itemsMediaMarket :state.itemsMediaMarket + 1,
            ordersMediaMarket:state.ordersMediaMarket - 1,
            
            
        }


        case actionsTypes.REMOVE_ALL_FROM_MEDIAMARKET:

        return {
            
            ...state,
            itemsMediaMarket: state.itemsMediaMarket + state.ordersMediaMarket,
            ordersMediaMarket:0 
            
        }

        case actionsTypes.CHECKOUT_FROM_MEDIAMARKET:

        return {
            
            ...state,
            ordersMediaMarket:0 
            
        }


         default :
         return state
      
     }
     
 }


 export default MediaMarket