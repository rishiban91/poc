import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

class UserHeader extends Component {

    constructor(props) {
        super(props);
    }

    showAdmin = () => {
        return (
            <div>
                <ul className="nav navbar-nav">
                    <li style={{ color: 'pink', margin: 15, fontSize: 20 }}> {this.props.location.state.title} </li>
                    <li className="active"><Link to={{
                        pathname: '/userHome',
                        state: { title: this.props.location.state.title }
                    }}
                        className="glyphicon glyphicon-home" style={{ color: 'pink' }}> Home</Link><span className="sr-only">(current)</span></li>
                    <li ><Link to={{
                        pathname: '/userNotification',
                        state: { title: this.props.location.state.title }
                    }}
                        className="glyphicon glyphicon-bell" style={{ color: 'pink' }}> Upcoming Events </Link></li>
                </ul>
            </div>
        );
    }

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
                        {this.showAdmin()}
                    </div>
                    <div className="col-sm-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li ><Link to="/logout" className="glyphicon glyphicon-log-out" style={{ color: 'pink' }}> Logout</Link></li>
                            <li />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserHeader;