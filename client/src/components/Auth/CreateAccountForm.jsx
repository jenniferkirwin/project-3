import React, { useCallback, useContext  } from "react";
import { withRouter, Redirect } from "react-router";
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
// import Select from '@material-ui/core/Select';
import app from "./../../config/fbConfig.js";
import { AuthContext } from "./auth.js";
import firebase from 'firebase/app'


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, role, school } = event.target.elements;
            console.log(email.value, password.value, role.value, school.value);
        try {
            //const sayHello = firebase.functions().httpsCallable('sayHello');
            await app.auth().createUserWithEmailAndPassword(email.value, password.value).then(cred => {
                console.log(cred.user.uid);
            });
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    //Redirect to login form if there is no user signed in
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
    } else {
        return (
            <div className="container">
                <form className="white" onSubmit={handleSignUp}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h5 className="grey-text text-darken-3">Create Account</h5>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id='firstName' />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id='lastName' />
                            </div>
                        </Grid>                
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="role">Role</label>
                                <input type="text" id='role' />
                            </div>
                            {/* <FormControl style={{minWidth: 150}}>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select id="role">
                                    <MenuItem value={'Admin'}>Admin</MenuItem>
                                    <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                    <MenuItem value={'Student'}>Student</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Grid>
                        <Grid item xs={6}>
                            <div className="input-field">
                                <label htmlFor="school">School</label>
                                <input type="text" id='school' />
                            </div>
                            {/* <FormControl style={{minWidth: 120}}>
                                <InputLabel id="demo-simple-select-label">School</InputLabel>
                                <Select id="school">
                                    <MenuItem value={'Admin'}>Hogwarts</MenuItem>
                                    <MenuItem value={'Teacher'}>UNH</MenuItem>
                                </Select>
                            </FormControl> */}
                        </Grid>
                        <Grid item xs={12}>
                            <div>
                                <button className="btn waves-effect waves-light lighten-1 z-depth-0">Create Account</button>
                            </div>
                        </Grid>
                    </Grid>
                </form>
          </div>
        )
    }
}


export default withRouter(SignUp);