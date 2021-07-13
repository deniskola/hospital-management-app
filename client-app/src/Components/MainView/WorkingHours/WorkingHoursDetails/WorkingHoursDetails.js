import React from 'react';
import { Statistic, Button } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default function WorkingHoursDetails() {
    const {workingHoursStore, userStore} = useStore();
    const {selectedWorkingHour: workinghour, openForm, cancelSelectedWorkingHour} = workingHoursStore;
    const {user} = userStore;
    
    if (!workinghour) return;

    return (
        <Statistic fluid>
            <Statistic.Label>FROM</Statistic.Label>
            <Statistic.Value>{workinghour.from}</Statistic.Value>
            <Statistic.Label>TO</Statistic.Label>
            <Statistic.Value>{workinghour.to}</Statistic.Value>
            {user.role === "superadmin" && (
                <Button onClick={() => openForm(workinghour.id)} basic color='blue' content='Edit' />
            )}
            <Button onClick={cancelSelectedWorkingHour} basic color='grey' content='Cancel' />
        </Statistic>
    )
}