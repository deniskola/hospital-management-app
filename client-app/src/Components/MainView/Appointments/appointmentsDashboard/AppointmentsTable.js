import React from 'react';

export default function AppointmentsTable({ appointments, selectAppointment, deleteAppointment, submitting }) {
  return (
    <div className='main'>
      <thead>
        <tr>
          <th>No #.</th>
          <th>Customer Name</th>
          <th>Appointment Date</th>
          <th>Doctor Name</th>
          <th>Services</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment =>
          <tr key={appointment.id}>
            <td>{appointment.id}</td>
            <td>{appointment.customerName}</td>
            <td>{appointment.appointmentDate}</td>
            <td>{appointment.doctorName}</td>
            <td>{appointment.service}</td>
            <td>{appointment.status}</td>
            <td><button class="btn" loading={submitting} onClick={() => deleteAppointment(appointment.id)}><i class="fa fa-trash"></i></button></td>
            <td><button class="btn" onClick={() => selectAppointment(appointment.id)}><i class="fa fa-edit"></i></button></td>
          </tr>)}
      </tbody>
    </div>
  )
}