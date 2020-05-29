import * as React from "react";
import { TextField, Button } from '@material-ui/core';
import { Form, Formik } from "formik";

interface Values {
    email: string;
    password: string
}

interface Props {
    onSubmit: (values: Values) => void;
}

const LoginForm: React.FC <Props> = ({onSubmit}) => {
    return (
        <Formik initialValues={{ email: "", password: "" }} onSubmit={values => {
            onSubmit(values);
        }}>
            {({values, handleChange, handleBlur}) => (
                <Form>
                    <div>
                        <TextField 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <TextField 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            value={values.password} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                        />
                    </div>
                    <Button type="submit">submit</Button>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;