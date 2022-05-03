import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import { loginReducer } from '../reducers/auth.reducer'
import { userReducer } from '../reducers/user.reducer'
import { categoryReducer } from '../reducers/category.reducer'
import { productReducer } from '../reducers/product.reducer'
import logger from "redux-logger";

const reducers = combineReducers({ rootReducer, loginReducer, userReducer, categoryReducer, productReducer })
const middleware = applyMiddleware(thunk)

const myStore = createStore(reducers, middleware)

export default myStore;