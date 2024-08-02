import { useContext } from "react"
import { login, register, logout } from '../api/auth-api'
import { useAuthContext } from "../contexts/AuthContext"

export const useLogin = () => {
    const {changeAuthState} =  useAuthContext()

    const loginHandler = async (email, password) => {
        const {password: _, ...authData} = await login(email, password)
        changeAuthState(authData)
        // console.log(result);
        // return authData
        return authData
    }

    return loginHandler
}

export const useRegister = () => {
    const {changeAuthState} =  useAuthContext()

    const registerHandler = async (email, password) => {
        // // const {password: _, ...authData} = await register(email, password)
        // const result = await register(email, password)

        // changeAuthState(result)

        // // return authData
        const {password: _, ...authData} = await register(email, password)

        changeAuthState(authData)  

        return authData
    }

    return registerHandler
}

export const useLogout = () => {
    const {logout: localLogout} = useAuthContext()

    const logoutHandler = async() => {
        localLogout()
        await logout()
    }
    return logoutHandler
}