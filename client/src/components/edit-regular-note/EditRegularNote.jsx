import useForm from '../../hooks/useForm';
import { useCreateTripNote } from "../../hooks/useTripNotes";
import { useNavigate, useParams } from "react-router-dom";
import styles from './EditRegularNote.module.css';
import { useState, useEffect, useMemo } from 'react';
import regularNotesApi from '../../api/regular-notes-api';
import { useGetOneRegularNote } from '../../hooks/useRegularNotes';
import ErrorPage from '../error-page/ErrorPage';
import { useAuthContext } from '../../contexts/AuthContext';


const initialValues = { subject: '', content: '' };

export default function EditRegularNote() {
    const {userId: currUserId} = useAuthContext();
    const navigate = useNavigate();
    const { userId, noteId } = useParams();
    
    const [error, setError] = useState('');
    const [note, setNote] = useState(initialValues);
    const [loading, setLoading] = useState(true);

    const {
        changeHandler,
        submitHandler,
        values,
        setValues,
    } = useForm(note, async (values) => {
        const isConfirmed = confirm('Are you sure you want to edit this note?');
        if(values.subject.trim() === ''){
            setError('If you want to edit a note you must provide a subject!');
            return;
        }
        
        if (isConfirmed) {
            await regularNotesApi.updateRegularNote(noteId, values);
            navigate(`/${userId}/dashboard/regularnotes/${noteId}`);
        }
    });

    useEffect(() => {
        const fetchNote = async () => {
            try {
                const fetchedNote = await regularNotesApi.getOneRegularNote(noteId);
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
    
    
    if (currUserId !== note._ownerId){
        <ErrorPage />
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Edit Regular Note</h1>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject:"
                    value={values.subject}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <input
                    type="text"
                    name="content"
                    placeholder="Content:"
                    value={values.content}
                    onChange={changeHandler}
                    className={styles.input}
                />
                {error && (
                    <p>
                        <span style={{ color: 'red' }}>{error}</span>
                    </p>
                )}
                <button type="submit" className={styles.button}>Edit</button>
            </form>
        </div>
    );
}