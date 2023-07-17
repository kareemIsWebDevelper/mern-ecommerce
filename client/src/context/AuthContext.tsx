import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT": 
            return {
                user: null
            }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null || String
    })

    useEffect(() => {
       try {
            const user = JSON.parse(localStorage.getItem('user') || '')
            if (user) {
                dispatch({ type: 'LOGIN', payload: user })
            }
       }
       catch(error) {
            console.log(error);
       } 
    }, [])

    console.log('AuthContext state: ', state);

    return (
            <AuthContext.Provider value={{ ...state, dispatch }}>
                {children}
            </AuthContext.Provider>
        )
}