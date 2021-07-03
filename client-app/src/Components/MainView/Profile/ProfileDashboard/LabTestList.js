import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'; 
import React, { useState } from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';

export default function LabTestList({labtests,selectLabTest, deleteLabTest, submittingLabTest}){
    return(
        <Segment>
             <Table/>
                  <TableBody>
                    {
                      labtests.map(labtest =>(
                          <TableRow key={labtest.id}>
                          <TableCell style={{width:'120px', color:'purple'}}><b>{labtest.name}</b></TableCell>
                          <TableCell>
                            <TableRow>
                              <p style={{width:'120px',paddingTop:'20px', fontSize:'12px', marginRight:'5px'}}><b>Date</b></p><TableCell>{labtest.date}</TableCell>
                            </TableRow>
                            <TableRow>
                            <p style={{width:'120px',paddingTop:'20px', fontSize:'12px', marginRight:'10px'}}><b>Result of test</b></p><TableCell>{labtest.location}</TableCell>
                            </TableRow>
                          </TableCell>
                          <TableCell></TableCell>
                          <TableCell>
                          <ButtonGroup variant="text" style={{width:'165px'}}>
                            <Button onClick={() => selectLabTest(labtest.id)} color="">Edit</Button>
                            <Button onClick={() => deleteLabTest(labtest.id)} color=""><i class="window close outline icon"></i></Button>
                          </ButtonGroup>
                          </TableCell>
                          <TableCell></TableCell> 
                        </TableRow>
                      ))
                    }
                  </TableBody>
        </Segment>
    )
}