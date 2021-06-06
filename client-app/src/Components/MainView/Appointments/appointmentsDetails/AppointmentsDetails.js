import React from 'react';
import { Button, Message } from 'semantic-ui-react';


export default function AppointmentsDetails({ appointment, cancelSelectAppointment, openForm}){
    return(
        <Message>
            <Message.Header>ARE YOU SURE?</Message.Header>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(appointment.id)} basic color='blue' content='Yes'/>
                <Button onClick={cancelSelectAppointment} basic color='red' content='No'/>
            </Button.Group>
        </Message>
    )
}