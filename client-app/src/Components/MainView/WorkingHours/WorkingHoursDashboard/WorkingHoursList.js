import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Item, Segment, Button, Header } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function WorkingHoursList() {
    const {workingHoursStore, userStore} = useStore();
    const {deleteWorkingHour, workingHoursByDay, loading} = workingHoursStore;
    const {user} = userStore;
    const [target, setTarget] = useState('');

    function handleWorkingHourDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteWorkingHour(id);
    }

    return (
        <Segment>
            <Header dividing icon='stopwatch' as='h1' content='WORKING HOURS'></Header>
            <Item.Group divided>
                {workingHoursByDay.map(workinghour => (
                    <Item key={workinghour.id}>
                        <Item.Content>
                            <Item.Header>{workinghour.name}</Item.Header>
                        </Item.Content>
                        <Button onClick={() => workingHoursStore.selectWorkingHour(workinghour.id)} floated='right' content='View' color='blue' />
                        {user.role === "superadmin" && (
                            <Button
                                name={workinghour.id} 
                                loading={loading && target === workinghour.id} 
                                onClick={(e) => handleWorkingHourDelete(e, workinghour.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red'
                            />
                        )}
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})
