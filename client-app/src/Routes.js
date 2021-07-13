import React from "react";
import {Switch, Route} from "react-router-dom";

import Login from "./Components/LoginPage/Login";
import Dashboard from "./Components/MainView/Dashboard/Dashboard";
import Activity from "./Components/MainView/Activity/Activity";
import Appointments from "./Components/MainView/Appointments/Appointments";
import About from "./Components/MainView/About/About";
import Services from "./Components/MainView/Services/Services";
import CountryCity from "./Components/MainView/CountryCity/CountryCity";
import Staff from "./Components/MainView/Staff/Staff";
import Profile from "./Components/MainView/Profile/Profile";
import HRmanagerDoctor from "./Components/MainView/HRmanager/Doctor";
import HRmanagerPatient from "./Components/MainView/HRmanager/Patient";
import WorkingHours from "./Components/MainView/WorkingHours/WorkingHours";
import Achievements from "./Components/MainView/Achievements/Achievements";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/activity" component={Activity} />
      <Route exact path="/appointments" component={Appointments} />
      <Route exact path="/about" component={About} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/dashboardaddCountryCity" component={CountryCity} />
      <Route exact path="/hrmanageraddDoctor" component={HRmanagerDoctor} />
      <Route exact path="/hrmanageraddPatient" component={HRmanagerPatient} />
      <Route exact path="/hrmanageraddstaff" component={Staff} />
      <Route exact path="/appointmentsworkingHours" component={WorkingHours} />
      <Route exact path="/achievements" component={Achievements} />
    </Switch>
  );
};

export default Routes;
