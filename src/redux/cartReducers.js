import * as actionType from "./constants"
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.Add_To_Cart:
            const item = action.payload;
            console.log(item);
            const exist = state.cartItems.find(product => product._id === item._id);
            if (exist) {
                return {...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data) }
            } else {
                return {...state, cartItems: [...state.cartItems, item] }
            }

        case actionType.Remove_From_Cart:
            console.log(action.payload)
            return {...state, cartItems: state.cartItems.filter(product => product._id !== action.payload) };

        default:
            return state;
    }

}