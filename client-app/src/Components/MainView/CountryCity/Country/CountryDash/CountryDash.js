import React from "react";
import {Grid, List} from "semantic-ui-react";
import CountryDetails from "../Details/CountryDetails";
import CountryList from "./CountryList";
import CountryForm from "../Form/CountryForm";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";
import {Button} from "semantic-ui-react";

export default observer(function CountryDash() {
  const {countryStore} = useStore();
  const {selectedCountry, editMode} = countryStore;

  return (
    <Grid stackable>
      <Grid.Column width="3">
        <Button onClick={() => countryStore.openForm()} icon="plus" />
      </Grid.Column>
      <Grid.Column width="7">
        <List>
          <CountryList />
        </List>
      </Grid.Column>
      <Grid.Column width="4">
        {selectedCountry && !editMode && <CountryDetails />}
        {editMode && <CountryForm />}
      </Grid.Column>
    </Grid>
  );
});
