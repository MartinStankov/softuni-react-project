import { useNavigate, useParams } from "react-router-dom";
import regularNotesApi from '../../api/regular-notes-api';
import { useState, useEffect } from "react";
import { useGetOneRegularNote } from "../../hooks/useRegularNotes";
import styles from './RegularNoteDetails.module.css';
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

const initialValues = {
    subject: '',
    content: ''
}

export default function RegularNoteDetails() {
    const navigate = useNavigate();
    const { userId, noteId } = useParams();
    const [noteDetails, setNoteDetails] = useState('');

    const getRegularNote = async () => {
        try {
            const response = await regularNotesApi.getOneRegularNote(noteId);
            setNoteDetails(response);
            // console.log(response); // This will log the actual data
        } catch (error) {
            console.error('Error fetching the note:', error);
        }
    };

    useEffect(() => {
        getRegularNote();
    }, [noteId]);

    // console.log(noteDetails._ownerId);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, noteDetails));
    // console.log(values);

    const deleteRegularNoteHandler = async () => {
        try{
            await regularNotesApi.removeRegularNote(noteId);

            navigate(`/${userId}/dashboard/regularnotes`);
        }catch(err){
            console.log(err.message);
        }
    }

    return (

        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Regular Note:</h1>
                <h1>{`Subject: ${values.subject}`}</h1>
                <input
                    type="content"
                    name='content'
                    placeholder="Content:"
                    value={`Content: ${values.content}`}
                    className={styles.input}
                    disabled
                />
                <div className={styles.buttonsWrapper}>
                {/* IF THERE'S BUG REMOVE USERID FROM THE LINK */}
                <Link to={`/${userId}/dashboard/regularnotes/${noteId}/edit`} className={styles.button}>Edit</Link>
                {/* <Link to={`/${userId}/dashboard/regularnotes/${noteId}/delete`} className={styles.button}>Delete</Link> */}
                <a href="#" className={styles.button}onClick={deleteRegularNoteHandler}>Delete</a>
                </div>
            </form>
        </div>
    )
}