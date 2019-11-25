import React, {Component} from "react";
import { Link } from "react-router-dom";

import {auth} from '../../../services/data.service'
import Logo from '../../../logo.png';
import './navbar.css'
export class Navbar extends Component {
    state = {
        isLoggedIn: auth.isLoggedIn(),
    }
    onClick = () => {
        console.log('hi');
    }
    logoutUser = () => {
        auth.logout();
        this.setState({
            isLoggedIn: false,
        })
    }
    unSignedInAuth = (
        <div className="auths">
        <Link to="/admin/signin" id="login-link">Login</Link>
        <Link to="/admin/register" id="signup-link">Register</Link>
        </div>
    )
    signedInAuth = (
        <div className="auths">
        <Link to="/" id="login-link" onClick={this.logoutUser}>Log out</Link>
            <Link to="/admin/add/directory" id="signup-link">Create Business</Link>
        </div>
    )
    render() {
        return (
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo} alt='logo' onClick={() => window.location.href = "/"} />
                </div>
                {this.state.isLoggedIn ? this.signedInAuth : this.unSignedInAuth}
            </div>
        )
    }
}