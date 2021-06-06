import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function AppointmentsForm({ appointment: selectedAppointment, closeForm, createOrEdit, submitting }) {

    const initialState = selectedAppointment ?? {
        id: "",
        customerName: "",
        appointmentDate: "",
        doctorName: "",
        service: "",
        status: ""
    };
    const [appointment, setAppointments] = useState(initialState);

    function handleSubmit() {
        createOrEdit(appointment);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAppointments({ ...appointment, [name]: value });
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Customer Name' value={appointment.customerName} name='customerName' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Appointment Date' value={appointment.appointmentDate} name='appointmentDate' onChange={handleInputChange} />
                <Form.Input placeholder='Doctor Name' value={appointment.doctorName} name='doctorName' onChange={handleInputChange} />
                <Form.Input placeholder='Service' value={appointment.service} name='service' onChange={handleInputChange} />
                <Form.Input placeholder='Status' value={appointment.status} name='status' onChange={handleInputChange} />
                <Button onClick={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}