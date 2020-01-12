import React, { Component } from 'react';
import '../styles/login.css';
import {withRouter} from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username:'',
      email: '',
      password: '',
      redirect:false
    };
    this.register = this.register.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  redirectToLogin = () => {
    this.props.history.push(`/`)
  };

  register(){
    fetch('http://34.89.239.19:8000/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:this.state.username,email:this.state.email, password:this.state.password})
    }).then((response) => {
      alert("You are registered");
      this.setState({redirect: true});
      if (this.state.redirect) {
        this.redirectToLogin()
      }
    }).catch(function (error) {
      console.log(error);
      if (error.response) {
        console.log("Upload error. HTTP error/status code=", error.response.status);
      } else {
        console.log("Upload error. HTTP error/status code=", error.message);
      }
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
                      onChange={event => this.handleUsernameChange(event)}
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
                <div className='form-group'>
                  <button
                      type="button"
                    className='btn float-right login_btn'
                    onClick={this.register}
                    value='Register'
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

export default withRouter(Register);
