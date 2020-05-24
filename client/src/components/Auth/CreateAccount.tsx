import React, { Component } from 'react'

class CreateAccount extends Component {
  state = {
    email: '',
    password: '',
    role: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create Account</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">Role</label>
            <select type="text" id='role' onChange={this.handleChange}>
                <option value="volvo">Student</option>
                <option value="saab">Teacher</option>
                <option value="saab">Admin</option>
            </select>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateAccount