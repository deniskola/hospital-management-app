import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import WorkingHoursList from './WorkingHoursList';
import WorkingHoursDetails from '../WorkingHoursDetails/WorkingHoursDetails';
import WorkingHoursForm from '../WorkingHoursForm/WorkingHoursForm';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function WorkingHoursDashboard() {
    const {workingHoursStore, userStore} = useStore();
    const {selectedWorkingHour, editMode} = workingHoursStore;
    const {user} = userStore;

    return (
        <Grid>
            <Grid.Row>
                {user.role === "superadmin" && (
                    <Button
                        onClick={() => workingHoursStore.openForm()}
                        color='blue'
                    >ADD WORKING HOURS</Button>
                )}
            </Grid.Row>
            <Grid.Column width='8'>
                <WorkingHoursList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedWorkingHour && !editMode && (
                    <WorkingHoursDetails />)}
                {editMode && (
                    <WorkingHoursForm />)}
            </Grid.Column>
        </Grid>
    )
})