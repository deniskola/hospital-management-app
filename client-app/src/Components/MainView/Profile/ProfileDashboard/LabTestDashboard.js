import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import LabTestList from './LabTestList';
import PatientLabTestForm from '../Form/PatientLabTestForm'

export default function LabTestDashboard ({labtests, selectedLabTest, selectLabTest,cancelSelectLabTest, 
    editLabTestMode, openLabTestForm, closeLabTestForm, deleteLabTest,createOrEdit, submittingLabTest}){
    return (
        <Grid>
           <LabTestList
                labtests={labtests}
                selectLabTest={selectLabTest}
                deleteLabTest={deleteLabTest}
                submittingLabTest={submittingLabTest}
                createOrEdit={createOrEdit}
            />
                   
            {selectedLabTest && !editLabTestMode && (
                <PatientLabTestForm
                        labtest={selectedLabTest}
                        cancelSelectLabTest={cancelSelectLabTest}
                        openLabTestForm={openLabTestForm}
                />
            )}
                    
            {editLabTestMode && (
                <PatientLabTestForm
                    closeLabTestForm={closeLabTestForm}
                    labtest={selectedLabTest}
                    createOrEdit={createOrEdit}
                    submittingLabTest={submittingLabTest}
                />
            )}

        </Grid>
    )
}