import * as actionTypes from '../../constants/productConstants'
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        // const { data } = await axios.get(`http://localhost:7273/products`);

        const { data } = await axios.get(`https://localhost:7273/products`);

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {



    try {


        // const { data } = await axios.get(`http://localhost:7273/product/${id.id}`)
        const { data } = await axios.get(`https://localhost:7273/product/${id.id}`)


        // const {data} = await axios.get(`http://localhost:8000/product/product5`);


        console.log(data)
        dispatch({ type: actionTypes.GET_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_DETAILS_FAIL, payload: error.response });

    }
};


