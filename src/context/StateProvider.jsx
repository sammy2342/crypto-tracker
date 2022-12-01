import { createContext, useContext, useReducer } from "react"


const StateContext = createContext() 

// rudercer reduced the function 
export default function StateProvider({reducer, initialState, children}) {

    return ( 
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

// shortcut
export const useStateValue = () => useContext(StateContext)

