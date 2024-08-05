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
import CreateNote from './components/create-note/CreateNote'
import CreateRegularNote from './components/create-note/create-regular-note/CreateRegularNote'
import CreateTripNote from './components/create-note/create-trip-note/CreateTripNote'
import RegularNotesDashboard from './components/dashboard/regular-notes-dashboard/RegularNotesDashboard'
import TripNotesDashboard from './components/dashboard/trip-notes-dashboard/TripNotesDashboard'
import RegularNoteDetails from './components/regular-note-details/RegularNoteDetails'
import TripNoteDetails from './components/trip-note-details/TripNoteDetails'
import EditRegularNote from './components/edit-regular-note/EditRegularNote'
import EditTripNote from './components/edit-trip-note/EditTripNote'
import UserGuard from './components/common/UserGuard'
import GuestGuard from './components/common/GuestGuard'

function App() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <>
            <AuthContextProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />} />
                    <Route path='/pro' element={<TravelerPro selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />} />
                    <Route path='/features' element={<Features />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/pricing' element={<Pricing selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />} />
                    {/*Only available for guests*/}
                    <Route element={<GuestGuard />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    {/*Only available for authenticatied users*/}
                    <Route element={<UserGuard />}>
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/create' element={<CreateNote />} />
                        <Route path='/regularnote/create' element={<CreateRegularNote />} />
                        <Route path='/tripnote/create' element={<CreateTripNote />} />
                        <Route path='/:userId/dashboard' element={<Dashboard />} />
                        <Route path='/:userId/dashboard/regularnotes' element={<RegularNotesDashboard />} />
                        <Route path='/:userId/dashboard/tripnotes' element={<TripNotesDashboard />} />
                        <Route path='/:userId/dashboard/regularnotes/:noteId' element={<RegularNoteDetails />} />
                        <Route path='/:userId/dashboard/tripnotes/:noteId' element={<TripNoteDetails />} />
                        <Route path=':userId/dashboard/regularnotes/:noteId/edit' element={<EditRegularNote />} />
                        <Route path=':userId/dashboard/regularnotes/:noteId/delete' element={<RegularNoteDetails />} />
                        <Route path=':userId/dashboard/tripnotes/:noteId/edit' element={<EditTripNote />} />
                        <Route path=':userId/dashboard/tripnotes/:noteId/delete' element={<TripNoteDetails />} />
                    </Route>

                    <Route path='*' element={<ErrorPage />} />
                </Routes>
                <Footer />
            </AuthContextProvider>
        </>
    )
}

export default App
