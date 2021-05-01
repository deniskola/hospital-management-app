import React from 'react';
import AppointmentsContainer from './Appointments.styles';


const Appointments = () => {

  return (
    <AppointmentsContainer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='header'>
        <button className='lefth'>DATE</button> 
        &nbsp;&nbsp;&nbsp;       
        <button className='lefth'>DOCTOR</button>
        &nbsp;&nbsp;&nbsp;
        <button className='lefth'>SERVICES</button>
        <button className='righth'>ADD APPOINTMENT</button>
      </div>
      <div className='title'>
        <h1>APPOINTMENTS</h1>
      </div>
      <div className='main'>
      <table class="content-table">
  <thead>
    <tr>
      <th>No #.</th>
      <th>Doctor</th>
      <th>Appointment Date</th>
      <th>Customer Name</th>
      <th>Services</th>
      <th>Status</th>
      <th><button class="btn"><i class="fa fa-trash"></i></button></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Domenic Smith</td>
      <td>01-May-2021</td>
      <td>Rinor Restelica</td>
      <td>Dental Examination</td>
      <td>Approved</td>
      <td></td>
    </tr>
    <tr class="active-row">
      <td>2</td>
      <td>Joe Jones</td>
      <td>01-May-2021</td>
      <td>Lavdim Menxhiqi</td>
      <td>Dental Examination</td>
      <td>Pending</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nick Jackson</td>
      <td>01-May-2021</td>
      <td>Blerim Zylfiu</td>
      <td>Dental Examination</td>
      <td>Cancelled</td>
      <td></td>
    </tr>
  </tbody>
</table>
      </div>
    </AppointmentsContainer>

    
  );
  
}



export default Appointments