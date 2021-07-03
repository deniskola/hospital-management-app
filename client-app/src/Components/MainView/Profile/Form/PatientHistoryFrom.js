import React, { useState } from "react";
import { Button, Form, Segment, TableRow} from 'semantic-ui-react';


export default function PatientHistoryFrom({ patientHistory: selectedPatientHistory, closeHistoryForm, createOrEdit, submittingHistory }){

    const initialState = selectedPatientHistory ?? {
        id: '',
        date: '',
        descritpion: '',
    };

    const [patientHistory, setPatientHistories] = useState(initialState);

    function handleSubmit() {
       createOrEdit(patientHistory);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setPatientHistories({ ...patientHistory, [name]: value });
    }

    return (
        <Segment>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'1000px', backgroundColor:'#e6e6ff', padding:'10px 40px 10px 40px'}}>
        <TableRow style={{display:'flex', flexDirection:'row', width:'100%'}}>
            <Form.Field>
                <label>Date</label>
                <input placeholder='Date of history..' value={patientHistory.date}  name='date' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <label>Description</label>
                    <textarea placeholder='Description of history...' style={{marginRight:'20px',marginLeft:'20px', width:'400px', height:'20px'}} value={patientHistory.descritpion} name='descritpion' onChange={handleInputChange}/>
            </Form.Field>   
            <Button onClick={submittingHistory} type='submit' variant="primary" color="green" style={{height:'40px', marginTop:'30px'}}>Submit</Button>
            <Button onClick={closeHistoryForm} type="button" color="gray" style={{height:'40px', marginTop:'30px'}}>Cancel</Button>
        </TableRow>
        </Form>
        </Segment>
    )
}

/*
return (
        <Segment>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'400px', backgroundColor:'#e6e6ff', padding:'40px', marginLeft:'200px'}}>
            <Form.Field>
                <label>Date</label>
                <input placeholder='Date of history..'  value={patientHistory.date}  name='date' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <label>Description</label>
                    <textarea placeholder='Description of history...' value={patientHistory.descritpion} name='descritpion' onChange={handleInputChange}/>
            </Form.Field>   
            <Button onClick={submittingHistory} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={closeHistoryForm} type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    )
 */