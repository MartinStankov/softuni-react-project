import { useNavigate } from 'react-router-dom';
import styles from './CreateRegularNote.module.css';
import { useCreateRegularNote } from '../../../hooks/useRegularNotes';
import useForm from '../../../hooks/useForm';
import { useAuthContext } from '../../../contexts/AuthContext';

const initialValues = { subject: '', content: '' };

export default function CreateRegularNote() {
    const navigate = useNavigate();
    const regularNoteCreate = useCreateRegularNote();
    const {userId} = useAuthContext()
    const createHandler = async (values) => {
        try {
            const {_id: noteId} = await regularNoteCreate(values)
            //you can change the url for better navigation by adding the noteId
            //ORIGINAL VARIANT
            // navigate(`/dashboard/regularnotes`)
            // navigate(`${userId}/dashboard/regularnotes}`)
            navigate(`/${userId}/dashboard/regularnotes`)
        }catch (err){
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
                <h1>Create Regular Note</h1>
                <input
                    type="subject"
                    name='subject'
                    placeholder="Subject:"
                    value={values.subject}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <input
                    type="content"
                    name='content'
                    placeholder="Content:"
                    value={values.content}
                    onChange={changeHandler}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Create</button>
            </form>
        </div>
    )
}