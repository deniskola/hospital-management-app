import React from 'react';
import { Grid } from "semantic-ui-react";
import ProceduresList from './ProceduresList';
import ProceduresForm from '../Form/ProceduresForm';


export default function ProceduresDashboard({procedures, selectedProcedure, selectProcedure,cancelSelectProcedure, 
    editProcedureMode, openProcedureForm, closeProcedureForm, deleteProcedure,createOrEditProcedure, submittingProcedure}){
    return (
        <Grid>
            <Grid.Column>
                   <ProceduresList
                        procedures={procedures}
                        selectProcedure={selectProcedure}
                        deleteProcedure={deleteProcedure}
                        submittingProcedure={submittingProcedure}
                   />
                   
                   {selectedProcedure && !editProcedureMode && (
                    <ProceduresForm
                        procedure={selectedProcedure}
                        cancelSelectProcedure={cancelSelectProcedure}
                        openProcedureForm={openProcedureForm}
                    />
                   )}
                    
                    {editProcedureMode && (
                        <ProceduresForm
                        closeProcedureForm={closeProcedureForm}
                        patientProcedure={selectedProcedure}
                        createOrEditProcedure={createOrEditProcedure}
                        submittingProcedure={submittingProcedure}
                        />
                    )}
            </Grid.Column>
        </Grid>
    );
}