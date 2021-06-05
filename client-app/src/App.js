import React , {useEffect,useState} from "react";
import * as s from "./App.styles";
import * as Palette from "./colors";
import {Route} from 'react-router-dom';
import axios from 'axios';
import {ToastProvider,useToasts} from "react-toast-notifications";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import MainView from "./Components/MainView/MainView";
import Login from "./Components/LoginPage/Login";
import { Fragment } from "react";

const App = () => {

  const sidebarHeader = {
    fullName: "Hospital X",
    shortName: "X",
    }

  const menuItems = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "/icons/dashboard.png",
      subMenuItems: [],
    },
    {
      name: "Activity",
      to: "/activity",
      icon: "/icons/activity.png",
      subMenuItems: [],
    },
    {
      name: "Appointments",
      to: "/appointments",
      icon: "/icons/appointment.png",
      subMenuItems: [],
    },
    {
      name: "Profile",
      to: "/profile",
      icon: "/icons/profile.png",
      subMenuItems: [],
    },
    {
      name: "About",
      to: "/about",
      icon: "/icons/aboutus.png",
      subMenuItems: [],
    },
    {
      name: "Services",
      to: "/services",
      icon: "/icons/services.png",
      subMenuItems: [],
    },
    {
      name: "Contact Us",
      to: "/contacts",
      icon: "/icons/contactus.png",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Poppins",
  };

  return (
    <s.App>
      <Route exact path='/' component={Login}/>
      <Route path={'/(.+)'} render={()=>(
          <Fragment>
            <Sidebar
            sidebarHeader={sidebarHeader}
            menuItems={menuItems}
            fonts={fonts}
            colorPalette={Palette.silver}
            />
            <ToastProvider>
            <MainView>
              
            </MainView>
            </ToastProvider>
        </Fragment>
      )}/>
    </s.App>
  );
};

export default App;
