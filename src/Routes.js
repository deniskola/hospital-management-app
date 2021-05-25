import React from 'react';
import { Switch, Route ,Router} from 'react-router-dom';

// Components
import Login from './Components/LoginPage/Login';
import Dashboard from './Components/MainView/Dashboard/Dashboard';
import Activity from './Components/MainView/Activity/Activity';
import Appointments from './Components/MainView/Appointments/Appointments';
import About from './Components/MainView/About/About';
import Services from './Components/MainView/Services/Services';
import Contacts from './Components/MainView/Contacts/Contacts';
import Profile from './Components/MainView/Profile/Profile';
import Sidebar from './Components/Sidebar/Sidebar';

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
    <Route exact path='/contacts' component={Contacts} />
  </Switch>
  )
}

export default Routes