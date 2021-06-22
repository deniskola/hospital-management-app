import React from 'react';
import { Switch, Route ,Router} from 'react-router-dom';


import Login from './Components/LoginPage/Login';
import Dashboard from './Components/MainView/Dashboard/Dashboard';
import Activity from './Components/MainView/Activity/Activity';
import Appointments from './Components/MainView/Appointments/Appointments';
import About from './Components/MainView/About/About';
import Services from './Components/MainView/Services/Services';
import Test from './Components/MainView/Test/Test';
import Profile from './Components/MainView/Profile/Profile';


const Routes = () => {
  return (
    <Switch>
    <Route exact path='/' component={Login}/>
    

    <Route exact path='/dashboard' component={Dashboard} />
    <Route exact path='/activity' component={Activity} />
    <Route exact path='/appointments' component={Appointments} />
    <Route exact path='/about' component={About} />
    <Route exact path='/profile' component={Profile}/>
    <Route exact path='/services' component={Services} />
    <Route exact path='/test' component={Test} />
  </Switch>
  )
}

export default Routes