/**
 * Created by qoder on 16/8/19.
 */
import React, {Component} from 'react';
import {Router, Router, HashHistory, browserHistory} from 'react-router';

import App from '../components/Main'

//home全部路由组件

import Home from '../containers/home/home.container';
import AccountSettings from '../containers/home/content/accountsettings.container';
import CreateActivities from '../containers/home/content/createActivities.container';
import MyManagementActivities from '../containers/home/content/myManagementActivities.container';
import StudentInformationManagement from '../containers/home/content/studentInformationManagement.container';
import PasswordReset from '../containers/home/content/passwordReset.container';
import UnbundlingApps from '../containers/home/content/unbundlingApps.container';
import RightsManagement from '../containers/home/content/rightsManagement.container';
import Notice from '../containers/home/content/notice.container';
import Login from '../containers/home/content/login.container';
import OperationLog from '../containers/home/content/operationLog.container';


class RouterApp extends Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home}>
            <Route path="AccountSettings" component={AccountSettings}/>
            <Route path="CreateActivities" component={CreateActivities}/>
            <Route path="MyManagementActivities" component={MyManagementActivities}/>
            <Route path="StudentInformationManagement" component={StudentInformationManagement}/>
            <Route path="PasswordReset" component={PasswordReset}/>
            <Route path="UnbundlingApps" component={UnbundlingApps}/>
            <Route path="RightsManagement" component={RightsManagement}/>
            <Route path="Notice" component={Notice}/>
            <Route path="OperationLog" component={OperationLog}/>
            <Route path="Login" component={Login}/>
          </Route>

        </Route>
      </Router>

    )
  }
}
export default RouterApp;
