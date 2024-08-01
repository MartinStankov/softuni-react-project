import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.container}>
                <h1>Sign In</h1>
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
                <button type="submit" className={styles.button}>Login</button>
                <p className={styles.noAccount}>Don't have an account? <Link to="/register" className={styles.signUpButton}>Sign Up</Link></p>
            </form>
        </div>
    );
};
