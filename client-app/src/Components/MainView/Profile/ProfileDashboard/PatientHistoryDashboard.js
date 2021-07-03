import React from 'react';
import { Grid } from "semantic-ui-react";
import PatientHistoryList from './PatientHistoryList';
import PatientHistoryFrom from '../Form/PatientHistoryFrom';


export default function PatientHistoryDashboard({patienthistories, selectedPatientHistory, selectPatientHistory,cancelSelectPatientHistory, 
    editHistoryMode, openHistoryForm, closeHistoryForm, deletePatientHistory,createOrEdit, submittingHistory}){
    return (
        <Grid>
            <Grid.Column>
                   <PatientHistoryList
                        patienthistories={patienthistories}
                        selectPatientHistory={selectPatientHistory}
                        deletePatientHistory={deletePatientHistory}
                        submittingHistory={submittingHistory}
                   />
                   
                   {selectedPatientHistory && !editHistoryMode && (
                    <PatientHistoryFrom
                        patientHistory={selectedPatientHistory}
                        cancelSelectPatientHistory={cancelSelectPatientHistory}
                        openHistoryForm={openHistoryForm}
                    />
                   )}
                    
                    {editHistoryMode && (
                        <PatientHistoryFrom
                        closeHistoryForm={closeHistoryForm}
                        patientHistory={selectedPatientHistory}
                        createOrEdit={createOrEdit}
                        submittingHistory={submittingHistory}
                        />
                    )}
            </Grid.Column>
        </Grid>
    );
}