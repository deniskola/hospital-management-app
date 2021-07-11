import React, { useState } from "react";
import { Button, Form} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function BodyInfoFrom (){
    const{bodyInfoStore} = useStore();
    const {selectedBodyInfo, cancelSelectedBodyInfo, createBodyInfo, updateBodyInfo, loading} = bodyInfoStore;

    const initialState = selectedBodyInfo ?? {
        id: "",
        mosha: "",
        pesha: "",
        grupiGjakut: "",
        gjatesia: ""
    };
    const [bodyinfo, setBodyInfos] = useState(initialState);

    function handleSubmit() {
        bodyinfo.id ? updateBodyInfo(bodyinfo) : createBodyInfo(bodyinfo);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setBodyInfos({ ...bodyinfo, [name]: value });
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="off" style={{width:'350px', margin:'0px 13px 13px 13px',padding:'20px', marginBottom:'10px'}}>
        <Form.Field >
            <input placeholder='Age...' name='age' value={bodyinfo.mosha} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field >
            <input placeholder='Weight...'  name='weight' value={bodyinfo.pesha} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field >
            <input placeholder='Bood Group...'  name='grupiGjakut' value={bodyinfo.grupiGjakut} onChange={handleInputChange}/>
        </Form.Field>
        <Form.Field>
            <input placeholder='Height...'  name='gjatesia' value={bodyinfo.gajtesia} onChange={handleInputChange}/>
        </Form.Field> 
        <Button loading={loading}  type='submit' color="green">Submit</Button>
        <Button onClick={cancelSelectedBodyInfo} type='button' color="gray">Cancel</Button>
        </Form>

    )
})