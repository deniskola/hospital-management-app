import React, { useEffect, useState } from 'react';
import WorkingHoursDashboard from './WorkingHoursDashboard/WorkingHoursDashboard';
import agent from '../../../api/agent';

function WorkingHours() {
    const [workinghours, setWorkingHours] = useState([]);
    const [selectedWorkingHour, setSelectedWorkingHour] = useState(undefined);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        agent.WorkingHours.list().then(response => {
            let workinghours = [];
            response.forEach(workinghour => {
                workinghour.from = workinghour.from.split('T')[1]
                workinghour.from = workinghour.from.split('.')[0];
                workinghour.to = workinghour.to.split('T')[1];
                workinghour.to = workinghour.to.split('.')[0];
                workinghours.push(workinghour);
            })
            setWorkingHours(workinghours);
        })
    }, [])

    function handleSelectWorkingHour(id) {
        setSelectedWorkingHour(workinghours.find(x => x.id === id));
    }
    function handleCancelSelectWorkingHour() {
        setSelectedWorkingHour(undefined);
    }
    function handleFormOpen(id) {
        id ? handleSelectWorkingHour(id) : handleCancelSelectWorkingHour();
        setEditMode(true);
    }
    function handleFormClose() {
        setEditMode(false);
    }
    function handleCreateOrEditWorkingHour(workinghour){
        setSubmitting(true);
        if(workinghour.id) {
            agent.WorkingHours.update(workinghour).then(() => {
                setWorkingHours([...workinghours.filter(x => x.id !== workinghour.id), workinghour])
                setSelectedWorkingHour(workinghour);
                setEditMode(false);
                setSubmitting(false);
            })
        } else {
            workinghour.id = undefined;
            agent.WorkingHours.create(workinghour).then(() => {
                setWorkingHours([...workinghours, workinghour]);
                setSelectedWorkingHour(workinghour);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }
    function handleDeleteWorkingHour(id){
        setSubmitting(true);
        agent.WorkingHours.delete(id).then(() => {
            setWorkingHours([...workinghours.filter(x => x.id !== id)])
            setSubmitting(false);
        })
        
    }
    return (
        <>

            <WorkingHoursDashboard
                workinghours={workinghours}
                selectedWorkingHour={selectedWorkingHour}
                selectWorkingHour={handleSelectWorkingHour}
                cancelSelectWorkingHour={handleCancelSelectWorkingHour}
                editMode={editMode}
                openForm={handleFormOpen}
                closeForm={handleFormClose}
                createOrEdit={handleCreateOrEditWorkingHour}
                deleteWorkingHour={handleDeleteWorkingHour}
                submitting={submitting}
            />

        </>
    )
}

export default WorkingHours;