import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
        password: Yup.string()
        .required('Password is required')
    }
);


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
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
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // We save the data in the localstorage
                    localStorage.setItem('credentials',values)
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

export default Loginformik;
