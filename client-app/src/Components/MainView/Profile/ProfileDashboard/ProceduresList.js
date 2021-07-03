import React, { useState } from "react";
import {Segment, Button} from 'semantic-ui-react';
import { Table, TableBody, TableCell, TableHead, TableRow, ButtonGroup } from '@material-ui/core'; 
import {Modal} from 'react-bootstrap';
import ProceduresForm from '../Form/ProceduresForm';

export default function ProceduresList({procedures,selectProcedure, deleteProcedure,openProcedureForm, submittingProcedures}){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Segment>
             <table>
                  <body>
                    {
                      procedures.map(procedure =>(
                      <tr class="tabela">
                        <tr key={procedure.id}> 
                          <td>Procedure</td>
                          <td style={{width:'150px', color:'purple'}}><b>{procedure.name}</b></td>
                        </tr>
                        <tr>
                          <td>Date:</td>
                          <td><b>{procedure.date}</b></td>
                        </tr>
                        <tr>
                          <td><p style={{marginRight:'10px'}}>Location on Body:</p></td>
                          <td style={{marginBottom:'20px', marginLeft:'20px'}}><b>{procedure.locationOnBody}</b></td>
                        </tr>
                        <br></br>
                        <tr>
                          <ButtonGroup class="ui small basic icon buttons">
                            <Button basic onClick={() => selectProcedure(procedure.id)}  class="ui button"><i class="edit icon"></i></Button>
                            <Button onClick={() => deleteProcedure(procedure.id)} class="ui button"><i class="window close outline icon"></i></Button>
                          </ButtonGroup>
                        </tr>
                        <br></br><br></br><br></br>
                      </tr>
                      ))}
                  </body>
                </table>
        </Segment>
    )
}