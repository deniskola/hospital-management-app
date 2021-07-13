import React, { useEffect } from 'react';
import WorkingHoursDashboard from './WorkingHoursDashboard/WorkingHoursDashboard';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

function WorkingHours() {
    const { workingHoursStore } = useStore();

    useEffect(() => {
        workingHoursStore.loadWorkingHours();
    }, [workingHoursStore])

    return (
        <>
            <WorkingHoursDashboard />
        </>
    )
}

export default observer(WorkingHours);