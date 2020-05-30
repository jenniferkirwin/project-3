import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
        <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h5 className="grey-text text-darken-3">Sign Up</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id='firstName' onChange={this.handleChange} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id='lastName' onChange={this.handleChange} />
                        </div>
                    </Grid>                
                    <Grid item xs={6}>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange} />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl style={{minWidth: 150}}>
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
                            <Select id="user-role" onChange={this.handleChange}>
                                <MenuItem value={'Admin'}>Admin</MenuItem>
                                <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                <MenuItem value={'Student'}>Student</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl style={{minWidth: 120}}>
                            <InputLabel id="demo-simple-select-label">School</InputLabel>
                            <Select id="user-role" onChange={this.handleChange}>
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
}

export default SignUp