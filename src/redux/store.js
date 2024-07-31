import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import basketReducer from "./reducers/BasketReducer";

let reducers = combineReducers({
    basketReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;