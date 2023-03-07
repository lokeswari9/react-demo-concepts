import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return [...state, action.item];
        case actionTypes.REMOVE_FROM_CART:
            console.log(action,state);
            return state.filter(item => item.id !== action.id)
        case actionTypes.EMPTY_CART:
            return initialState;
        default:
            return state;    
    }
}
export const addToListReducer = (state = initialState, action)=>{
    console.log('addToList reducer ');
    console.log('state',state,'action',action);
    switch(action.type){
        case actionTypes.PROLIST_SELECTED:
        return [...state,action.item];
        default:
        return state;
    }
}
export const searchReducer = (state = initialState, action)=>{
    console.log('search reducer ');
    console.log('state',state,'action',action);
    switch(action.type){
        case actionTypes.SEARCH_ITEM:
        return [...state,action.item];
        default:
        return state;
    }
}
