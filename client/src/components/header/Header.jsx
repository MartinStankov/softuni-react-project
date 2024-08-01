import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className={styles.navigation_bar}>
            <div className={styles.logo}>
                <Link to='/'><h1>Traveler</h1></Link>
            </div>
            <div className={styles.navigation_buttons}>
                <Link to='/:userId/dashboard'><span style={{fontWeight: 'bold'}}>Your Notes</span></Link>
                <Link to='/dashboard'><span style={{fontWeight: 'bold'}}>Your Notes</span></Link>
                <Link to='/:userId/create'><span style={{ fontWeight: 'bold'}}>+</span> Add Note</Link>
                <Link to='/pro'>Traveler Pro</Link>
                <Link to='/features'>Features</Link>
                <Link to='/info'>How It Works</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/login'>Sign In</Link>
                <Link to='/register' className={styles.signUpButton}>Sign Up</Link>
            </div>
        </nav>
    )
}