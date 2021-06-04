import React from "react";
import { Grid, List, Button } from "semantic-ui-react";
import AboutDetails from "../Details/AboutDetails";
import AboutList from "./AboutList";
import AboutForm from "../Form/AboutForm";

export default function AboutDash({
  about,
  selectedAbout,
  selectAbout,
  deleteAbout,
  cancelSelectAbout,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  submitting,
}) {
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          <AboutList
            about={about}
            selectAbout={selectAbout}
            deleteAbout={deleteAbout}
            submitting={submitting}
          />
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedAbout && !editMode && (
          <AboutDetails
            ab={selectedAbout}
            cancelSelectAbout={cancelSelectAbout}
            openForm={openForm}
          />
        )}
        {editMode && (
          <AboutForm
            closeForm={closeForm}
            ab={selectedAbout}
            createOrEdit={createOrEdit}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
