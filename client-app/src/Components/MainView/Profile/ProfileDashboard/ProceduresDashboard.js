import React from 'react';
import { Grid } from "semantic-ui-react";
import ProceduresList from './ProceduresList';
import ProceduresForm from '../Form/ProceduresForm';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ProceduresDashboard(){
    const {proceduresStore}= useStore();
    const {selectedProcedure, editMode}=proceduresStore;

    return (
        <Grid>
            <Grid.Column>
                   <ProceduresList/>
                   {selectedProcedure && !editMode && (
                    <ProceduresForm />
                   )}
                    {editMode && (
                        <ProceduresForm />
                    )}
            </Grid.Column>
        </Grid>
    );
})