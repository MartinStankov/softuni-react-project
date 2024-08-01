import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './TravelerPro.module.css';

export default function TravelerPro() {
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


    //EXAMPLE USEEFFECT FETCHING NEEDED DATA FROM SERVER
    // const [trips, setTrips] = useState([]);
    // useEffect(() => {
    //     const URL = 'http://localhost:3030/jsonstore/trips?where=tripOwnerId="userId4"';
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(URL);
    //             const data = await response.json();

    //             // console.log(Object.values(data).filter(trip => trip.tripOwnerId === 'userId4').map(trip => trip.to));
    //             const returnData = (Object.values(data).filter(trip => trip.tripOwnerId === 'userId4').map(trip => ({
    //                 to: trip.to,
    //                 tripOwnerId: trip.tripOwnerId,
    //                 cons: trip.cons
    //             })));
    //             setTrips(returnData);
    //             // return Object.values(data).filter(trip => trip.tripOwnerId === 'userId4');
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <>
            {/* EXAMPLE USEEFFECT FETCHING NEEDED DATA FROM SERVER */}
            {/* <h1>Trip List</h1>
            <ul>
                {trips.map((trip, index) => (
                    <li key={index}>
                        <h3>Destination: {trip.to}</h3>
                        <p>Owner: {trip.tripOwnerId}</p>
                        <p>Cons: {trip.cons}</p>
                    </li>
                ))}
            </ul> */}
            <div className={styles.pageContainer}>
                <div className={styles.textContainer}>
                    <h1>Traveler Pro</h1>
                    <p>Get the most out of your notes with Traveler Pro</p>
                    <p>Enjoy Up to 50GB of Free Storage for Your Notes
                        Unlock the full potential of your note-taking experience with our paid plan, offering complete access to all features, priority customer support, and an ad-free environment. Upgrade today to maximize your productivity and never worry about storage limits again!</p>
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
                            <Link to="/login" className={styles.btn}>Sign In</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
