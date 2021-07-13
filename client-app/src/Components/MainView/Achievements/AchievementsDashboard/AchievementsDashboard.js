import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import AchievementsList from './AchievementsList';
import AchievementsDetails from '../AchievementsDetails/AchievementsDetails';
import AchievementsForm from '../AchievementsForm/AchievementsForm';
import { useStore } from '../../../../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(function AchievementsDashboard(){
    const {achievementsStore, userStore} = useStore();
    const {selectedAchievement, editMode} = achievementsStore;
    const {user} = userStore;

    return(
        <>
        {user.role === "superadmin" && (
            <Header><Button onClick={() => achievementsStore.openForm()}>ADD NEW ACHIEVEMENT</Button></Header>
        )}
        <Header dividing icon='trophy' as='h1' content='HOSPITAL X ACHIEVEMENTS'></Header>
        <Grid>
            <Grid.Column width='10'>
            <AchievementsList/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedAchievement && !editMode &&
                    <AchievementsDetails />}
                {editMode &&
                    <AchievementsForm />}
            </Grid.Column>
        </Grid>
        </>
    )
})