import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {

    render() {
        return (
            <div className="container-fluid">
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
                    <div className="col-sm-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li ><Link to="/login" className="glyphicon glyphicon-user" style={{ color: 'pink' }}> Login</Link></li>
                            <li><Link to="/register" className="glyphicon glyphicon-cloud" style={{ color: 'pink' }}> Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center">
                    <img id="myImg" src={require('./sad.jpg')} alt="your image" height={400} width={400} />>
                </div>
                <div className="row" />
                <div className="row" />
                <div className="row" style={{ background: 'black', color: 'black' }}>
                    <p className="text-center" style={{ color: 'pink', fontSize: 30 }}>Sorry, invaild credentials. Please login again</p>
                </div>
            </div>
        );
    }
}
export default ErrorPage;
