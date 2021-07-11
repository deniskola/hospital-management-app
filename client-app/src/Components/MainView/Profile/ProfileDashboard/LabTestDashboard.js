import React from "react";
import { Grid } from "semantic-ui-react";
import LabTestList from './LabTestList';
import PatientLabTestForm from '../Form/PatientLabTestForm'
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer (function LabTestDashboard (){
    const {labTestStore}= useStore();
    const {selectedLabTest,editMode}=labTestStore;

    return (
        <Grid>
           <LabTestList />
                   
            {selectedLabTest && !editMode && (
                <PatientLabTestForm/>
            )}        
            {editMode && (
                <PatientLabTestForm />
            )}
        </Grid>
    );
});