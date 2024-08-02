import { useAuthContext } from '../../contexts/AuthContext';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const {userId} = useAuthContext();

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