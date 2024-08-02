import { useState } from 'react'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import TravelerPro from './components/traveler-pro/TravelerPro'
import Features from './components/features/Features'
import Info from './components/info/Info'
import Pricing from './components/pricing/Pricing'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Dashboard from './components/dashboard/Dashboard'
import { AuthContextProvider } from './contexts/AuthContext'
import Logout from './components/logout/Logout'
import ErrorPage from './components/error-page/ErrorPage'

function App() {

    return (
        <>
            <AuthContextProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pro' element={<TravelerPro />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/pricing' element={<Pricing />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                    {/*TODO: change the path to correct userId rendering the correct component Dashboard*/}
                    <Route path='/:userId/create' element={<Home />} />
                    <Route path='/:userId/dashboard' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
                <Footer />
            </AuthContextProvider>
        </>
    )
}

export default App
