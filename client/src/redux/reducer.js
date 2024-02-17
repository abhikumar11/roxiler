import { FAIL_TRANSACTION, REQUEST_TRANSACTION, SUCCESS_TRANSACTION } from "./constants";

const initialState={
   product:[],
   category:[]
}
function transactionReducer(state=initialState,action) {
    switch (action.type) {
      case REQUEST_TRANSACTION:
         return {...state}
      case SUCCESS_TRANSACTION:
         console.log("reducer",action.payload)
         return {...state,product:action.payload.product,category:action.payload.category}
         case FAIL_TRANSACTION:
         return {...state,error:action.payload}
      default:
         return state;
    }
}
export default transactionReducer;