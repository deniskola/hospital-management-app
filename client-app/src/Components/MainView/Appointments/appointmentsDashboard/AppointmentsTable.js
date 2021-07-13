import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../../../stores/store';

export default observer(function AppointmentsTable() {
  const {appointmentsStore, userStore} = useStore();
  const {deleteAppointment, appointmentsByDate, loading} = appointmentsStore;
  const {user} = userStore;

  const [target, setTarget] = useState('');

  function handleAppointmentDelete(e, id){
    setTarget(e.currentTarget.name);
    deleteAppointment(id);
  }
  
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
          {(user.role === "Patient" || user.role === "superadmin"  || user.role === "receptionist")&&(
            <>
              <th>Delete</th>
              <th>Edit</th>
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {appointmentsByDate.map(appointment =>
          <tr key={appointment.id}>
            <td>{appointment.id}</td>
            <td>{appointment.customerName}</td>
            <td>{appointment.appointmentDate}</td>
            <td>{appointment.doctorName}</td>
            <td>{appointment.service}</td>
            <td>{appointment.status}</td>
            {(user.role === "Patient" || user.role === "superadmin"  || user.role === "receptionist")&&(
              <>
              <td><button class="btn"
                name={appointment.id} 
                loading={loading && target === appointment.id} 
                onClick={(e) => handleAppointmentDelete(e, appointment.id)}>
              <i class="fa fa-trash"></i></button></td>
              <td><button class="btn" onClick={() => appointmentsStore.selectAppointment(appointment.id)}><i class="fa fa-edit"></i></button></td>
              </>
            )}
          </tr>)}
      </tbody>
    </div>
  )
})