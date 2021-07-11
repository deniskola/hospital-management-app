import React from 'react';
import { Grid } from "semantic-ui-react";
import PatientHistoryList from './PatientHistoryList';
import PatientHistoryFrom from '../Form/PatientHistoryFrom';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function PatientHistoryDashboard(){
    const {patientHistoryStore}= useStore();
    const {selectedPatientHistory, editMode}=patientHistoryStore;

    return (
        <Grid>
                   <PatientHistoryList />

                   {selectedPatientHistory && !editMode && (
                    <PatientHistoryFrom />
                   )}
                    
                    {editMode && (
                        <PatientHistoryFrom />
                    )}
        </Grid>
    );
})