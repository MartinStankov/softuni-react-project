import { Link } from "react-router-dom";
import styles from './CreateNote.module.css';

export default function CreateNote() {
    return (
        <div className={styles.container}>
            <h1 className={styles.headerCreateNote}>Create Note</h1>
            <div className={styles.notesWrapper}>
                <Link to='/regularnote/create' className={styles.createNote}>Create Regular Note</Link>
                <Link to='/tripnote/create' className={styles.createNote}>Create Trip Note</Link>
            </div>
        </div>
    )
}