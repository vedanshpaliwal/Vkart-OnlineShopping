import * as actionTypes from '../actions/cartconstants'

export const cartReducer = (state = {cartitems: [] }, action) => {
    switch (action.type) {
        case actionTypes.add_to_cart:

            const item = action.payload
            const exists = state.cartitems.find(product => product.id === item.id)
            if(exists)return

            // return{...state, cartitems : [state.cartitems,item]}
            return { ...state,cartitems : [...state.cartitems,item]}
       
       
        case actionTypes.not_added_cart:
            return { errors: action.payload }
        
        case actionTypes.removefromcart:
            return{ ...state ,cartitems : state.cartitems.filter(product =>product.id != action.payload )}


        
        default:
            return state
    }
};

