import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <>
            <div className={styles.pageContainer}>
                {/* Container for the Pricing header and description */}
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Pricing</h1>
                    <p className={styles.description}>
                        Traveler has 3 pricing options. The first one is free for every user, the second one costs $10 a month, and the third one costs $100 each year.
                    </p>
                </div>

                {/* Wrapper for the pricing plans */}
                <div className={styles.pricingWrapper}>
                    <div className={styles.pricingCards}>
                        <div className={styles.card}>
                            <h2>Traveler Free Plan <br /> (For New Users)</h2>
                            <p className={styles.price}>Free<span></span></p>
                            <ul>
                                <li>Up To 2GB Free Space For Notes</li>
                                <li>Free plan</li>
                                <li>Limited Functionality</li>
                                <li>Access to Basic Features</li>
                                <li>Community Support Only</li>
                                <li>Ads Displayed in the App</li>
                            </ul>
                            <Link to="/login" className={styles.btn}>Sign In</Link>
                        </div>

                        <div className={styles.card}>
                            <h2>Traveler Pro <br /> One Month Plan</h2>
                            <p className={styles.price}>$10 <span>/month</span></p>
                            <ul>
                                <li>Up To 50GB Free Space For Notes</li>
                                <li>Paid plan</li>
                                <li>Full Functionality</li>
                                <li>Access to All Features</li>
                                <li>Priority Customer Support</li>
                                <li>Ad-Free Experience</li>
                            </ul>
                            <Link to="/login" className={styles.btn}>Sign In</Link>
                        </div>

                        <div className={styles.card}>
                            <h2>Traveler Pro <br /> One Year Plan</h2>
                            <p className={styles.price}>$100 <span>/year</span></p>
                            <ul>
                                <li>Up To 50GB Free Space For Notes</li>
                                <li>Paid plan</li>
                                <li>Full Functionality</li>
                                <li>Access to All Features</li>
                                <li>Priority Customer Support</li>
                                <li>Ad-Free Experience</li>
                            </ul>
                            <Link to="/login" className={styles.btn}>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
