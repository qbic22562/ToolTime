import React, {Component} from 'react';
import '../styles/login.css';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: ''
        };
        this.checkLogin = this.checkLogin.bind(this);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    redirectToHome = () => {
        this.props.history.push(`/home`)
    };

    checkLogin() {
        fetch('http://34.89.239.19:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }).then((response) => {
            alert("You are logged in");
            this.setState({redirect: true});
            if (this.state.redirect) {
                this.redirectToHome()
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
                                    <button type="button" className='btn float-right login_btn'
                                            onClick={this.checkLogin}>Login
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

export default withRouter(Login);