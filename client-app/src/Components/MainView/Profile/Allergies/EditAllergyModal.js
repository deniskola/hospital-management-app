import React, {Component} from 'react';
import {Modal, Button , Row, Col, Form} from 'react-bootstrap'

export class EditAllergyModal extends Component{
    constructor(props){
        super(props);
       
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
                Edit Allergy
            </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Row>
            <Col sm={2}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="PacientiID">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="id" resquired
                         disabled
                         defaultValue={this.props.aid}
                         resquired placeholder="ID"
                         />
                    </Form.Group>
                    <Form.Group controlId="Type">
                        <Form.Label>Type of Allergy</Form.Label>
                        <Form.Control type="text" name="Type of Allergy" resquired defaultValue={this.props.aType}  placeholder="Type of Allergy"/>
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="Description" resquired defaultValue={this.props.adesc} placeholder="Description"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Allergy
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