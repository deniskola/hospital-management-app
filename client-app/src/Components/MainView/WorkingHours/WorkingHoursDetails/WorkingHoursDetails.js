import React from 'react';
import { Statistic, Button } from 'semantic-ui-react';

export default function WorkingHoursDetails({ workinghour, cancelSelectWorkingHour, openForm }) {
    return (
        <Statistic fluid>
            <Statistic.Label>FROM</Statistic.Label>
            <Statistic.Value>{workinghour.from}</Statistic.Value>
            <Statistic.Label>TO</Statistic.Label>
            <Statistic.Value>{workinghour.to}</Statistic.Value>
            <Button onClick={() => openForm(workinghour.id)} basic color='blue' content='Edit' />
            <Button onClick={cancelSelectWorkingHour} basic color='grey' content='Cancel' />
        </Statistic>
    )
}