
import axios from "axios";
import * as actionType from '../constants.js'
const URL = 'http://localhost:8000';




export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await  axios.get(`${URL}/products`)
        // console.log(response);
        dispatch({type:actionType.products_Success, payload: data});
    } catch (error) {
        // console.log("Error while calling getProducts api" , error.message);
        dispatch({type:actionType.products_Failure , payload: error.message});
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({type: actionType.Get_Product_Details_Request});

        const {data } = await axios.get(`${URL}/product/${id}`);

        dispatch({type: actionType.Get_Product_Details_Success , payload: data})
    } catch (error) {
        dispatch({type: actionType.Get_Product_Details_Fail , payload: error.message})
    }
}