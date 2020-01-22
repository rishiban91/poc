import React, { Component } from 'react';
import Thead from './Thead';
import TableRow from './TableRow';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ListofEvent extends Component {
    constructor(props) {
        super(props);
    }

    editClick = (_id) => {
        alert(_id);
        this.props.history.push({
            pathname: '/editevent/' + _id,
            state: { title: this.props.location.state.title }
        });

        // this.props.history.push('/editevent/' + _id);
    }

    showAdmin = () => {
        return (
            <div>
                <ul className="nav navbar-nav">
                    <li style={{ color: 'pink', margin: 15, fontSize: 20 }}> {this.props.location.state.title} </li>
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
        );
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{
                    background: 'black',

                }}>
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
                <div>
                    <h2 className="col-md-offset-4"> Make change to Event </h2>
                    <table className="table table-bordered table-striped">
                        <Thead />
                        <tbody>
                            {this.props.event.map((i, j) =>
                                <TableRow key={i.id}
                                    _id={i._id}
                                    eventname={i.eventname}
                                    start={i.start}
                                    end={i.end}
                                    location={i.location}
                                    adultprice={i.adultprice}
                                    childprice={i.childprice}
                                    vegprice={i.vegprice}
                                    nonvegprice={i.nonvegprice}
                                    drinksprice={i.drinksprice}
                                    startbook={i.startbook}
                                    endbook={i.endbook}
                                    description={i.description}
                                    deleteEvent={this.props.deleteEvent}
                                    editClick={this.editClick.bind(this)} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListofEvent);