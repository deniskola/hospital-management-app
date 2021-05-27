import React from 'react';
import AppointmentsContainer from './Appointments.styles';


const Appointments = () => {

  return (
    <AppointmentsContainer>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='header'>
        <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;DATE</button> 
        &nbsp;&nbsp;&nbsp;       
        <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;DOCTOR</button>
        &nbsp;&nbsp;&nbsp;
        <button className='lefth'><i class="fa fa-sort"></i>&nbsp;&nbsp;SERVICES</button>
        <button className='righth'><i class="fa fa-plus"></i>&nbsp;&nbsp;ADD APPOINTMENT</button>
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
      <th>Edit</th>
      <th>Delete</th>
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
      <td><button class="btn"><i class="fa fa-trash"></i></button></td>
      <td><button class="btn"><i class="fa fa-edit"></i></button></td>
    </tr>
    <tr class="active-row">
      <td>2</td>
      <td>Joe Jones</td>
      <td>01-May-2021</td>
      <td>Lavdim Menxhiqi</td>
      <td>Dental Examination</td>
      <td>Pending</td>
      <td><button class="btn"><i class="fa fa-trash"></i></button></td>
      <td><button class="btn"><i class="fa fa-edit"></i></button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nick Jackson</td>
      <td>01-May-2021</td>
      <td>Blerim Zylfiu</td>
      <td>Dental Examination</td>
      <td>Cancelled</td>
      <td><button class="btn"><i class="fa fa-trash"></i></button></td>
      <td><button class="btn"><i class="fa fa-edit"></i></button></td>
    </tr>
  </tbody>
</table>
      </div>
    </AppointmentsContainer>

    
  );
  
}



export default Appointments