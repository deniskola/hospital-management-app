import React, {useEffect} from "react";
import UserDash from "./UserDash/UserDash";
import {Button, Tab, Grid} from "semantic-ui-react";
import {useStore} from "../../../stores/store";
import {observer} from "mobx-react-lite";
import RegisterForm from "./RegisterForm";

//import LoadingComponent from "../../../LoadingComponent";

function Test() {
  const {userStore} = useStore();
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

  useEffect(() => {
    userStore.loadUser();
  }, [userStore]);

  //if (aboutStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <div>
      <Grid>
        <Grid.Column width="5">
          <RegisterForm />
        </Grid.Column>
        <Grid.Column width="11">
          <Tab panes={panes} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default observer(Test);
