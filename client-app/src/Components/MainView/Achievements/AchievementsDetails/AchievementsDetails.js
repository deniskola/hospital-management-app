import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react'
import { useStore } from '../../../../stores/store';

export default function AchievementsDetails() {
    const {achievementsStore, userStore} = useStore();
    const {selectedAchievement: achievement, openForm, cancelSelectedAchievement} = achievementsStore;
    const {user} = userStore;

    if(!achievement) return;

    return (
        <Card fluid>
            <Image src={`/assets/${achievement.photo}.png`} />
            <Card.Content>
                <Card.Header>{achievement.title}</Card.Header>
                <Card.Description>
                   {achievement.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    {user.role === "superadmin" && (
                        <Button onClick={() => openForm(achievement.id)} basic color='blue' content='Edit'/>
                    )}
                    <Button onClick={cancelSelectedAchievement} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}