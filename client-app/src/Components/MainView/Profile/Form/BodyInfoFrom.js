import React, { useState } from "react";
import { Button, Form} from 'semantic-ui-react';

export default function BodyInfoFrom ({bodyinfo: selectedBodyInfo, createOrEdit, closeBodyInfoForm, submittingBodyInfo}){

    const initialState = selectedBodyInfo ?? {
        id: "",
        mosha: "",
        pesha: "",
        grupiGjakut: "",
        gjatesia: ""
    };

    const [bodyinfo, setBodyInfos] = useState(initialState);

    function handleSubmit() {
        createOrEdit(bodyinfo);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setBodyInfos({ ...bodyinfo, [name]: value });
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Field >
            <label>Age</label>
            <input placeholder='Age...' name='age' value={bodyinfo.mosha} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field >
            <label>Weight</label>
            <input placeholder='Weight...'  name='weight' value={bodyinfo.pesha} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field >
            <label>Blood Group</label>
            <input placeholder='Bood Group...'  name='grupiGjakut' value={bodyinfo.grupiGjakut} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field o>
            <label>Height</label>
            <input placeholder='Height...'  name='gjatesia' value={bodyinfo.gajtesia} onChange={handleInputChange}/>
        </Form.Field> 
        <Button onClick={submittingBodyInfo} type='submit' color="green">Submit</Button>
        <Button onClick={closeBodyInfoForm} type='button' color="gray">Cancel</Button>
    </Form>
    )
}