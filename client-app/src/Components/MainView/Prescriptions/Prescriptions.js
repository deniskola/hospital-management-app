import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import PrescriptionsDashboard from './PrescriptionsDashboard/PrescriptionsDashboard';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

function Prescriptions() {
    const { prescriptionsStore } = useStore();

    useEffect(() => {
        prescriptionsStore.loadPrescriptions();
    }, [prescriptionsStore])

    return (
        <Grid>
            <PrescriptionsDashboard />
        </Grid>
    )
}

export default observer(Prescriptions);