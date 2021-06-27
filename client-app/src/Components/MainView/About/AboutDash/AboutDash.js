import React from "react";
import {Grid, List} from "semantic-ui-react";
import AboutDetails from "../Details/AboutDetails";
import AboutList from "./AboutList";
import AboutForm from "../Form/AboutForm";
import {useStore} from "../../../../stores/store";
import {observer} from "mobx-react-lite";
import {Button} from "semantic-ui-react";

export default observer(function AboutDash() {
  const {aboutStore, userStore} = useStore();
  const {selectedAbout, editMode} = aboutStore;
  const {user} = userStore;
  return (
    <Grid>
      <Grid.Column width="3">
        {user.role === "admin" && (
          <Button
            style={{position: "fixed"}}
            onClick={() => aboutStore.openForm()}
            icon="plus"
            floated="left"
          />
        )}
      </Grid.Column>
      <Grid.Column width="9">
        <List>
          <AboutList />
        </List>
      </Grid.Column>
      <Grid.Column width="4">
        {selectedAbout && !editMode && <AboutDetails />}
        {editMode && <AboutForm />}
      </Grid.Column>
    </Grid>
  );
});
