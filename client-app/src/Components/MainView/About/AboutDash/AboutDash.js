import React from "react";
import { Grid, List } from "semantic-ui-react";
import AboutDetails from "../Details/AboutDetails";
import AboutList from "./AboutList";
import AboutForm from "../Form/AboutForm";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function AboutDash() {

  const {aboutStore} = useStore();
  const {selectedAbout, editMode} = aboutStore;
  return (
    <Grid>
      <Grid.Column width="2">
      </Grid.Column>  
      <Grid.Column width="9">
        <List>
          <AboutList/>
        </List>
      </Grid.Column>
      <Grid.Column width="5">
        {selectedAbout && !editMode && (
          <AboutDetails/>
        )}
        {editMode && (
          <AboutForm/>
        )}
      </Grid.Column>
    </Grid>
  );
})
