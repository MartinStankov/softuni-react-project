import { Link } from 'react-router-dom';
import styles from './Features.module.css';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Features() {
    const {isAuthenticated} = useAuthContext();
    return (
        <div className={styles.featuresWrapper}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>
                        Your travel information at your fingertips, right when you need it
                    </h1>
                    <p>
                        Whether it's a business trip, a family vacation or a quick weekend away,
                        Traveler provides you with a chance to organize your information in seconds.
                    </p>
                    {!isAuthenticated && <p>Simply <Link to='/register' className={styles.signUpButton}>Sign Up</Link> and start adding your trips!</p>}
                    {!isAuthenticated && <Link to='/register' className={styles.signUpButtonBottom}>Sign Up! It's Free!</Link>}
                    {/* might change to dashboard later */}
                    {isAuthenticated && <Link to='/' className={styles.homePageRedirect}>Click here to get to the Home Page</Link>}
                </div>
            </div>
        </div>
    );
}
