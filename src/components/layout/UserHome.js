import React, { Component } from 'react';
import axios from 'axios';
import eventdetails from '../Event/EventDetails'
import Pagination from '../Event/Pagination';
import { Link } from 'react-router-dom';
import UserEventDetails from '../Event/UserEventDetails';
class UserHome extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/event";
        this.state = {
            event: [], activePage: 2, pageOfItems: 3
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({ event: res.data });
        })
    }

    showDetails = (_id) => {
        this.props.history.push({
            pathname: '/userEvent/'+ _id,
            state: { title: this.props.location.state.title }
        });
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
                                <li style={{ color: 'pink', margin: 15, fontSize: 20 }}> {this.props.location.state.title} </li>
                                <li className="active"><Link to={{
                                    pathname: '/userHome',
                                    state: { title: this.props.location.state.title }
                                }}
                                    className="glyphicon glyphicon-home" style={{ color: 'pink' }}> Home</Link><span className="sr-only">(current)</span></li>
                                <li ><Link to={{
                                    pathname: '/userNotification',
                                    state: { title: this.props.location.state.title }
                                }} className="glyphicon glyphicon-bell" style={{ color: 'pink' }}> Upcoming Events </Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <ul className="nav navbar-nav navbar-right">
                            <li ><Link to="/logout" className="glyphicon glyphicon-log-out" style={{ color: 'pink' }}> Logout</Link></li>
                            <li />
                        </ul>
                    </div>
                </div>
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
                        </ul></div></div>
                <br /><br />
                <br />

            </div>
        );
    }
}
export default UserHome;