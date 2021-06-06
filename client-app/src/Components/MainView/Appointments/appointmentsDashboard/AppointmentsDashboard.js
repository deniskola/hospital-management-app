import React from 'react';
import AppointmentsForm from '../appointmentsForm/AppointmentsForm';
import AppointmentsTable from './AppointmentsTable';
import AppointmentsDetails from '../appointmentsDetails/AppointmentsDetails'

export default function AppointmentsDashboard({ appointments,
    selectedAppointment,
    selectAppointment,
    cancelSelectAppointment,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteAppointment,
    submitting
}) {
    return (
        <div>
            <AppointmentsTable
                appointments={appointments}
                selectAppointment={selectAppointment}
                deleteAppointment={deleteAppointment}
                submitting={submitting}
            />
            {selectedAppointment && !editMode && (
                <AppointmentsDetails
                    appointment={selectedAppointment}
                    cancelSelectAppointment={cancelSelectAppointment}
                    openForm={openForm}
                />)}
            {editMode && (
                <AppointmentsForm
                    closeForm={closeForm}
                    appointment={selectedAppointment}
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />)}
        </div>
    )
}