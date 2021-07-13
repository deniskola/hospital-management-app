import React, { useEffect } from 'react';
import AppointmentsContainer from './Appointments.styles';
import AppointmentsDashboard from './appointmentsDashboard/AppointmentsDashboard';
import { useStore } from '../../../stores/store';
import { observer } from 'mobx-react-lite';

function Appointments() {
  const {appointmentsStore, userStore} = useStore();
  const {user} = userStore;

  useEffect(() => {
    appointmentsStore.loadAppointments();
  }, [appointmentsStore])

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
          {user.role === "Pacient" || user.role === "superadmin"  || user.role === "receptionist" &&(
            <button className="righth" onClick={() => appointmentsStore.openForm()}><i class="fa fa-plus"></i>&nbsp;&nbsp; ADD APPOINTMENT</button>
          )}
        </div>
        <div className='title'>
          <h1>APPOINTMENTS</h1>
        </div>
        <table class="content-table">
          <AppointmentsDashboard />
        </table>
      </AppointmentsContainer>
    </div>
  )
}

export default observer(Appointments);



