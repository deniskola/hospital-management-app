import React, { useState } from 'react';
import { Item, Segment, Button } from 'semantic-ui-react';

export default function WorkingHoursList({ workinghours, selectWorkingHour, deleteWorkingHour, submitting }) {
    
    const [target, setTarget] = useState('');

    function handleWorkingHourDelete(e, id){
        setTarget(e.currentTarget.name);
        deleteWorkingHour(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {workinghours.map(workinghour => (
                    <Item key={workinghour.id}>
                        <Item.Content>
                            <Item.Header>{workinghour.name}</Item.Header>
                        </Item.Content>
                        <Button onClick={() => selectWorkingHour(workinghour.id)} floated='center' content='View' color='blue' />
                        <Button
                            name={workinghour.id} 
                            loading={submitting && target === workinghour.id} 
                            onClick={(e) => handleWorkingHourDelete(e, workinghour.id)} 
                            floated='center' 
                            content='Delete' 
                            color='red'
                        />
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}
