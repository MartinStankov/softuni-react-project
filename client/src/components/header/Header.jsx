import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const { userId, isAuthenticated } = useAuthContext();
    const location = useLocation();

    const checkActiveLink = (path) => location.pathname === path ? styles.selected : '';

    return (
        <nav className={styles.navigation_bar}>
            <div className={styles.logo}>
                <Link to='/'><h1>Traveler</h1></Link>
            </div>
            <div className={styles.navigation_buttons}>
                {isAuthenticated && (
                    <>
                        <Link to={`/${userId}/dashboard`} className={checkActiveLink(`/${userId}/dashboard`)}><span style={{ fontWeight: 'bold' }}>Your Notes</span></Link>
                        <Link to='/create' className={checkActiveLink('/create')}><span style={{ fontWeight: 'bold' }}>+</span> Add Note</Link>
                    </>
                )}
                <Link to='/pro' className={checkActiveLink('/pro')}>Traveler Pro</Link>
                <Link to='/features' className={checkActiveLink('/features')}>Features</Link>
                <Link to='/info' className={checkActiveLink('/info')}>How It Works</Link>
                <Link to='/pricing' className={checkActiveLink('/pricing')}>Pricing</Link>
                {isAuthenticated ?
                    (
                        <Link to='/logout'>Log Out</Link>
                    )
                    :
                    (
                        <>
                            <Link to='/login' className={checkActiveLink('/login')}>Sign In</Link>
                            <Link to='/register' className={`${styles.signUpButton} ${checkActiveLink('/register')}`}>Sign Up</Link>
                        </>
                    )
                }
            </div>
        </nav>
    )
}
