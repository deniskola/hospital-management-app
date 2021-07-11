import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'; 
import React, { useState } from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";
                                          
export default observer(function PatientHistoryList(){
  const {patientHistoryStore} = useStore();
  const {deletePatientHistory, patienthistoriesByDescription, loading} = patientHistoryStore;
  const { userStore } = useStore();
  const { user } = userStore;
  const [target, setTarget] = useState("''");

  function handleHistoryDelete( e, id){
    setTarget(e.currentTarget.name);
    deletePatientHistory(id);
  } 
    return (
        <Segment style={{margin:'14px 14px 10px 13px', width:'980px'}}>
            <Table />
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Date</b></TableCell>
                      <TableCell style={{width:'550px'}}><b>Description</b></TableCell>
                      <TableCell><b>Doctor</b></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      patienthistoriesByDescription.map(patientHistory =>(
                          <TableRow key={patientHistory.id}>
                          <TableCell style={{width:'100px', color:'purple'}}><b>{patientHistory.date}</b></TableCell>
                          <TableCell style={{width:'300px'}}>{patientHistory.descritpion}</TableCell>
                          <TableCell style={{width:'200px'}}><i class="stethoscope icon"></i></TableCell>
                          <TableCell>
                          {user.role === "admin" && (
                          <ButtonGroup variant="text" >
                            <Button onClick={() => patientHistoryStore.selectPatientHistory(patientHistory.id)}  basic color="purple"><i class="edit outline icon"></i></Button>
                            <Button name={patientHistory.id}
                                        loading={loading && target === patientHistory.id}
                                        onClick={(e) => handleHistoryDelete(e, patientHistory.id)}  basic  color="black"><i class="trash alternate icon"></i></Button>
                          </ButtonGroup>
                          )}
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
        </Segment>
    )
})