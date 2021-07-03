import React, { useState } from "react";
import { Button, Form, Segment, TableRow} from 'semantic-ui-react';


export default function PatientLabTestFrom({ labtest: selectedLabTest, closeLabTestForm, createOrEdit, submittingLabTest }){

    const initialState = selectedLabTest ?? {
        id: '',
        name: '',
        date: '',
        location: '',
    };

    const [labtest, setLabTests] = useState(initialState);

    function handleSubmit() {
       createOrEdit(labtest);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLabTests({ ...labtest, [name]: value });
    }

    return (
        <Segment>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'auto', backgroundColor:'#e6e6ff', padding:'10px'}}>
            <TableRow style={{display:'flex', flexDirection:'row', width:'100%'}}>
                <Form.Field>
                    <input placeholder='Name of Test..'  value={labtest.name}  name='name' onChange={handleInputChange}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Date of Test...' style={{width:'200px', marginLeft:'30px'}} value={labtest.date} name='date' onChange={handleInputChange}/>
                </Form.Field> 
                <Form.Field>
                    <textarea placeholder='Results of test...' style={{width:'350px', marginLeft:'30px', height:'40px', marginBottom:'20px'}} value={labtest.location} name='location' onChange={handleInputChange}/>
                </Form.Field>   
            </TableRow>
            <Button onClick={submittingLabTest} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={closeLabTestForm} type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    )
}

/* return (
        <Segment>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'400px', backgroundColor:'#e6e6ff', padding:'40px'}}>
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name of Test..'  value={labtest.name}  name='name' onChange={handleInputChange}/>
            </Form.Field>
            <Form.Field>
                    <label>Date</label>
                    <input placeholder='Date of Test...' value={labtest.date} name='date' onChange={handleInputChange}/>
            </Form.Field> 
            <Form.Field>
                    <label>Results</label>
                    <textarea placeholder='Results of test...' value={labtest.location} name='location' onChange={handleInputChange}/>
            </Form.Field>   
            <Button onClick={submittingLabTest} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={closeLabTestForm} type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    ) */