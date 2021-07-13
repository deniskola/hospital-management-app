import React from "react";
import {Grid, List} from "semantic-ui-react";
import CityDetails from "../Details/CityDetails";
import CityList from "./CityList";
import CityForm from "../Form/CityForm";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";
import {Button} from "semantic-ui-react";

export default observer(function CityDash() {
  const {cityStore} = useStore();
  const {selectedCity, editMode} = cityStore;

  return (
    <Grid stackable>
      <Grid.Column width="3">
        <Button onClick={() => cityStore.openForm()} icon="plus" />
      </Grid.Column>
      <Grid.Column width="7">
        <List>
          <CityList />
        </List>
      </Grid.Column>
      <Grid.Column width="4">
        {selectedCity && !editMode && <CityDetails />}
        {editMode && <CityForm />}
      </Grid.Column>
    </Grid>
  );
});
