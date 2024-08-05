import { useNavigate, useParams } from "react-router-dom";
import regularNotesApi from '../../api/regular-notes-api';
import { useState, useEffect } from "react";
import { useGetOneRegularNote } from "../../hooks/useRegularNotes";
import styles from './RegularNoteDetails.module.css';
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import ErrorPage from "../error-page/ErrorPage";

const initialValues = {
    subject: '',
    content: ''
}

export default function RegularNoteDetails() {
    const {userId: currUserId} = useAuthContext();
    const navigate = useNavigate();
    const { userId, noteId } = useParams();
    const [noteDetails, setNoteDetails] = useState('');

    const getRegularNote = async () => {
        try {
            const response = await regularNotesApi.getOneRegularNote(noteId);
            setNoteDetails(response);
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

    const deleteRegularNoteHandler = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete this "${noteDetails.subject}" regular note?`);
        
        if (isConfirmed) {
            try {
                await regularNotesApi.removeRegularNote(noteId);
                navigate(`/${userId}/dashboard/regularnotes`);
            } catch (err) {
                console.log(err.message);
            }
        }
    }
    console.log(noteDetails);
    console.log(currUserId);
    
    if(currUserId !== noteDetails._ownerId){
        return <ErrorPage />
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
                <Link to={`/${userId}/dashboard/regularnotes/${noteId}/edit`} className={styles.button}>Edit</Link>
                <a href="#" className={styles.button}onClick={deleteRegularNoteHandler}>Delete</a>
                </div>
            </form>
        </div>
    )
}