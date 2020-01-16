import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Logout from './components/Event/Logout';
import UserNotification from './components/layout/UserNotification';
import AdminNotification from './components/layout/AdminNotification';
import UserHome from './components/layout/UserHome';
import AddEvent from './components/Event/AddEvent'
import Notification from './components/pages/Notification';
import EventDetails from './components/Event/EventDetails';
import Eventregistration from './components/Event/EventRegistration';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Event from './components/Event/Event'
import { EditEvent } from './components/Event/EditEvent';
import ErrorPage from '../src/components/pages/ErrorPage';
import AdminHeader from '../src/components/layout/AdminHeader';
import LoginSuccess from '../src/components/pages/LoginSuccess'
import LoginLabel from '../src/components/layout/LoginLabel';
import AdminComp from '../src/components/layout/AdminComp';
import UserHeader from '../src/components/layout/UserHeader';
import AdminHome from '../src/components/layout/AdminHome';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: true,
      login: false,
    }
  }

  onBtnClick = () => {
    this.setState({
      header: false,
      login: true,
    })
  };

  render() {
    return (
      <div style={{
        background: 'black',

      }}>
        <Router >
            <Switch>
              <Route exact path="/" component={Header} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/addEvent" component={AddEvent} />
              <Route exact path="/event" component={Event} />
              <Route exact path="/editevent/:_id" component={EditEvent} />
              <Route exact path="/notification" component={Notification} />
              <Route exact path="/event/:_id" component={EventDetails} />
              <Route exact path="/eventregistration/:_id" component={Eventregistration} />
              <Route exact path="/errorPage" component={ErrorPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/loginSuccess" component={LoginSuccess} />
              <Route exact path="/adminHeader" component={AdminHeader} />
              <Route exact path="/adminComp" component={AdminComp} />
              <Route exact path="/userHeader" component={UserHeader} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/userNotification" component={UserNotification} />
              <Route exact path="/adminNotification" component={AdminNotification} />
              <Route exact path="/adminHome" component={AdminHome} />
              <Route exact path="/userHome" component={UserHome} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
