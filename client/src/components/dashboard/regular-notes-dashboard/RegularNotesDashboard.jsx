import React from 'react';
import styles from './RegularNotesDashboard.module.css';
import { useGetAllRegularNotes } from '../../../hooks/useRegularNotes';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Link, useParams } from 'react-router-dom';
import ErrorPage from '../../error-page/ErrorPage';

export default function RegularNotesDashboard() {
    const [regularNotes, setRegularNotes] = useGetAllRegularNotes();
    const { userId: currUserId } = useAuthContext();
    const {userId} = useParams();

    if ( currUserId !== userId) {
        return <ErrorPage />;
    }

    return (
        <div className={styles.fullContainer}>
            <div className={styles.container}>
                <h1>Your Regular Notes</h1>
                <div className={styles.notesGrid}>

                    {regularNotes.filter(note => note._ownerId === userId).map(note => (
                        <div key={note._id} className={styles.noteCard}>
                            <h2 className={styles.noteSubject}>{note.subject}</h2>
                            <p className={styles.noteText}>{note.content}</p>
                            <Link to={`/${userId}/dashboard/regularnotes/${note._id}`} className={styles.detailsButton}>Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
