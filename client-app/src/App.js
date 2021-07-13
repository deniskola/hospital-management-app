import React, {useEffect, useState} from "react";
import * as s from "./App.styles";
import * as Palette from "./colors";
import {Route} from "react-router-dom";
import {ToastProvider, useToasts} from "react-toast-notifications";
import {observer} from "mobx-react-lite";

// Components
import Sidebar from "./Components/Sidebar/Sidebar";
import MainView from "./Components/MainView/MainView";
import Login from "./Components/LoginPage/Login";
import {Fragment} from "react";
import {useStore} from "./stores/store";
import LoadingComponent from "./LoadingComponent";

function App() {
  const {commonStore, userStore} = useStore();
  const {user} = userStore;

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  if (!commonStore.appLoaded) return <LoadingComponent content="Loading..." />;

  const sidebarHeader = {
    fullName: "Hospital X",
    shortName: "X",
  };
  const menuItems2 = [
    {
      name: "Profile",
      to: "/profile",
      icon: "/icons/profile.png",
      subMenuItems: [],
    },
    {
      name: "Appointments",
      to: "/appointments",
      icon: "/icons/appointment.png",
      subMenuItems: [
        {
          name: "Working Hours",
          to: "workingHours",
          icon: "/icons/workinghours.png",
        },
      ],
    },

    {
      name: "About",
      to: "/about",
      icon: "/icons/aboutus.png",
      subMenuItems: [],
    },
    {
      name: "Achievements",
      to: "/achievements",
      icon: "/icons/achievements.png",
      subMenuItems: [],
    },
  ];

  const menuItems = [
    {
      name: "Profile",
      to: "/profile",
      icon: "/icons/profile.png",
      subMenuItems: [],
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: "/icons/dashboard.png",
      subMenuItems: [{name: "Add Country/City", to: "addCountryCity"}],
    },

    /*{
      name: "Activity",
      to: "/activity",
      icon: "/icons/activity.png",
      subMenuItems: [],
    }*/ {
      name: "Appointments",
      to: "/appointments",
      icon: "/icons/appointment.png",
      subMenuItems: [
        {
          name: "Working Hours",
          to: "workingHours",
          icon: "/icons/workinghours.png",
        },
      ],
    },

    {
      name: "About",
      to: "/about",
      icon: "/icons/aboutus.png",
      subMenuItems: [],
    },

    /*{
      name: "Services",
      to: "/services",
      icon: "/icons/services.png",
      subMenuItems: [],
    }*/ {
      name: "HR Manager",
      to: "/hrmanager",
      icon: "/icons/services.png",
      subMenuItems: [
        {name: "Add Doctor", to: "addDoctor"},
        {name: "Add Patient", to: "addPatient"},
        {name: "Add Staff", to: "addStaff"},
      ],
    },
    {
      name: "Achievements",
      to: "/achievements",
      icon: "/icons/achievements.png",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Poppins",
  };

  return (
    <s.App>
      <Route exact path="/" component={Login} />
      {userStore.IsLoggedIn && (
        <>
          <Route
            path={"/(.+)"}
            render={() => (
              <Fragment>
                <Sidebar
                  sidebarHeader={sidebarHeader}
                  menuItems={(() => {
                    if (
                      user.role === "admin" ||
                      user.role === "superadmin" ||
                      user.role === null
                    ) {
                      return menuItems;
                    } else {
                      return menuItems2;
                    }
                  })()}
                  fonts={fonts}
                  colorPalette={Palette.silver}
                />
                <ToastProvider>
                  <MainView></MainView>
                </ToastProvider>
              </Fragment>
            )}
          />
        </>
      )}
    </s.App>
  );
}

export default observer(App);
