import styles from './TripNoteDetails.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import tripNotesApi from '../../api/trip-notes-api';
import useForm from '../../hooks/useForm';


const initialValues = {
    subject: '',
    content: '',
    //CHANGE THEM!!!
};

export default function TripNoteDetails() {
    const navigate = useNavigate();
    const { userId, noteId } = useParams();
    const [noteDetails, setNoteDetails] = useState('');

    const getRegularNote = async () => {
        try {
            const response = await tripNotesApi.getOneTripNote(noteId);
            setNoteDetails(response);
            // console.log(response); // This will log the actual data
        } catch (error) {
            console.error('Error fetching the note:', error);
        }
    };

    useEffect(() => {
        getRegularNote();
    }, [noteId]);


    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, noteDetails));
    // console.log(values);

    const deleteTripNoteHandler = async () => {
        try {
            await tripNotesApi.removeTripNote(noteId);

            navigate(`/${userId}/dashboard/tripnotes`);
        } catch (err) {
            console.log(err.message);
        }
    }

    return (


        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Trip Note:</h1>
                <h1>{`Destination: ${values.destination}`}</h1>
                <input
                    type="content"
                    name='content'
                    placeholder="Content:"
                    value={`Thoughts: ${values.thoughts}`}
                    className={styles.input}
                    disabled
                />
                <div className={styles.buttonsWrapper}>
                    <Link to={`/${userId}/dashboard/tripnotes/${noteId}/edit`} className={styles.button}>Edit</Link>
                    {/* <Link to={`/${userId}/dashboard/tripnotes/${noteId}/delete`} className={styles.button}>Delete</Link> */}
                    <a href="#" className={styles.button} onClick={deleteTripNoteHandler}>Delete</a>

                </div>
            </form>
        </div>
    )
}