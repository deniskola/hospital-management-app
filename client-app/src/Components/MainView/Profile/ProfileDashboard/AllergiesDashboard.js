import React from 'react';
import { Grid } from "semantic-ui-react";
import AllergiesList from './AllergiesList';
import AllergiesForm from '../Form/AllergiesForm';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function AllergiesDashboard(){
    const {allergiesStore}= useStore();
    const {selectedAllergy,editMode}=allergiesStore;

    return (
        <Grid>
            <Grid.Column width='17'>
                   <AllergiesList/>
                    {selectedAllergy && !editMode && (
                        <AllergiesForm />
                    )}
                    {editMode && (
                        <AllergiesForm />
                    )}
            </Grid.Column>
        </Grid>
    );
});