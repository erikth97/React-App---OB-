import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../services/axiosCRUDService';

const Axioscrudexample = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    );
    
    const authUser = (values) => {
            login(values.email, values.password)
                .then((response) => {
                    if(response.data.token){
                        alert(JSON.stringify(response.data.token))
                        sessionStorage.setItem('token', response.data.token)
                    } else {
                        sessionStorage.removeItem('token')
                        throw new Error('Login failure')
                    }
                })
                .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
                })
                .finally(() => console.log('Login donde'))
        } 
    
        return (
            <div>
            <h4>Login Fornik</h4>
            <Formik
                // Initial values that the form will take
                initialValues={ initialCredentials }   
                // Yup Validation Schema
                validationSchema= { loginSchema } 
                // onsubmit Event
                onSubmit={async (values) => {
                    authUser(values)
                }}
            >
            {/* We obtain props from fornik */}

            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />

                    {/* Email Errors */}
                    {
                        errors.email && touched.email &&
                        (
                          <ErrorMessage name="email" component='div'></ErrorMessage>
                        )
                    }

                    {/* Password Errors */}
                    {
                        errors.password && touched.password &&
                        (
                          <ErrorMessage name="password" component='div'></ErrorMessage>
                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type='password'
                    />
                    <button type="submit">Login</button>
                    {isSubmitting ? (<p>Login your credentials...</p>): null}
               </Form>
            )}

            </Formik>

        </div>
        );
}

export default Axioscrudexample;
