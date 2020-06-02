import React, { useCallback, useContext  } from "react";
import { withRouter, Redirect } from "react-router";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import app from "./../../config/fbConfig.js";
import { AuthContext } from "./auth.js";



const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

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
                        <FormControl style={{minWidth: 150}}>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select id="user-role">
                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                <MenuItem value={'Student'}>Student</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl style={{minWidth: 120}}>
                            <InputLabel id="demo-simple-select-label">School</InputLabel>
                            <Select id="user-role">
                                <MenuItem value={'Admin'}>Hogwarts</MenuItem>
                                <MenuItem value={'Teacher'}>UNH</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <button className="btn pink lighten-1 z-depth-0">Create Account</button>
                        </div>
                    </Grid>
                </Grid>
            </form>
      </div>
    )
}


export default withRouter(SignUp);