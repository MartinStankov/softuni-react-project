import { useState } from "react";
import { Link } from "react-router-dom";

import styles from './Register.module.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('')
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit} className={styles.container}>
                    <h1>Sign Up</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Sign Up</button>
                    <p className={styles.hasAccount}>Already have an account? <Link to="/login" className={styles.loginButton}>Log In</Link></p>
                </form>
            </div>
        </>
    )
}