import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            event: [], activePage: 2, pageOfItems: 3
        }
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
                <div>
                    <h1 className="text-center" style={{ color: 'pink' }}>Welcome to Events</h1> <hr />
                    <div className="row" className="pagination justify-content-center">
                        {this.state.event.map((j, i) => <div className="col-md-4">
                            <div className="thumbnail" width="50" height="50">
                                <img src={j.image} alt="not found" width="550" height="300" />
                                <b>{j.eventname}</b><br />
                                {j.start} &nbsp;&nbsp;&nbsp;
                        {j.end} &nbsp;&nbsp;&nbsp;
                        {j.startt}&nbsp;&nbsp;&nbsp;{j.endt}<br />
                                {j.location}<br /><br />
                                <button className="btn btn-info" onClick={() => this.showDetails(j._id)}>Show More Details</button></div></div>)}
                    </div>
                    <div className="row">
                        <div className="col-sm-offset-5 col-sm-8">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" >1</a></li>
                                <li className="page-item"><a className="page-link" >2</a></li>
                                <li className="page-item"><a className="page-link" >3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;