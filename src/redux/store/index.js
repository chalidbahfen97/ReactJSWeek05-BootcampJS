import { createStore } from "redux";
import productReducer from "../reducers/productReducer";

//create store
const store = createStore(productReducer);
export default store;
