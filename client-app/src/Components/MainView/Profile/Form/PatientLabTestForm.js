import React, { useState } from "react";
import { Button, Form, Segment, TableRow} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer (function PatientLabTestFrom(){
    const{labTestStore} = useStore();
    const {selectedLabTest, cancelSelectedLabTest, createLabTest, updateLabTest, loading} = labTestStore;

    const initialState = selectedLabTest ?? {
        id: '',
        name: '',
        date: '',
        location: '',
    };

    const [labtest, setLabTests] = useState(initialState);

    function handleSubmit() {
       labtest.id ? updateLabTest(labtest) : createLabTest(labtest);
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLabTests({ ...labtest, [name]: value });
    }

    return (
        <Segment style={{marginLeft:'14px', marginBottom:'15px'}}>
        <Form onSubmit={handleSubmit} autoComplete='off' style={{width:'830px', backgroundColor:'#e6e6ff', padding:'10px 40px 10px 40px'}}>
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
            <Button loading={loading} type='submit' variant="primary" color="green">Submit</Button>
            <Button onClick={cancelSelectedLabTest}  type="button" color="gray">Cancel</Button>
        </Form>
        </Segment>
    )
})

