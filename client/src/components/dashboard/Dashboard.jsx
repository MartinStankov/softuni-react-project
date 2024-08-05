import { useAuthContext } from '../../contexts/AuthContext';
import ErrorPage from '../error-page/ErrorPage';
import styles from './Dashboard.module.css';
import { Link, useParams } from 'react-router-dom';

export default function Dashboard() {
    const { userId: currUserId } = useAuthContext();
    const {userId} = useParams()

    if ( currUserId !== userId) {
        return <ErrorPage />;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.headerCreateNote}>Your Notes</h1>
            <div className={styles.notesWrapper}>
                <Link to={`/${userId}/dashboard/regularnotes`} className={styles.createNote}>Your Regular Notes</Link>
                <Link to={`/${userId}/dashboard/tripnotes`} className={styles.createNote}>Your Trip Notes</Link>
            </div>
        </div>
    )
}