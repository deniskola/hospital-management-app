import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import AchievementsList from './AchievementsList';
import AchievementsDetails from '../AchievementsDetails/AchievementsDetails';
import AchievementsForm from '../AchievementsForm/AchievementsForm';

export default function AchievementsDashboard({ 
    achievements,
    selectedAchievement,
    selectAchievement,
    cancelSelectAchievement,
    editMode,
    openForm,
    closeForm,
    createOrEdit,
    deleteAchievement,
    submitting
}){
    return(
        <>
        <Header><Button onClick={openForm}>ADD NEW ACHIEVEMENT</Button></Header>
        <Grid>
            <Grid.Column width='10'>
            <AchievementsList 
                achievements={achievements}
                selectAchievement={selectAchievement}
                deleteAchievement={deleteAchievement}
                submitting={submitting}
            />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedAchievement && !editMode &&
                <AchievementsDetails 
                    achievement={selectedAchievement}
                    cancelSelectAchievement={cancelSelectAchievement}
                    openForm={openForm}
                />}
                {editMode &&
                <AchievementsForm 
                    closeForm={closeForm}
                    achievement={selectedAchievement}
                    createOrEdit={createOrEdit}
                    submitting={submitting}
                />}
            </Grid.Column>
        </Grid>
        </>
    )
}