import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from './Register.module.css';
import { useRegister } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";

const initialValues = { email: '', password: '', 'confirm-password': '' }

export default function Register() {
    const [error, setError] = useState('')
    const register = useRegister()
    const navigate = useNavigate()

    const registerHandler = async ({ ...values }) => {
        if (values.password !== values['confirm-password']) {
            setError('Passwords do not match')
            return
        }

        try {
            await register(values.email, values.password)
            navigate('/')
        } catch (err) {
            setError(err.message)
            console.log(error);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler)

    return (
        <>
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandler} className={styles.container}>
                    <h1>Sign Up</h1>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        value={values.email}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={values.password}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                    <input
                        type="password"
                        name='confirm-password'
                        placeholder="Confirm Password"
                        value={values['confirm-password']}
                        onChange={changeHandler}
                        className={styles.input}
                    />
                    {error && (
                        <p>
                            <span style={{ color: 'red' }}>{error}</span>
                        </p>
                    )}
                    <button type="submit" className={styles.button}>Sign Up</button>
                    <p className={styles.hasAccount}>Already have an account? <Link to="/login" className={styles.loginButton}>Log In</Link></p>
                </form>
            </div>
        </>
    )
}