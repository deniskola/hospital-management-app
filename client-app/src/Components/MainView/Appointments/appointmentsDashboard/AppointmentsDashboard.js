import React from 'react';
import AppointmentsForm from '../appointmentsForm/AppointmentsForm';
import AppointmentsTable from './AppointmentsTable';
import AppointmentsDetails from '../appointmentsDetails/AppointmentsDetails'
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function AppointmentsDashboard() {
    const {appointmentsStore} = useStore();
    const {selectedAppointment, editMode} = appointmentsStore;
    return (
        <div>
            <AppointmentsTable />
            {selectedAppointment && !editMode && (
            <AppointmentsDetails />)}
            {editMode && (
            <AppointmentsForm />)}
        </div>
    )
})