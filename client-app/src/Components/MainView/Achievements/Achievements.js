import React, { useEffect, useState } from 'react';
import AchievementsDashboard from './AchievementsDashboard/AchievementsDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../../../api/agent';

function Achievements(){
    const [achievements, setAchievements] = useState([]);
    const [selectedAchievement, setSelectedAchievement] = useState(undefined);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        agent.Achievements.list().then(response => {
            setAchievements(response);
        })
    }, [])

    function handleSelectAchievement(id){
        setSelectedAchievement(achievements.find(x => x.id === id));
    }
    function handleCancelSelectAchievement(){
        setSelectedAchievement(undefined);
    }

    function handleFormOpen(id){
        id ? handleSelectAchievement(id) : handleCancelSelectAchievement();
        setEditMode(true);
    }
    function handleFormClose(){
        setEditMode(false);
    }

    function handleCreateOrEditAchievement(achievement){
        setSubmitting(true);
        if(achievement.id){
            agent.Achievements.update(achievement).then(() => {
                setAchievements([...achievements.filter(x => x.id !== achievement.id), achievement])
                setSelectedAchievement(achievement);
                setEditMode(false);
                setSubmitting(false);
            })
        } else{
            achievement.id = uuid();
            agent.Achievements.create(achievement).then(() => {
                setAchievements([...achievements, achievement])
                setSelectedAchievement(achievement);
                setEditMode(false);
                setSubmitting(false);
            })
        }
    }

    function handleDeleteAchievement(id){
        setSubmitting(true);
        agent.Achievements.delete(id).then(() => {
        setAchievements([...achievements.filter(x => x.id !== id)]);
        setSubmitting(false);
        })
    }

    return (
        <>
            <AchievementsDashboard 
                achievements={achievements}
                selectedAchievement={selectedAchievement}
                selectAchievement={handleSelectAchievement}
                cancelSelectAchievement={handleCancelSelectAchievement}
                editMode={editMode}
                openForm={handleFormOpen}
                closeForm={handleFormClose}
                createOrEdit={handleCreateOrEditAchievement}
                deleteAchievement={handleDeleteAchievement}
                submitting={submitting}
            />
        </>
    )
}
  
  export default Achievements