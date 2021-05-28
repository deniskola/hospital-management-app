import React, {Component} from 'react';
import {Modal, Button , Row, Col, Form} from 'react-bootstrap'

export class AddAllergyModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/'+'Pacienti',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TypeofAllergy:event.target.TypeofAllergy.value,
                Description:event.target.Description.value,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    
    render(){
        return(
        <div className="container">
    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add Allergy
            </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={2}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Type">
                        <Form.Label>Type of Allergy</Form.Label>
                        <Form.Control type="text" name="TypeofAllergy" resquired placeholder="Type of Allergy"/>
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" resquired placeholder="Description"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="success" type="submit">
                            Add Allergy
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    </div>
        )
    }
}