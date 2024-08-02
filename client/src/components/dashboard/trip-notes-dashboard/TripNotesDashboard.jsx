import React, { useEffect } from 'react';
import styles from './TripNotesDashboard.module.css';
import { useGetAllTripNotes } from '../../../hooks/useTripNotes';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function TripNotesDashboard() {
    // Sample notes data
    // const notes = [
    //     { id: 1, subject: 'Note 1', text: 'This is the text for note 1' },
    //     { id: 2, subject: 'Note 2', text: 'This is the text for note 2' },
    //     { id: 3, subject: 'Note 3', text: 'This is the text for note 3' },
    //     { id: 4, subject: 'Note 4', text: 'This is the text for note 4' },
    //     { id: 5, subject: 'Note 5', text: 'This is the text for note 5' },
    //     { id: 6, subject: 'Note 6', text: 'This is the text for note 6' },
    //     { id: 11, subject: 'Note 1', text: 'This is the text for note 1' },
    //     { id: 21, subject: 'Note 2', text: 'This is the text for note 2' },
    //     { id: 31, subject: 'Note 3', text: 'This is the text for note 3' },
    //     { id: 41, subject: 'Note 4', text: 'This is the text for note 4' },
    //     { id: 51, subject: 'Note 5', text: 'This is the text for note 5' },
    //     { id: 61, subject: 'Note 6', text: 'This is the text for note 6' },
    //     // Add more notes as needed
    // ];

    const [tripNotes, setTripNotes] = useGetAllTripNotes();
    const {userId} = useAuthContext();

    return (
        <div className={styles.fullContainer}>
            <div className={styles.container}>
                <h1>Your Trip Notes</h1>
                <div className={styles.notesGrid}>
                    {tripNotes.filter(note => note._ownerId === userId).map(note => (
                        <div key={tripNotes.id} className={styles.noteCard}>
                            <h2 className={styles.noteSubject}>{note.destination}</h2>
                            <p className={styles.noteText}>{note.thoughts}</p>
                            {/*TODO: CHANGE TO LINK! */}
                            <button className={styles.detailsButton}>Details</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
