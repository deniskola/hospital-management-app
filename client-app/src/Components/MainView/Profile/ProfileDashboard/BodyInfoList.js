import React, { useState } from "react";
import {Segment, Button} from 'semantic-ui-react';
import { Table, TableBody, TableCell, TableHead, TableRow, ButtonGroup } from '@material-ui/core'; 
import {Modal} from 'react-bootstrap';
import BodyInfoFrom from '../Form/BodyInfoFrom';

export function BodyInfoList ({bodyinfos, openBodyInfoForm, selectBodyInfo}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Segment clearing>
            <Table/>
                  <TableBody>
                    {
                     bodyinfos.map(bodyinfo => (
                          <TableRow>
                                <TableRow key={bodyinfo.id}> 
                                    <TableCell><b>Age:</b></TableCell>
                                    <TableCell>{bodyinfo.mosha}</TableCell>
                                    <ButtonGroup>
                                        <Button basic onClick={() => handleShow(bodyinfo.id)} color='black' style={{marginTop:'5px', marginLeft:'100%'}}><i class="edit icon"></i></Button>
                                    </ButtonGroup>
                                </TableRow>
                                <TableRow >
                                    <TableCell><b>Weight:</b></TableCell>
                                    <TableCell>{bodyinfo.pesha}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Blood group:</b></TableCell>
                                    <TableCell>{bodyinfo.grupiGjakut}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Height:</b></TableCell>
                                    <TableCell>{bodyinfo.gjatesia}</TableCell>
                                </TableRow>
                          </TableRow>
                      ))}
                  </TableBody>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                          <Modal.Title>
                           Body Informations
                          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <BodyInfoFrom />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                    </Modal.Footer>
                  </Modal>
        </Segment>
    )
}