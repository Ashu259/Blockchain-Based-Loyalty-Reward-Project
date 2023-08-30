import axios from "axios"
import * as actionType from "../constants"
const URL = 'http://localhost:8000';

export const addToCart = (id, quantity) => async(dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        console.log(data);

        dispatch({ type: actionType.Add_To_Cart, payload: {...data, quantity } });
    } catch (error) {
        dispatch({ type: actionType.Add_To_Cart_Error, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionType.Remove_From_Cart, payload: id });
    //   dispatch({type:actionType.Remove_From_Cart , payload: id});
}