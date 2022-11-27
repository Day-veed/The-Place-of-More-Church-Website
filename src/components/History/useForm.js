import { useState, useEffect } from "react";

const useFormm = validate => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        wnum: '',
        radio: ''
    })
    const [errorss, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value 
        })
    
        //console.log(values)
    }

    /*const onChange = (e) => {
        const {value, name, type, radio } = e.target;

        setValues((state)=> ({
            ...state,
            [name]: type === 'radio' ? radio : value
        }))
    }*/


    const handleSubmitt = e => {
        //e.preventDefault();

        setErrors(validate(values));
    }
    return {handleChange, values, handleSubmitt, errorss};
}

export default useFormm;