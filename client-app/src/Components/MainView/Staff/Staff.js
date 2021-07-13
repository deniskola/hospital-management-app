import React, {useEffect} from "react";
import UserDash from "./User/UserDash/UserDash";
import {Tab, Grid} from "semantic-ui-react";
import {useStore} from "../../../stores/store";
import {observer} from "mobx-react-lite";
import RegisterForm from "./User/RegisterForm";
import LoadingComponent from "../../../LoadingComponent";

function Staff() {
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
      roleNr: 3,
      roleName: "receptionist",
    },
    {
      roleNr: 4,
      roleName: "nurse",
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
    {
      menuItem: "nurse",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <UserDash
            roleName={userRoles[3].roleName}
            style={{position: "relative"}}
          />
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

  return (
    <div>
      <Grid stackable doubling>
        <Grid.Row>
          <Grid.Column width="5">
            <RegisterForm />
          </Grid.Column>
          <Grid.Column width="11">
            <Tab menu={{secondary: true, pointing: true}} panes={panes} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default observer(Staff);
