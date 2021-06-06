import React, { useState } from "react";
import { Button, Form, Modal } from 'semantic-ui-react';

export default function AllergiesModalForm({allergy : selectedAllergy, closeModalForm, createOrEdit, submitting}){

    const initialState = selectedAllergy ?? {
        id: "",
        type: "",
        description: "",
    };
    const [allergy, setAllergy] = useState(initialState);

    function handleSubmit() {
        createOrEdit(allergy);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAllergy({ ...allergy, [name]: value });
    }

    return (
        <Modal
            header='header'
            content={
                <Form onSubmit={handleSubmit} autoComplete="off">
                    <Form.Field onChange={handleInputChange}>
                        <label>Type</label>
                        <input placeholder='Type of allergy...' />
                        </Form.Field>
                        <Form.Field onChange={handleInputChange}>
                            <label>Description</label>
                            <textarea placeholder='Description of allergy...' />
                        </Form.Field>   
                        <Button onClick={closeModalForm} type='submit'>Cancel</Button>
                        <Button loading={submitting} type='submit'>Submit</Button>
                </Form>
            }
            actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
      />
    )
}