import React from 'react';
import styles from './RegularNotesDashboard.module.css';
import { useGetAllRegularNotes } from '../../../hooks/useRegularNotes';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function RegularNotesDashboard() {
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
    const [regularNotes, setRegularNotes] = useGetAllRegularNotes();
    const { userId } = useAuthContext();
    // useEffect(() => {
    //     const fetchNotes = async () => {
    //         try {
    //             const allNote = await useGetAllRegularNotes();
    //             const userNotes = allNote.filter(note => note._ownerId === userId);
    //             setRegularNotes(userNotes)
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     }
    //     fetchNotes();
    // }, [userId]);

    return (
        <div className={styles.fullContainer}>
            <div className={styles.container}>
                <h1>Your Regular Notes</h1>
                <div className={styles.notesGrid}>

                    {regularNotes.filter(note => note._ownerId === userId).map(note => (
                        <div key={note._id} className={styles.noteCard}>
                            <h2 className={styles.noteSubject}>{note.subject}</h2>
                            <p className={styles.noteText}>{note.content}</p>
                            {/* TODO: CHANGE BUTTON TO LINK */}
                            <Link to={`/${userId}/dashboard/regularnotes/${note._id}`} className={styles.detailsButton}>Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
