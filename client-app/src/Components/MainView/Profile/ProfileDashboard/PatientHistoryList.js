import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'; 
import React  from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';
import {Modal} from 'react-bootstrap';
                                          
export default function PatientHistoryList({patienthistories, selectPatientHistory, deletePatientHistory,openHistoryForm, submittingHistory}){
    //const [show, setShow] = useState(false);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    return (
        <Segment>
            <Table />
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Date</b></TableCell>
                      <TableCell><b>Description</b></TableCell>
                      <TableCell><b>Doctor</b></TableCell>
                      <TableCell style={{marginLeft:'50px'}}><b> Edit / Delete </b></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      patienthistories && patienthistories.map(patientHistory =>(
                          <TableRow key={patientHistory.id}>
                          <TableCell style={{width:'100px', color:'purple'}}><b>{patientHistory.date}</b></TableCell>
                          <TableCell style={{width:'300px'}}>{patientHistory.descritpion}</TableCell>
                          <TableCell style={{width:'200px'}}><i class="stethoscope icon"></i></TableCell>
                          <TableCell>
                          <ButtonGroup variant="text" >
                            <Button onClick={() => selectPatientHistory(patientHistory.id)} basic color="purple">Edit</Button>
                            <Button onClick={() => deletePatientHistory(patientHistory.id)} basic  color="black">Delete</Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>

                  {/*<Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                          <Modal.Title>
                            Edit History
                          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <PatientHistoryFrom />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                    </Modal.Footer>
                  </Modal>
                  
                  onClick={() => selectPatientHistory(patientHistory.id),*/}
        </Segment>
    )
}