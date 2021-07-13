import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function AchievementsForm() {
    const {achievementsStore} = useStore();
    const {selectedAchievement, closeForm, createAchievement, updateAchievement, loading} = achievementsStore;

    const initialState = selectedAchievement ?? {
        id: '',
        photo: '',
        title: '',
        description: ''
    }

    const [achievement, setAchievement] = useState(initialState);

    function handleSubmit() {
        achievement.id ? updateAchievement(achievement) : createAchievement(achievement);
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
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})