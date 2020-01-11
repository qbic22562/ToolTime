import React, { Component } from 'react';
import '../styles/login.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  register(){
    fetch('http://34.89.239.19:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:"username",email:this.state.email, password:this.state.password})
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='d-flex justify-content-center h-100'>
          <div className='card'>
            <div className='card-header'>
              <h3>Sign up</h3>
            </div>
            <div className='card-body'>
              <form>
                <div className='input-group form-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fas fa-user'></i>
                    </span>
                  </div>
                  <input
                      type='text'
                      className='form-control'
                      placeholder='username'
                      onChange={event => this.handleEmailChange(event)}
                  />
                </div>
                <div className='input-group form-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fas fa-user'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='email'
                    onChange={event => this.handleEmailChange(event)}
                  />
                </div>
                <div className='input-group form-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fas fa-key'></i>
                    </span>
                  </div>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='password'
                    onChange={event => this.handlePasswordChange(event)}
                  />
                </div>
                {console.log(this.state.email)}
                {console.log(this.state.password)}
                <div className='form-group'>
                  <button
                    className='btn float-right login_btn'
                    onClick={this.register}
                    value='Login'
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
