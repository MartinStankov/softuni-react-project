import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext'; 
import styles from './Pricing.module.css';

export default function Pricing({ selectedPlan, setSelectedPlan }) {
    const { isAuthenticated } = useAuthContext();

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const handleUnsubscribe = () => {
        setSelectedPlan(null);
    };

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Pricing</h1>
                    <p className={styles.description}>
                        Traveler has 3 pricing options. The first one is free for every user, the second one costs $10 a month, and the third one costs $100 each year.
                    </p>
                </div>

                <div className={styles.pricingWrapper}>
                    <div className={styles.pricingCards}>
                        <div className={styles.card}>
                            <h2>Traveler Free Plan <br /> (For New Users)</h2>
                            <p className={styles.price}>Free<span></span></p>
                            <ul>
                                <li>Up To 2GB Free Space For <br /> Notes</li>
                                <li>Free plan</li>
                                <li>Limited Functionality</li>
                                <li>Access to Basic Features</li>
                                <li>Community Support Only</li>
                                <li>Ads Displayed in the App</li>
                            </ul>
                            {isAuthenticated ? (
                                selectedPlan === 'free' ? (
                                    <>
                                        <button className={styles.btn} disabled>You are a Free user!</button>
                                        <br />
                                        <button className={styles.btn} onClick={handleUnsubscribe}>Unsubscribe</button>
                                    </>
                                ) : (
                                    <button className={styles.btn} onClick={() => handlePlanSelection('free')}>Select Free Plan</button>
                                )
                            ) : (
                                <Link to="/login" className={styles.btn}>Sign In</Link>
                            )}
                        </div>

                        <div className={styles.card}>
                            <h2>Traveler Pro <br /> One Month Plan</h2>
                            <p className={styles.price}>$10 <span>/month</span></p>
                            <ul>
                                <li>Up To 50GB Free Space For <br /> Notes</li>
                                <li>Paid plan</li>
                                <li>Full Functionality</li>
                                <li>Access to All Features</li>
                                <li>Priority Customer Support</li>
                                <li>Ad-Free Experience</li>
                            </ul>
                            {isAuthenticated ? (
                                selectedPlan === 'pro' ? (
                                    <>
                                        <button className={styles.btn} disabled>You are a Pro user!</button>
                                        <br />
                                        <button className={styles.btn} onClick={handleUnsubscribe}>Unsubscribe</button>
                                    </>
                                ) : (
                                    <button className={styles.btn} onClick={() => handlePlanSelection('pro')}>Select Pro Plan</button>
                                )
                            ) : (
                                <Link to="/login" className={styles.btn}>Sign In</Link>
                            )}
                        </div>

                        <div className={styles.card}>
                            <h2>Traveler Pro Max<br /> One Year Plan</h2>
                            <p className={styles.price}>$100 <span>/year</span></p>
                            <ul>
                                <li>Up To 100GB Free Space For Notes</li>
                                <li>Paid plan</li>
                                <li>Full Functionality</li>
                                <li>Access to All Features</li>
                                <li>Priority Customer Support</li>
                                <li>Ad-Free Experience</li>
                            </ul>
                            {isAuthenticated ? (
                                selectedPlan === 'proMax' ? (
                                    <>
                                        <button className={styles.btn} disabled>You are a ProMax user!</button>
                                        <br />
                                        <button className={styles.btn} onClick={handleUnsubscribe}>Unsubscribe</button>
                                    </>
                                ) : (
                                    <button className={styles.btn} onClick={() => handlePlanSelection('proMax')}>Select ProMax Plan</button>
                                )
                            ) : (
                                <Link to="/login" className={styles.btn}>Sign In</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
