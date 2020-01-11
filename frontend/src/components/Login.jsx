import React, {Component} from 'react';
import '../styles/login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: ''
        };
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };


    checkLogin() {
        fetch('34.89.239.19:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }).then(function (response) {
          console.log(response.status)
                if (response.ok) {
                  //przechowaj token i przekieruj na strone glowna
                }
            }
        )
    }

    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-center h-100'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Sign In</h3>
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
                                    <button className='btn float-right login_btn' onClick={this.checkLogin}>Login
                                    </button>
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

export default Login;
