import { useEffect, useState } from 'react'

function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues)

    // useEffect(() => {
    //     setValues(initialValues)
    // }, [initialValues])

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    //Old behaviour
    // const submitHandler = (e) => {
    //     e.preventDefault()

    //     submitCallback(values)

    //     setValues(initialValues)
    // }
    const submitHandler = async (e) => {
        e.preventDefault()

        const success = await submitCallback(values);

        if (success) {
            setValues(initialValues);
        }
    }

    return {
        values,
        changeHandler,
        submitHandler,
        setValues,
    }
}

export default useForm