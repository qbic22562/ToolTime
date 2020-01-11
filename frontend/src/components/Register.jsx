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

  render() {
    return (
      <div className='container'>
        <div className='d-flex justify-content-center h-100'>
          <div className='card'>
            <div className='card-header'>
              <h3>Sign Up</h3>
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
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Login'
                    className='btn float-right login_btn'
                    onClick={this.handleClick}
                  />
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <div className='d-flex justify-content-center links'>
                Don't have an account?<a href='/register'>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;