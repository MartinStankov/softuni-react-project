import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext'; 
import styles from './TravelerPro.module.css';

export default function TravelerPro({ selectedPlan, setSelectedPlan }) {
    const { isAuthenticated } = useAuthContext();
    const [price, setPrice] = useState(10);
    const [pricePeriod, setPricePeriod] = useState('/ month');
    const [discountMessage, setDiscountMessage] = useState('');

    const monthlyBtnOnClickHandler = () => {
        setPrice(10);
        setPricePeriod('/ month');
        setDiscountMessage('');
    };

    const yearlyBtnOnClickHandler = () => {
        setPrice(80);
        setPricePeriod('/ year');
        setDiscountMessage('33% off');
    };

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const handleUnsubscribe = () => {
        setSelectedPlan(null);
    };

    return (
        <div className={styles.pageContainer}>
            <div className={styles.textContainer}>
                <h1>Traveler Pro</h1>
                <p>Get the most out of your notes with Traveler Pro</p>
                <p>Enjoy Up to 50GB of Free Storage for Your Notes. Unlock the full potential of your note-taking experience with our paid plan, offering complete access to all features, priority customer support, and an ad-free environment. Upgrade today to maximize your productivity and never worry about storage limits again!</p>
            </div>

            <section className={styles.pricing}>
                <div className={styles.pricingToggle}>
                    <button className={styles.toggleBtn} onClick={monthlyBtnOnClickHandler}>Monthly</button>
                    <button className={styles.toggleBtn} onClick={yearlyBtnOnClickHandler}>Yearly</button>
                </div>
                <div className={styles.pricingCards}>
                    <div className={styles.card}>
                        <h2>Traveler Pro</h2>
                        <div className={styles.priceContainer}>
                            <p className={styles.price}>${price} <span>{pricePeriod}</span></p>
                            {discountMessage && <p className={styles.discountMessage}>{discountMessage}</p>}
                        </div>
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
    );
}
