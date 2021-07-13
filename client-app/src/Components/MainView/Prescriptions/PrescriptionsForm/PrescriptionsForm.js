import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function PrescriptionsForm(){
    const {prescriptionsStore} = useStore();
    const {selectedPrescription, closeForm, createPrescription, updatePrescription, loading} = prescriptionsStore;

    const initialState = selectedPrescription ?? {
        id: '',
        number: '',
        customerName: '',
        doctorName: '',
        rx: ''
    }

    const [prescription, setPrescription] = useState(initialState);
    //const idOptions = prescription.id;

    function handleSubmit(){
        prescription.id ? updatePrescription(prescription) : createPrescription(prescription);
    }
    function handleInputChange(event){
        const {name, value} = event.target;
        setPrescription({...prescription, [name]: value})
    }
    
    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Appointment ID' value={prescription.number} name='number' onChange={handleInputChange}/>
                <Form.Input placeholder='Customer Name' value={prescription.customerName} name='customerName' onChange={handleInputChange} />
                <Form.Input placeholder='Doctor Name' value={prescription.doctorName} name='doctorName' onChange={handleInputChange} />
                <Form.TextArea placeholder='RX' value={prescription.rx} name='rx' onChange={handleInputChange}/>
                <Button loading={loading} positive type='submit' content='Submit'/>
                <Button onClick={closeForm} type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})