import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'; 
import React, { useState } from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';
import AllergiesForm from '../Form/AllergiesForm';
import {Modal} from 'react-bootstrap';

export default function AllergiesList({allergies, selectAllergy, deleteAllergy, submitting, openForm}){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <Segment>
            <Table/>
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Type</b></TableCell>
                      <TableCell><b>Description</b></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      allergies && allergies.map(pAllergies =>(
                          <TableRow key={pAllergies.id}>
                          <TableCell>{pAllergies.type}</TableCell>
                          <TableCell>{pAllergies.description}</TableCell>
                          <TableCell>
                          <ButtonGroup variant="text">
                            <Button  onClick={() => selectAllergy(pAllergies.id)} basic color='purple' width='1'><i class="edit icon"></i></Button>
                            <Button loading={submitting} onClick={() => deleteAllergy(pAllergies.id)} basic color='black' width='1'><i class="trash icon"></i></Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>

                  {/*<Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                          <Modal.Title>
                            Edit Allergy
                          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AllergiesForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                    </Modal.Footer>
                  </Modal>*/}
        </Segment>
    )
}

//onClick={() => selectAllergy(pAllergies.id)} onClick={() =>openForm(pAllergies.id)} 