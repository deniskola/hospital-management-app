import React from "react";
import {Grid, List} from "semantic-ui-react";
import UserDetails from "../Details/UserDetails";
import UserList from "./UserList";
import UserForm from "../Form/UserForm";
import {useStore} from "../../../../stores/store";
import {observer} from "mobx-react-lite";
import RegisterForm from "../RegisterForm";

export default observer(function UserDash(props) {
  const {userStore} = useStore();
  const {selectedUser, editMode} = userStore;
  return (
    <Grid>
      <Grid.Column width="9">
        <List>
          <UserList roleName={props.roleName} />
        </List>
      </Grid.Column>
      <Grid.Column width="4">
        {selectedUser && !editMode && (
          <UserDetails style={{position: "fixed"}} />
        )}
        {editMode && <UserForm />}
      </Grid.Column>
    </Grid>
  );
});
