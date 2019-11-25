import React, {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import InputField from '../../../../common/form/InputField';
import Logo from '../../../../../logo.png';
import { auth } from '../../../../../services/data.service.js';

import './signIn.css';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        disabled: false,
        errors: {},
    }


    handleSubmit = (e) => {
    e.preventDefault();
    if(auth.login(this.state.email, this.state.password)) {
        // login was successful
        this.props.setAuth(true)
    } else {
        // login was not successful
        alert('Password and Email does not match')
    }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {

        const { email, password, errors, disabled } = this.state;
        return (
            <div className="container center">
                <div className="top-container">
                    <img src={Logo} alt='logo' />
                    <p className="bold">Welcome Back</p>
                    <p className="login-text">Sign In to keep using Business Directory</p>
                </div>
                <form onSubmit={this.handleSubmit} method="POST" className="logIn">
                    <div className="form-container">
                        <InputField 
                            type="email"
                            value={email}
                            id="email-input"
                            onChange={this.onChange}
                            name="email"
                            labelName="Email"
                            className="form-input"
                            required
                        />
                        <InputField 
                            type="password"
                            value={password}
                            id="password-input"
                            onChange={this.onChange}
                            name="password"
                            labelName="Password"
                            className="form-input"
                            required
                        />
                        <button className="btn" id="submit-btn" type="submit" value="Sign In" disabled={disabled}>Sign In </button>
                        <p>
                            Don't Have an Account? {"  "}
                            <Link to="/admin/register">Register Now</Link>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}