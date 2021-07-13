import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function WorkingHoursForm() {
    //const days = [{ text: "Monday", value: "Monday" }, { text: "Tuesday", value: "Tuesday" }, { text: "Wednesday", value: "Wednesday" }, { text: "Thursday", value: "Thursday" }
      //  , { text: "Friday", value: "Friday" }, { text: "Saturday", value: "Saturday" }, { text: "Sunday", value: "Sunday" }
    //]
    const {workingHoursStore} = useStore();
    const {selectedWorkingHour, closeForm, createWorkingHour, updateWorkingHour, loading} = workingHoursStore

    const initialState = selectedWorkingHour ?? {
        id: "",
        name: "",
        from: "",
        to: ""
    };

    const [workinghour, setWorkingHours] = useState(initialState);

    function handleSubmit(){
        workinghour.id ? updateWorkingHour(workinghour) : createWorkingHour(workinghour);
    }

    function handleInputChange(event){
        const{name, value} = event.target;
        setWorkingHours({...workinghour, [name]: value});
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Day' value={workinghour.name} name='name' onChange={handleInputChange}/>
                <Form.Input type='time' placeholder='From' value={workinghour.from} name='from' onChange={handleInputChange}/>
                <Form.Input type='time' placeholder='To' value={workinghour.to} name='to' onChange={handleInputChange}/>
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>

    )
})   