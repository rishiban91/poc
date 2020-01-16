import React, { Component } from 'react';
import Thead from '../pages/Thead';
import TableRow from '../pages/TableRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

class AdminNotification extends Component {
    constructor() {
        super();
        this.serviceUrl = "http://localhost:5000/api/event/";
        this.state = {
            event: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        axios.get(this.serviceUrl).then((res) => {
            this.setState({
                event: res.data
            })
        })
    }
    render() {
        return (
            <div>
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
                    <div className="col-sm-7">
                        <ul className="nav navbar-nav">
                            <li style={{ color: 'pink', margin: 14, fontSize: 20 }}>
                                {this.props.location.state.title}
                            </li>
                            <li className="active"><Link to={{
                                pathname: '/adminHome',
                                state: { title: this.props.location.state.title }
                            }}
                                className="glyphicon glyphicon-home" style={{ color: 'pink' }}> Home</Link><span className="sr-only">(current)</span></li>
                            <li ><Link to={{
                                pathname: '/addEvent',
                                state: { title: this.props.location.state.title }
                            }}
                                className="glyphicon glyphicon-plus-sign" style={{ color: 'pink' }}> Add Event </Link></li>
                            <li ><Link to={{
                                pathname: '/event',
                                state: { title: this.props.location.state.title }
                            }} className="glyphicon glyphicon-list-alt" style={{ color: 'pink' }}> List of Events </Link></li>
                            <li ><Link to={{
                                pathname: '/adminNotification',
                                state: { title: this.props.location.state.title }
                            }} className="glyphicon glyphicon-bell" style={{ color: 'pink' }}> Upcoming Events </Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul className="nav navbar-nav navbar-right">
                            <li ><Link to="/logout" className="glyphicon glyphicon-log-out" style={{ color: 'pink' }}> Logout</Link></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row" />
                <div className="row" />
                <div className="well">
                    <h1> Notification of Upcoming events </h1> <hr /><br />
                    <table className="table table-bordered table-striped">
                        <Thead />
                        <tbody>
                            {this.state.event.map((i) =>
                                <TableRow key={i.id}
                                    _id={i._id}
                                    eventname={i.eventname}
                                    start={i.start}
                                    end={i.end}
                                    startbook={i.startbook}
                                    endbook={i.endbook}
                                />)}
                        </tbody>
                    </table>

                </div>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            </div >
        );
    }
}

export default AdminNotification;