import React from 'react';
import { Grid } from "semantic-ui-react";
import AllergiesList from './AllergiesList';
import AllergiesForm from '../Form/AllergiesForm';

export default function AllergiesDashboard({allergies, selectedAllergy, selectAllergy, cancelSelectAllergy, editMode, 
    deleteAllergy, openForm, closeForm,createOrEdit, submitting}){
    return (
        <Grid>
            <Grid.Column width='17'>
                   <AllergiesList
                        allergies={allergies}
                        selectAllergy={selectAllergy}
                        deleteAllergy={deleteAllergy}
                        submitting={submitting}

                   />
                    {selectedAllergy && !editMode && (
                        <AllergiesForm
                        pAllergies={selectedAllergy}
                        cancelSelectAllergy={cancelSelectAllergy}
                        openForm={openForm}
                        submitting={submitting}
                        />
                    )}
                    {editMode && (
                        <AllergiesForm
                        closeForm={closeForm}
                        pAllergies={selectedAllergy}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                        />
                    )}
            </Grid.Column>
        </Grid>
    );
}