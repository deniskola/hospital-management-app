import React, { useState } from "react";
import { Button, Form} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function AllergiesForm(){
    const{allergiesStore} = useStore();
    const {selectedAllergy, cancelSelectedAllergy, createAllergy, updateAllergy, loading} = allergiesStore;
    
    const initialState = selectedAllergy ?? {
        id: '',
        type: '',
        description: '',
    };
    const [pAllergies, setAllergies] = useState(initialState);

    function handleSubmit() {
        pAllergies.id ? updateAllergy(pAllergies) : createAllergy(pAllergies);
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
            <Button loading={loading} type='submit' color="green">Submit</Button>
            <Button onClick={cancelSelectedAllergy} type="submit" color="gray">Cancel</Button>
        </Form>
    )
})


