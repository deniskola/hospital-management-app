import React, { useState, useEffect } from 'react';
import AppointmentsContainer from './Appointments.styles';
import AppointmentsDashboard from './appointmentsDashboard/AppointmentsDashboard';
import agent from '../../../api/agent';

function Appointments(openForm) {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Appointments.table().then(response => {
      let appointments = [];
      response.forEach(appointment => {
        appointment.appointmentDate = appointment.appointmentDate.split('T')[0];
        appointments.push(appointment);
      })
      setAppointments(appointments);
    })
  }, [])

  function handleSelectAppointment(id) {
    setSelectedAppointment(appointments.find(x => x.id === id));
  }

  function handleCancelSelectAppointment() {
    setSelectedAppointment(undefined);
  }

  function handleFormOpen(id) {
    id ? handleSelectAppointment(id) : handleCancelSelectAppointment()
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditAppointment(appointment) {
    setSubmitting(true);
    if (appointment.id) {
      agent.Appointments.update(appointment).then(() => {
        setAppointments([...appointments.filter(x => x.id !== appointment.id), appointment])
        setSelectedAppointment(appointment);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      appointment.id = undefined;
      agent.Appointments.create(appointment).then(() => {
        setAppointments([...appointments, appointment]);
        setSelectedAppointment(appointment);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteAppointment(id) {
    setSubmitting(true);
    agent.Appointments.delete(id).then(() => {
      setAppointments([...appointments.filter(x => x.id !== id)]);
      setSubmitting(false);
    })
  }

  return (
    <div>
      <AppointmentsContainer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className='header'>
        <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;DATE</button>
            &nbsp;&nbsp;&nbsp;
          <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;DOCTOR</button>
            &nbsp;&nbsp;&nbsp;
          <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;SERVICES</button>
          <button className="righth" onClick={handleFormOpen}><i class="fa fa-plus"></i>&nbsp;&nbsp; ADD APPOINTMENT</button>
        </div>
        <div className='title'>
          <h1>APPOINTMENTS</h1>
        </div>
        <table class="content-table">
          <AppointmentsDashboard
            appointments={appointments}
            selectedAppointment={selectedAppointment}
            selectAppointment={handleSelectAppointment}
            cancelSelectAppointment={handleCancelSelectAppointment}
            editMode={editMode}
            openForm={handleFormOpen}
            closeForm={handleFormClose}
            createOrEdit={handleCreateOrEditAppointment}
            deleteAppointment={handleDeleteAppointment}
            submitting={submitting}
          />
        </table>
      </AppointmentsContainer>
    </div>
  )
}

export default Appointments



