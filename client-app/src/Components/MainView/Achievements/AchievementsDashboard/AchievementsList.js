import React, { useState } from 'react';
import { Item, Segment, Button, Label } from 'semantic-ui-react';

export default function AchievementsList({ 
    achievements,
    selectAchievement,
    deleteAchievement,
    submitting
}) {

    const [target, setTarget] = useState('');

    function handleAchievementDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteAchievement(id);
    }

    return(
        <Segment>
            <Item.Group divided>
                {achievements.map(achievement => (
                    <Item key={achievement.id}>
                        <Item.Content>
                            <Item.Header as='a'>{achievement.title}</Item.Header>
                            <Item.Description>{achievement.description}</Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectAchievement(achievement.id)} floated='right' content='View' color='blue' />
                                <Button 
                                    name={achievement.id}
                                    loading={submitting && target === achievement.id} 
                                    onClick={(e) => handleAchievementDelete(e, achievement.id)} 
                                    floated='right' 
                                    content='Delete' 
                                    color='red'
                                />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}