import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//import all your reducers from the store
import authReducer from "./Auth/reducer";

//
const rootReducer = combineReducers({
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
