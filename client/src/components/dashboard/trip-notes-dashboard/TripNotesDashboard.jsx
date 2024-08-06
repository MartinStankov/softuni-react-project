import React, { useEffect } from 'react';
import styles from './TripNotesDashboard.module.css';
import { useGetAllTripNotes } from '../../../hooks/useTripNotes';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from '../../error-page/ErrorPage';

export default function TripNotesDashboard() {

    const [tripNotes, setTripNotes] = useGetAllTripNotes();
    const {userId: currUserId} = useAuthContext();
    const {userId} = useParams();

    if (currUserId !== userId) {
        return <ErrorPage/>;
    }   

    return (
        <div className={styles.fullContainer}>
            <div className={styles.container}>
                <h1>Your Trip Notes</h1>
                <div className={styles.notesGrid}>
                    {tripNotes.filter(note => note._ownerId === userId).map(note => (
                        <div key={note._id} className={styles.noteCard}>
                            <h2 className={styles.noteSubject}>{note.destination}</h2>
                            <p className={styles.noteText}>{note.thoughts}</p>
                            <Link to={`/${userId}/dashboard/tripnotes/${note._id}`} className={styles.detailsButton}>Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
