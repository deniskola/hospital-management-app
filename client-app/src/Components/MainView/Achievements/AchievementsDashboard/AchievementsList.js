import React, { useState } from 'react';
import { useStore } from '../../../../stores/store';
import { Item, Segment, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

export default observer(function AchievementsList() {
    const {achievementsStore, userStore} = useStore();
    const {deleteAchievement, achievementsByTitle, loading} = achievementsStore;
    const [target, setTarget] = useState('');
    const {user} = userStore;

    function handleAchievementDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteAchievement(id);
    }

    return(
        <Segment clearing>
            <Item.Group divided>
                {achievementsByTitle.map(achievement => (
                    <Item key={achievement.id}>
                        <Item.Content>
                            <Item.Header as='a'>{achievement.title}</Item.Header>
                            <Item.Description>{achievement.description}</Item.Description>
                            <Item.Extra>
                                <Button onClick={() => achievementsStore.selectAchievement(achievement.id)} floated='right' content='View' color='blue' />
                                {user.role === "superadmin" && (
                                <Button 
                                    name={achievement.id}
                                    loading={loading && target === achievement.id} 
                                    onClick={(e) => handleAchievementDelete(e, achievement.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'
                                />)}
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})