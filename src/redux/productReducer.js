
import * as actionType from "./constants.js"

export const getProductReducer = (state ={products: []} , action) => {
    switch(action.type)
    {
        case actionType.products_Success:
            return { products: action.payload}
        case actionType.products_Failure:
            return {error: action.payload}
        default:
            return state
    }
}

export const getProductDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type)
    {
        case actionType.Get_Product_Details_Request:
            return {loading: true}
        case actionType.Get_Product_Details_Success:
            return {loading: false, product: action.payload}
        case actionType.Get_Product_Details_Fail:
            return {loading: false , error: action.payload}
        case actionType.Get_Product_Details_Reset:
            return {product: {}}
        default:
            return state
    }
}