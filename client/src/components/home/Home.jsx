import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext'; // Adjust the path as needed
import styles from './Home.module.css';

export default function Home({ selectedPlan, setSelectedPlan }) {
    const { isAuthenticated } = useAuthContext(); // Get authentication status
    const [price, setPrice] = useState(10);
    const [pricePeriod, setPricePeriod] = useState('/ month');
    const [discountMessage, setDiscountMessage] = useState('');

    const monthlyBtnOnClickHandler = () => {
        setPrice(10);
        setPricePeriod('/ month');
        setDiscountMessage('');
    };

    const yearlyBtnOnClickHandler = () => {
        setPrice(100);
        setPricePeriod('/ year');
        setDiscountMessage('17% off');
    };

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const handleUnsubscribe = () => {
        setSelectedPlan(null);
    };

    return (
        <div className={styles.pageContainer}>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heading}>Traveler</h1>
                    <p>The application for writing down your trips!</p>
                </section>
                <div className={styles.pricingWrapper}>
                    <section className={styles.pricing}>
                        <div className={styles.pricingCards}>
                            <div className={styles.card}>
                                <h2>Traveler Free</h2>
                                <p className={styles.price}>Free<span></span></p>
                                <ul>
                                    <li>Up To 2GB Free Space For Notes</li>
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
                        </div>
                    </section>
                    <section className={styles.pricing}>
                        <div className={styles.pricingToggle}>
                            <button className={styles.toggleBtn} onClick={monthlyBtnOnClickHandler}>Monthly</button>
                            <button className={styles.toggleBtn} onClick={yearlyBtnOnClickHandler}>Yearly</button>
                        </div>
                        <div className={styles.pricingCards}>
                            <div className={styles.card}>
                                <h2>Traveler Pro</h2>
                                <p className={styles.price}>${price} <span>{pricePeriod}</span></p>
                                {discountMessage && <p className={styles.discountMessage}>{discountMessage}</p>}
                                <ul>
                                    <li>Up To 50GB Free Space For Notes</li>
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
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
