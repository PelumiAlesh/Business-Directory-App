import React, {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

import InputField from '../../../../common/form/InputField';
import Logo from '../../../../../logo.png';
import { auth } from '../../../../../services/data.service.js';


export class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        disabled: false,
        errors: {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('hiii')
        auth.register(this.state)
            // register was successful
        this.props.setAuth(true)
        window.location.href = "/admin/signin";
        }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        const { email, password,firstName, lastName } = this.state;
        return (
            <div className="container center">
                <div className="top-container">
                    <img src={Logo} alt='logo' />
                    <p className="bold">Create Account</p>
                    <p className="login-text">Create an account to use Business Directory</p>
                </div>
                <form onSubmit={this.handleSubmit} className="logIn">
                <div className="form-container">
                    <InputField 
                        type="text"
                        value={firstName}
                        id="fn-input"
                        onChange={this.onChange}
                        name="firstName"
                        labelName="First Name"
                        className="form-input"
                        required
                    />    
                    <InputField 
                        type="text"
                        value={lastName}
                        id="ln-input"
                        onChange={this.onChange}
                        name="lastName"
                        labelName="Last Name"
                        className="form-input"
                        required
                    />
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
                    <button className="btn" id="submit-btn" type="submit" value="Sign Up">Sign Up </button>
                    <p>
                        Already Have an Account? {"  "}
                        <Link to="/admin/signin">Log in Now</Link>
                    </p>
                </div>
                </form>

            </div>
        )
    }
}