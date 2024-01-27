
import { createStore, combineReducers } from 'redux';

import shopReducer from '../store/reducers/index'
import { counterReducer } from '../store/reducers/counterReducer';
import { valueReducer } from '../store/reducers/shopifyReducer';
import {itemReducer} from '../store/reducers/itemReducer';
import {countItemReducer} from '../store/reducers/totalItemsReducer'
import searchReducer from './reducers/searchReducer';
import addToCartReducer from './reducers/addToCartReducer'
const rootReducer = combineReducers({
    shop: shopReducer,
    counter: counterReducer,
    value: valueReducer,
    item: itemReducer,
    quantity :countItemReducer,
    search:searchReducer,
    cartItems:addToCartReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
