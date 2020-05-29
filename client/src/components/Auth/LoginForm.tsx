import * as React from "react";
import { TextField, Button, Card, CardContent } from '@material-ui/core';
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
        <Card style={{ backgroundColor: "#cfe3e3" }}> 
            <CardContent>
                <h1>Log In</h1>
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
                            <br/>
                            <Button type="submit" variant="contained" color="primary">Log In</Button>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
        
    )
}

export default LoginForm;

