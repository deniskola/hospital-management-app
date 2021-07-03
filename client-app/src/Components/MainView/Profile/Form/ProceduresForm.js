import React, { useState } from "react";
import { Button, Form, Segment} from 'semantic-ui-react';


export default function ProceduresForm({ procedure: selectedProcedure, closeProcedureForm, createOrEditProcedure, submittingProcedure }){

    const initialState = selectedProcedure ?? {
        id: '',
        name: '',
        date: '',
        locationOnBody: '',
    };

    const [procedure, setProcedures] = useState(initialState);

    function handleSubmitProcedure() {
       createOrEditProcedure(procedure);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setProcedures({ ...procedure, [name]: value });
    }

    return (
        <Segment>
        <Form onSubmit={handleSubmitProcedure} autoComplete='off' style={{width:'300px'}}>
            <Form.Field>
                <input placeholder='Name of Procedure..'  value={procedure.name}  name='name' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <input type="date" placeholder='Date of Procedure...' value={procedure.date} name='date' onChange={handleInputChange}/>
            </Form.Field> 
            <Form.Field>
                    <input placeholder='Location on body...' value={procedure.locationOnBody} name='locationOnBody' onChange={handleInputChange}/>
            </Form.Field>   
            <Button onClick={submittingProcedure} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={closeProcedureForm} type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    )
}