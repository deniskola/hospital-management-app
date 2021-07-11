import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

export default function AchievementsForm({
    achievement: selectedAchievement,
    closeForm,
    createOrEdit,
    submitting
}) {

    const initialState = selectedAchievement ?? {
        id: '',
        photo: '',
        title: '',
        description: ''
    }

    const [achievement, setAchievement] = useState(initialState);

    function handleSubmit() {
        createOrEdit(achievement);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAchievement({ ...achievement, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={achievement.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={achievement.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Photo' value={achievement.photo} name='photo' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}