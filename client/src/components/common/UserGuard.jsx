import { Navigate, Outlet } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import ErrorPage, { } from '../../components/error-page/ErrorPage'

export default function UserGuard() {
    const { isAuthenticated } = useAuthContext()

    return isAuthenticated
        ? <Outlet />
        // : <Navigate to="/login" />
        : <ErrorPage />
}