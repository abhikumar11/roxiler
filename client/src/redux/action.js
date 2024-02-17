import { FAIL_TRANSACTION, REQUEST_TRANSACTION, SUCCESS_TRANSACTION } from "./constants";
import axios from "axios";

export const getAllTranstion = (dispatch) => async () => {
    try {
        dispatch({type:REQUEST_TRANSACTION})
        const product= await axios.get(`http://localhost:3001/product/getProduct/`)
        dispatch({type:SUCCESS_TRANSACTION,payload:product.data})
    } catch (err) {
        dispatch({type:FAIL_TRANSACTION,payload:err.message});
    }
};

export const getMonthTranstion = (dispatch, month) => async () => {
    try {
        dispatch({type:REQUEST_TRANSACTION})
        const product= await axios.get(`http://localhost:3001/product/getProduct/${month}`)
        //console.log("payload",product.data);
        dispatch({type:SUCCESS_TRANSACTION,payload:product.data})
    } catch (err) {
        dispatch({type:FAIL_TRANSACTION,payload:err.message});
    }
};
