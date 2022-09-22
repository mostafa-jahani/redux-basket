import {SET_PRODUCTS} from "./actionTypes";
import {products} from "./products";


export const getProducts = () => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}