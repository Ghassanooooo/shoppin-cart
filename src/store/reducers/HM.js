import * as actionsTypes from '../actions/actionsTypes'

const initState = {
    itemsHm: 8,
    orderedHm:0,
    
  
}



 const HM = (state = initState, action) => {
     switch(action.type){


        case actionsTypes.FETCH_HM_DATA:

        return state = action.hmData

        case actionsTypes.ORDER_FROM_HM:

        return {
            
            ...state,
            itemsHm :state.itemsHm > 0 ? state.itemsHm - 1 : state.itemsHm,
            orderedHm:state.itemsHm > 0 ? state.orderedHm + 1 : state.orderedHm,
            
        }

        case actionsTypes.REMOVE_ONE_FROM_HM:
        return {
            
            ...state,
            itemsHm :state.itemsHm + 1,
            orderedHm:state.orderedHm - 1,
           
            
        }

        case actionsTypes.REMOVE_ALL_FROM_HM:

        return {
            
            ...state,
            itemsHm :state.itemsHm + state.orderedHm,
            orderedHm:0 
            
        }


        case actionsTypes.CHECKOUT_FROM_HM:

        return {
            
            ...state,
            orderedHm:0 
            
        }



         default :
         return state
      
     }
     
 }


 export default HM