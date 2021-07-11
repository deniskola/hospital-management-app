import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import WorkingHoursList from './WorkingHoursList';
import WorkingHoursDetails from '../WorkingHoursDetails/WorkingHoursDetails';
import WorkingHoursForm from '../WorkingHoursForm/WorkingHoursForm';

export default function WorkingHoursDashboard({ workinghours, 
    selectedWorkingHour, selectWorkingHour, cancelSelectWorkingHour, editMode, openForm, closeForm, createOrEdit, deleteWorkingHour, submitting
}) {
    return (
        <Grid>
            <Grid.Row>
                <Button
                    onClick={openForm}
                    color='blue'
                >ADD WORKING HOURS</Button>
            </Grid.Row>
            <Grid.Column width='8'>
                <WorkingHoursList 
                    workinghours={workinghours} 
                    deleteWorkingHour={deleteWorkingHour}
                    selectWorkingHour={selectWorkingHour}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedWorkingHour && !editMode && (
                    <WorkingHoursDetails 
                        workinghour={selectedWorkingHour}
                        cancelSelectWorkingHour={cancelSelectWorkingHour}
                        openForm={openForm}
                    />)}
                {editMode && (
                    <WorkingHoursForm 
                        closeForm={closeForm} 
                        workinghour={selectedWorkingHour} 
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />)}
            </Grid.Column>
        </Grid>
    )
}