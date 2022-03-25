import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import {loginReducer} from '../reducers/auth.reducer'

const reducers=combineReducers({rootReducer,loginReducer})
const middleware=applyMiddleware(thunk)

const myStore=createStore(reducers,middleware)

export default myStore;