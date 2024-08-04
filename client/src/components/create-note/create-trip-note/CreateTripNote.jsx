import useForm from "../../../hooks/useForm";
import { useCreateTripNote } from "../../../hooks/useTripNotes";
import { useNavigate } from "react-router-dom";
import styles from './CreateTripNote.module.css';
import { useAuthContext } from "../../../contexts/AuthContext";
import { useState } from "react";

const initialValues = { destination: '', thoughts: '' };

export default function CreateTripNote() {
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const tripNoteCreate = useCreateTripNote();
    const {userId} = useAuthContext()

    const createHandler = async (values) => {
        if (values.destination.trim() === '') {
            setError('To create a trip note you need to provide a destination!');
            return;
        }

        try {
            const { _id: noteId } = await tripNoteCreate(values)
            //you can change the url for better navigation by adding the noteId
            navigate(`/${userId}/dashboard/tripnotes`)
        } catch (err) {
            console.log(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={submitHandler} className={styles.container}>
                <h1>Create Trip Note</h1>
                <input
                    type="destination"
                    name='destination'
                    placeholder="Destination:"
                    value={values.subject}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <input
                    type="thoughts"
                    name='thoughts'
                    placeholder="Thoughts:"
                    value={values.content}
                    onChange={changeHandler}
                    className={styles.input}
                />
                {error && (
                    <p>
                        <span style={{ color: 'red' }}>{error}</span>
                    </p>
                )}
                <button type="submit" className={styles.button}>Create</button>
            </form>
        </div>
    )
}