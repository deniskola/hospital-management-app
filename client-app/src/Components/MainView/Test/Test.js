import React, {useEffect} from "react";
import UserDash from "./User/UserDash/UserDash";
import {Button, Tab, Grid, Divider} from "semantic-ui-react";
import {useStore} from "../../../stores/store";
import {observer} from "mobx-react-lite";
import RegisterForm from "./User/RegisterForm";
import CountryDash from "./Country/CountryDash/CountryDash";
import CityDash from "./City/CityDash/CityDash";
import LoadingComponent from "../../../LoadingComponent";

function Test() {
  const {userStore, countryStore, cityStore} = useStore();
  const userRoles = [
    {
      roleNr: 0,
      roleName: "admin",
    },
    {
      roleNr: 1,
      roleName: "superadmin",
    },
    {
      roleNr: 0,
      roleName: "receptionist",
    },
  ];
  const panes = [
    {
      menuItem: "admin",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <UserDash
            roleName={userRoles[0].roleName}
            style={{position: "relative"}}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "superadmin",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <UserDash
            roleName={userRoles[1].roleName}
            style={{position: "relative"}}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "receptionist",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <UserDash
            roleName={userRoles[2].roleName}
            style={{position: "relative"}}
          />
        </Tab.Pane>
      ),
    },
  ];

  const panes2 = [
    {
      menuItem: "Countries",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <CountryDash />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Cities",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <CityDash />
        </Tab.Pane>
      ),
    },
  ];
  useEffect(() => {
    countryStore.loadCountry();
  }, [countryStore]);

  useEffect(() => {
    cityStore.loadCity();
  }, [cityStore]);

  useEffect(() => {
    userStore.loadUser();
  }, [userStore]);

  if (userStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;
  if (countryStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;
  if (cityStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="5">
            <RegisterForm />
          </Grid.Column>
          <Grid.Column width="11">
            <Tab menu={{secondary: true, pointing: true}} panes={panes} />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column width="16">
            <Tab
              menu={{fluid: true, vertical: true, tabular: true}}
              panes={panes2}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default observer(Test);
