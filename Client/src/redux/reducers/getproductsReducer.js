// import * as actionTypes from '../../constants/productConstants';
import * as actionTypes from '../../constants/productConstants'


export const getProductReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetails = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_DETAILS_SUCCESS:
            return { product: action.payload }
        case actionTypes.GET_DETAILS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};






// export const getProductDetailReducer  = (state = {products : [],action) =>{
//      switch(action.type) {
//          case actionTypes.GET_DETAILS_SUCCESS:
//              return { products  : action.payload}
//         case actionTypes.GET_DETAILS_FAIL:
//             return {products : action.payload}
//         default : 
//              return state
//      }
// }