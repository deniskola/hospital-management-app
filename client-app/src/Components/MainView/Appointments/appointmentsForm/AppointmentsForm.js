import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function AppointmentsForm() {
    const { appointmentsStore } = useStore();
    const { selectedAppointment, closeForm, createAppointment, updateAppointment, loading } = appointmentsStore;

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
        appointment.id ? updateAppointment(appointment) : createAppointment(appointment);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAppointments({ ...appointment, [name]: value });
    }

    return (
        <Segment clearing style={{fontWeight: 'bold', fontSize: '20px', backgroundColor: '#f5f7fb'}}> ADD APPOINTMENT
        <div style={{border: '1px solid #9b59b6'}}></div>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Customer Name' value={appointment.customerName} name='customerName' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Appointment Date' value={appointment.appointmentDate} name='appointmentDate' onChange={handleInputChange} />
                <Form.Input placeholder='Doctor Name' value={appointment.doctorName} name='doctorName' onChange={handleInputChange} />
                <Form.Input placeholder='Service' value={appointment.service} name='service' onChange={handleInputChange} />
                <Form.Input placeholder='Status' value={appointment.status} name='status' onChange={handleInputChange} />
                <Button loading={loading} floated='center' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='center' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
})