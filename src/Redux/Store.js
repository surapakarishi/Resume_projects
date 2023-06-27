import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "./Reducer/WeatherReducer";
import thunk from "redux-thunk";

let store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
