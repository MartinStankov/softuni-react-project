import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"

export default function GuestGuard() {
    const { isAuthenticated } = useAuthContext()

    return !isAuthenticated
    ? <Outlet />
    : <Navigate to="/home" />
}