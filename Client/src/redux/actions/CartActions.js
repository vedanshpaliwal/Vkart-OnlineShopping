import axios from "axios";
import * as actiontypes from './cartconstants';

export const addTocart = (id) => async (dispatch) => {
  try {
    console.log(id)
    const { data } = await axios.get(`https://localhost:7273/product/${id}`)

    // const { data } = await axios.get(`http://localhost:8000/product/product5`)

    console.log(data)
    dispatch({ type: actiontypes.add_to_cart, payload: data })

  } catch (error) {

    dispatch({ type: actiontypes.not_added_cart, payload: error })

  }
}


export const removefromcart = (id) => (dispatch) => {
  dispatch({ type: actiontypes.removefromcart, payload: id })
}


export const incnumber = () => {
  return {
    type: "Increment"
  }
}

export const decnumber = () => {
  return {
    type: "Decrement"
  }
}