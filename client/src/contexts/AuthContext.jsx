import { createContext, useContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null,
    logout: () => null,
})

export function AuthContextProvider(props){
    // const [authState, setAuthState] = useState({})
    const [authState, setAuthState] = usePersistedState('auth', {})

    const changeAuthState = (state) => {
        setAuthState(state)
    }

    const logout = () => {
        setAuthState(null)
    }


    const contextData = {
        userId: authState?._id,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext(){
    const authData = useContext(AuthContext)

    return authData
}