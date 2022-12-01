export const initialState = {
    itemsInWatchList: [],
}

export const SET_WATCHLIST_ACTION = 'SET_WATCHLIST_ACTION'


const reducer = (state, action) => {
    switch(action.type) { 
        case SET_WATCHLIST_ACTION: {
            return {
                ...state,
                itemsInWatchList: action.value
            }
        } 
    }
}

export default reducer