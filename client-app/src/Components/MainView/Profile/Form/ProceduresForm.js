import React, { useState } from "react";
import { Button, Form, Segment} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function ProceduresForm(){
    const{proceduresStore} = useStore();
    const {selectedProcedure, cancelSelectedProcedure, createProcedure, updateProcedure, loading} = proceduresStore;

    const initialState = selectedProcedure ?? {
        id: '',
        name: '',
        date: '',
        locationOnBody: '',
    };

    const [procedure, setProcedures] = useState(initialState);

    function handleSubmit() {
        procedure.id ? updateProcedure(procedure) : createProcedure(procedure);
     }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setProcedures({ ...procedure, [name]: value });
    }

    return (
        <Segment>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'300px'}}>
            <Form.Field>
                <input placeholder='Name of Procedure..'  value={procedure.name}  name='name' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <input type="date" placeholder='Date of Procedure...' value={procedure.date} name='date' onChange={handleInputChange}/>
            </Form.Field> 
            <Form.Field>
                    <input placeholder='Location on body...' value={procedure.locationOnBody} name='locationOnBody' onChange={handleInputChange}/>
            </Form.Field>   
            <Button loading={loading} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={cancelSelectedProcedure} type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    )
})