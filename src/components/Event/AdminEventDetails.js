import React, { Component } from 'react';
import { EventRegistration } from './EventRegistration';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AdminEventDetails extends Component {
  constructor() {
    super();
    this.serviceUrl = "http://localhost:5000/api/event/";
    this.state = {
      event: [],
      user: []
    }
  }

  componentDidMount() {
    let _id = this.props.match.params._id;
    axios.get(this.serviceUrl + _id).then((res) => {
      this.setState({
        event: res.data
      })
    })
  }

  apply = (_id) => {
    // alert(_id);
    this.props.history.push({
      pathname: '/admineventregistration/' + _id,
      state: {
        title: this.props.location.state.title,
        role: this.props.location.state.role,
      }
    });
    //this.props.history.push('/eventregistration/' + _id);
  }

  renderRoleEvent = () => {
      return (
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
                }}
                  className="glyphicon glyphicon-list-alt" style={{ color: 'pink' }}> List of Events </Link></li>
                <li ><Link to={{
                  pathname: '/adminNotification',
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
      );
  }

  render() {
    return (
      <div className="container-fluid">
        {this.renderRoleEvent()}
        <div className="col-sm-offset-2 col-sm-8">
          <div className="well">
            <img className="text-center" className="img-fluid " src={this.state.event.image} alt="not found" width="700" height="300" />
            <h3 className="text-left">{this.state.event.eventname}</h3>
            <h4 className="text-left" > <b>Event dates and Timing : </b> {this.state.event.start}&nbsp;&nbsp;&nbsp;{this.state.event.end}&nbsp;&nbsp;&nbsp;{this.state.event.startt}&nbsp;&nbsp;&nbsp;{this.state.event.endt}</h4>
            <br />
            <button className="col-md-offset-4" className="btn btn-success" onClick={() => this.apply(this.state.event._id)}>Register</button>
          </div>
          <div className="well">
            <b>Event Description:</b> {this.state.event.description} <br />
            <br />
            <b>Location:</b>{this.state.event.location}<br />
            <br />
            <b>Price for Tickets</b> <br />
            <b>Adult : </b>{this.state.event.adultprice}&nbsp;&nbsp;&nbsp;&nbsp;
            <b className="col-sm-offset-1">Child : </b>{this.state.event.childprice}<br />
            <br />
            <b>Price for Food</b><br />
            <b>Veg food : </b>{this.state.event.vegprice} &nbsp;&nbsp;&nbsp;&nbsp;
            <b className="col-sm-offset-1">Non-veg food : </b>{this.state.event.nonvegprice}&nbsp;&nbsp;&nbsp;&nbsp;
            <b className="col-sm-offset-1" >Drinks : </b>{this.state.event.drinksprice}<br /><br />
            <b>Booking Date </b><br />
            <b>Starts on : </b>{this.state.event.startbook}
            <b className="col-sm-offset-3">Ends on : </b>{this.state.event.endbook}<br />
          </div>
        </div>
      </div>

    );
  }
}
export default AdminEventDetails;