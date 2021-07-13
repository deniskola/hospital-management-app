import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';


export default function AppointmentsDetails(){
    const {appointmentsStore} = useStore();
    const {selectedAppointment: appointment, openForm, cancelSelectedAppointment} = appointmentsStore;
    
    if(!appointment) return;

    return(
        <Message>
            <Message.Header>ARE YOU SURE?</Message.Header>
            <Button.Group widths='2'>
                <Button onClick={() => openForm(appointment.id)} basic color='blue' content='Yes'/>
                <Button onClick={cancelSelectedAppointment} basic color='red' content='No'/>
            </Button.Group>
        </Message>
    )
}