export const initialState = {
    itemsInWatchList: [],
}

// you can use any varabile name you want
export const SET_WATCHLIST_ACTION = 'SET_WATCHLIST_ACTION'


// the state is the current state 
// action is the action that was dispatch 
// dispatch means send off to
const reducer = (state, action) => {
    // action
    // same as 
// if (action.type === SET_WATCHLIST_ACTION) {
//     return {
//         ...state,
//         itemsInWatchList: action.value
//     }
// } scales better 
    switch(action.type) { 
        case SET_WATCHLIST_ACTION: {
            return {
                ...state,
                itemsInWatchList: action.value
            }
        } 
        default: {
            return {...state}
        }
    }
}

export default reducer