import React, { Component } from 'react';
import axios from 'axios';
import createHistory from 'history/createBrowserHistory';
import Home from './Home';
import { Redirect } from 'react-router'
import Header from '../layout/Header';
import { hashHistory } from 'react-router';
import AdminComp from '../layout/AdminComp';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';

const history = createHistory();

// const ReCAPTCHA = require('react-recaptcha');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            hidden: true,
            user: [{
                username: " ",
                password: " ",
                usernameError: '',
                passwordError: '',
            }],
            captcha: false,
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.callBack = this.callBack.bind(this);
        this.verifyBack = this.verifyBack.bind(this);
    }

    onChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    callBack = () => {
        console.log("something inside re captcha");
    }

    verifyBack = (response) => {
        if (response) {
            console.log("verify back......... ");
            this.setState({
                captcha: true,
            });
        }
    }

    componentDidMount() {
        this.callBack();
    }

    validate = () => {
        let isError = false;
        const errors = {
            usernameError: "",
            passwordError: ""
        };

        if (this.state.username.length < 5) {
            isError = true;
            errors.usernameError = "Username needs to be atleast 5 characters long";
        }
        if (this.state.username === '') {
            isError = true;
            errors.usernameError = "Username Required ";
        }
        if (this.state.password === '') {
            isError = true;
            errors.passwordError = "Password Required ";
        }
        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    onSubmit = () => {
        this.verifyBack(this);
        if (this.state.captcha) {
            const err = this.validate();
            const { username, password } = this.state
            let userName = username;
            let passWord = password;
            fetch('http://localhost:5000/api/account/')
                .then(res => res.json())
                .then(data => {
                    for (let index in data) {
                        if (userName === data[index].email && passWord === data[index].password && data[index].role === "Admin") {
                            this.x = true;
                            this.props.history.push({
                                pathname: '/adminComp',
                                state: { title: data[index].username }
                            });
                            return data;
                        }

                        else if (userName === data[index].email && passWord === data[index].password) {
                            this.x = false;
                            this.props.history.push({
                                pathname: '/userHeader',
                                state: { title: data[index].username }
                            });
                            return data;
                        }
                        else {
                            this.props.history.push('/errorPage');
                        }
                    }
                });
        }
        else alert("Please verify that you're not a Robot");
    }

    // componentDidMount() {
    //     let _id = this.props.match.params._id;
    //     fetch('http://localhost:5000/api/account/').then((res) => {
    //         this.setState({
    //             user: res.data
    //         })
    //     })
    // }

    render() {
        const { username, password } = this.state;
        return (
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-2">
                        <button type="button" className="navbar-toggle collapsed"
                            data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false" ><span className="sr-only">Event</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand glyphicon glyphicon-th-list" to="#" style={{ color: 'pink' }}> Event</Link>
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/" className="glyphicon glyphicon-home" style={{ color: 'pink' }}> Home</Link><span className="sr-only">(current)</span></li>
                                <li ><Link to="/notification" className="glyphicon glyphicon-bell" style={{ color: 'pink' }}> Upcoming Events </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-offset-3 col-sm-6">
                    <div className="well">
                        <h3 className="text-center">Welcome User</h3>
                        <hr />
                        <div className="form-group" >
                            <label className="glyphicon glyphicon-user"> User Name</label>
                            <input name="username" className="form-control" onChange={this.onChanged}
                                value={username} type="email" placeholder="Enter valid e-mail Id" className="form-control" pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" required />
                            <span style={{ color: "red" }}>{this.state.usernameError}</span>
                        </div>

                        <div className="form-group" >
                            <label className="glyphicon glyphicon-asterisk"> Password</label>
                            <button className="col-sm-offset-9 btn btn-info glyphicon glyphicon-eye-close" onClick={() => this.toggleShow()}> </button>
                            <br />  <input name="password" onChange={this.onChanged} type={this.state.hidden ? "password" : "text"}
                                value={password} placeholder="Enter password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

                            <span style={{ color: "red" }}>{this.state.passwordError}</span>
                        </div>
                        <input type="checkbox" />Remember Me <br />
                        <button className="btn btn-primary" onClick={this.onSubmit} >Login</button>
                        <div className="row">
                            <ReCAPTCHA
                                sitekey="6Lf8zsgUAAAAAHV1_VcrNDHfWuYAXw1tUSLnexQg"
                                render="explicit"
                                onloadCallback={this.callBack}
                                verifyCallback={this.verifyBack}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

