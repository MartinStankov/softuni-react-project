import { Link } from 'react-router-dom';

import styles from './Info.module.css';

export default function Info() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h1>Traveler</h1>
                    <p>The site Traveler is really easy to use!</p>
                    <p>It lets you create notes about your trips.</p>
                    <p>The site could also be used for daily notes as well. It's whole purpose is to be like a notebook that you can have in yourself in any time!</p>
                    <Link to={'/'} className={styles.redirection}>Click here to get to the Home Page</Link>
                </div>
            </div>
        </>
    )
}