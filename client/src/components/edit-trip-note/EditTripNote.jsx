import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditTripNote.module.css';
import { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import tripNotesApi from '../../api/trip-notes-api';

const initialValues = { destination: '', thoughts: '' };

export default function EditTripNote() {
    const navigate = useNavigate();
    const { userId, noteId } = useParams();

    const [note, setNote] = useState(initialValues);
    const [loading, setLoading] = useState(true);
    
    const {
        changeHandler,
        submitHandler,
        values,
        setValues,
    } = useForm(note, async (values) => {
        const isConfirmed = confirm('Are you sure you want to edit this note?');
        if (isConfirmed) {
            await tripNotesApi.updateTripNote(noteId, values);
            navigate(`/${userId}/dashboard/tripnotes/${noteId}`);
        }
    });

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const fetchedNote = await tripNotesApi.getOneTripNote(noteId);
                setNote(fetchedNote);
                setValues((prevValues) => ({
                    ...prevValues,
                    ...fetchedNote
                }));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the note:', error);
                setLoading(false);
            }
        };
        fetchNote();
    }, [noteId, setValues]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Edit Trip Note</h1>
                <input
                    type="destination"
                    name="destination"
                    placeholder="Destination:"
                    value={values.destination}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <input
                    type="thoughts"
                    name="thoughts"
                    placeholder="Thoughts:"
                    value={values.thoughts}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Edit</button>
            </form>
        </div>
    );
}