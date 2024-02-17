import {createStore,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import transactionReducer from "./reducer";

const store = createStore(transactionReducer,{},applyMiddleware(thunk));
export default store;