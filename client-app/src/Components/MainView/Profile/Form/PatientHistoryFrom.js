import React, { useState } from "react";
import { Button, Form, Segment, TableRow} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function PatientHistoryFrom(){
    const{patientHistoryStore} = useStore();
    const {selectedPatientHistory, cancelSelectedPatientHistory, createPatientHistory, updatePatientHistory, loading} = patientHistoryStore;

    const initialState = selectedPatientHistory ?? {
        id: '',
        date: '',
        descritpion: '',
    };

    const [patientHistory, setPatientHistories] = useState(initialState);

    function handleSubmit() {
        patientHistory.id ? updatePatientHistory(patientHistory) : createPatientHistory(patientHistory);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPatientHistories({ ...patientHistory, [name]: value });
    }

    return (
        <Segment style={{marginLeft:'14px', marginBottom:'15px'}}>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'830px', backgroundColor:'#e6e6ff', padding:'10px 10px 10px 10px'}}>
        <TableRow style={{display:'flex', flexDirection:'row', width:'100%'}}>
            <Form.Field>
                <label>Date</label>
                <input placeholder='Date of history..'  value={patientHistory.date}   name='date'  onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <label>Description</label>
                    <textarea placeholder='Description of history...'  style={{marginRight:'20px',marginLeft:'20px', width:'400px', height:'20px'}}  value={patientHistory.descritpion}  name='descritpion'  onChange={handleInputChange}/>
            </Form.Field>   
            <Button loading={loading} type='submit' variant="primary" color="green" style={{height:'40px', marginTop:'30px'}}>Submit</Button>
            <Button onClick={cancelSelectedPatientHistory} type="button" color="gray" style={{height:'40px', marginTop:'30px'}}>Cancel</Button>
        </TableRow>
        </Form>
        </Segment>
    )
})
