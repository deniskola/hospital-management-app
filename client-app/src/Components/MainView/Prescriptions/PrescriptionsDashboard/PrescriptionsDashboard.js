import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import PrescriptionsList from './PrescriptionsList';
import PrescriptionsDetails from '../PrescriptionsDetails/PrescriptionsDetails';
import PrescriptionsForm from '../PrescriptionsForm/PrescriptionsForm';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function PrescriptionsDashboard() {
    const { prescriptionsStore, userStore } = useStore();
    const { selectedPrescription, editMode } = prescriptionsStore;
    const { user } = userStore;

    return (
        <Grid>
            <Grid.Row>
            {(user.role === "Doctor" || user.role === "nurse" || user.role === "superadmin") &&(
                    <Button onClick={() => prescriptionsStore.openForm()}>CREATE NEW PRESCRIPTION</Button>
                )}
                <PrescriptionsList />
            </Grid.Row>
            <Grid.Row>
                {selectedPrescription && !editMode &&
                    <PrescriptionsDetails />}
                {editMode &&
                    <PrescriptionsForm />}
            </Grid.Row>
        </Grid>
    )
})