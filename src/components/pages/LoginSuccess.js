import React, { Component } from 'react';
import axios from 'axios';
import eventdetails from '../Event/EventDetails'
import Pagination from '../Event/Pagination';

class LoginSuccess extends Component {

    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <img id="myImg" src={require('./loginSuccess.png')} alt="your image" height={300} width={300} />>
                </div>
                <div className="row" />
                <div className="row" />
                <div className="row" style={{ background: 'black', color: 'black' }}>
                    <p className="text-center" style={{ color: 'pink', fontSize: 30 }}>Welcome to event Management</p>
                </div>
            </div>
        );
    }
}
export default LoginSuccess;