import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  getProductDetails, getProductReducer } from './reducers/getproductsReducer';
import { cartReducer } from './reducers/Cartreducer';
import Counter from './reducers/Counter';

// import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetail  : getProductDetails,
    cart : cartReducer,
    value : Counter
})


const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;