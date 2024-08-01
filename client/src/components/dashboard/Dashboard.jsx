import styles from './Dashboard.module.css';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <div>
                <p>Test Location</p>
                <p>Test Description</p>
                <p>Test Pros</p>
                <p>Test Cons</p>
            </div>
        </div>
    )
}