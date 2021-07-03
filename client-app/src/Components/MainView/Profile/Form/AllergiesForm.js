import React, { useState } from "react";
import { Button, Form} from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';

export default function AllergiesForm({pAllergies: selectedAllergy, createOrEdit,cancelSelectAllergy, closeForm, submitting}){

    const initialState = selectedAllergy ?? {
        id: '',
        type: '',
        description: '',
    };
    const [pAllergies, setAllergies] = useState(initialState);

    function handleSubmit() {
        createOrEdit(pAllergies);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAllergies({ ...pAllergies, [name]: value });
    }
    return (
        <Form  onSubmit={handleSubmit} autoComplete='off' style={{width:'400px', backgroundColor:'#e6e6ff', padding:'20px', marginLeft:'200px', marginBottom:'10px'}}>
            <Form.Field>
                <label>Type</label>
                <input placeholder='Type of allergy...'  value={pAllergies.type}  name='type' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <label>Description</label>
                    <textarea placeholder='Description of allergy...' style={{ height:'40px'}} value={pAllergies.description} name='description' onChange={handleInputChange}/>
            </Form.Field>   
            <Button onClick={submitting} type='submit' color="green">Submit</Button>
            <Button onClick={closeForm}  type="button" color="gray">Cancel</Button>
        </Form>


        /*<Modal show={show} onHide={handleClose} onSubmit={handleSubmit} autoComplete='off'>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Form  onSubmit={handleSubmit} autoComplete='off'>
                    <Form.Field>
                        <label>Type</label>
                        <input placeholder='Type of allergy...'  value={pAllergies.type}  name='type' onChange={handleInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <textarea placeholder='Description of allergy...' value={pAllergies.description} name='description' onChange={handleInputChange}/>
                    </Form.Field>   
                    <Button onClick={submitting} type='submit' color="green">Submit</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>*/
    )
}


