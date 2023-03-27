import { useFormik } from 'formik';
import React from 'react'
import  Validation from './Validation';
function Signup() {
    const {handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues : {
            email: '',
            password: '',
            password_confirmation: '',
            },
            onSubmit: values => {
            console.log(values);
            },
            validationSchema : Validation,
        })
    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit = {handleSubmit} >
                <label htmlFor = "email" > Email </label >
                <input 
                name = 'email' 
                value = {values.email} 
                onChange ={handleChange} 
                onBlur = {handleBlur}
                />
                {
                    errors.email && 
                    touched.email && 
                    <div className = 'err'> {errors.email} </div>
                }
                <br />
                <br />

                <label htmlFor = "password"> Password </label>
                <input 
                name = 'password' 
                value = {values.password} 
                onChange ={handleChange} 
                onBlur = {handleBlur} 
                />
                {
                    errors.password && 
                    touched.password &&
                    <div className = 'err'> {errors.password} </div>
                }
                <br />
                <br />

                <label htmlFor = "password_confirmation" > Confirmation </label>
                <input 
                name = 'password_confirmation' 
                value = {values.password_confirmation} 
                onChange={handleChange}
                onBlur = {handleBlur}
                />
                {
                    errors.password_confirmation && 
                    touched.password_confirmation &&
                    <div className = 'err'> {errors.password_confirmation} </div>
                }
                <br />
                <br />

                <button type="submit">Submit</button>
                <br /><br />
                
                <span>{JSON.stringify(values)}</span>
            </form>
        </div>
    )
}

export default Signup