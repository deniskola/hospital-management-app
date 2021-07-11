import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react'


export default function AchievementsDetails({ 
    achievement,
    cancelSelectAchievement,
    openForm,

}) {
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
                    <Button onClick={() => openForm(achievement.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectAchievement} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}