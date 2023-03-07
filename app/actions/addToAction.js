import * as actionTypes from './actionTypes';

export const prolistSelected = (item)=>{
    console.log('AddToAction',item);
    return{
        type: actionTypes.PROLIST_SELECTED,
        item
    }
}
export const searchItem = (item) =>{
    console.log('searchitem',item);
    return{
        type:actionTypes.SEARCH_ITEM,
        item
    }
}