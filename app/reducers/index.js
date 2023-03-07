import { combineReducers } from 'redux';
//root reducer to combine all reducer
import {cartReducer,addToListReducer,searchReducer} from './CartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    searchvalues: searchReducer,
    addlist : addToListReducer

});

export default rootReducer;