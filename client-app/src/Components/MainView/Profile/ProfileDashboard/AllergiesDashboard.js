import React from 'react';
import { Grid } from "semantic-ui-react";
import AllergiesList from './AllergiesList';
import AllergiesModalForm from '../Form/AllergiesModalForm';

export default function AllergiesDashboard({allergies, selectedAllergy, selectAllergy, cancelSelectAllergy, editMode, 
    deleteAllergy, openModalForm, closeModalForm,createOrEdit, submitting}){
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
                        <AllergiesModalForm
                        allergy={selectedAllergy}
                        cancelSelectAllergy={cancelSelectAllergy}
                        openModalForm={openModalForm}
                        />
                    )}
                    {editMode && (
                        <AllergiesModalForm
                        closeModalForm={closeModalForm}
                        allergy={selectedAllergy}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                        />
                    )}
            </Grid.Column>
        </Grid>
    );
}