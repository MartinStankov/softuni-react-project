import { Link, useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import { useLogin } from '../../hooks/useAuth';
import useForm from '../../hooks/useForm';

const initialValues = { email: '', password: '' };

export default function Login() {
    //TODO: add error messages and proper validation

    const login = useLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, loginHandler);

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Sign In</h1>
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
                <button type="submit" className={styles.button}>Login</button>
                <p className={styles.noAccount}>Don't have an account? <Link to="/register" className={styles.signUpButton}>Sign Up</Link></p>
            </form>
        </div>
    );
};
