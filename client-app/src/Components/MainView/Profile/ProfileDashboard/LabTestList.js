import { TableBody, TableCell,TableRow } from '@material-ui/core'; 
import React, { useState } from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function LabTestList (){
  const {labTestStore} = useStore();
  const {deleteLabTest, labtestsByName, loading} = labTestStore;
  const { userStore } = useStore();
  const { user } = userStore;
  const [target, setTarget] = useState("''");

  function handleLabTestDelete( e, id){
    setTarget(e.currentTarget.name);
    deleteLabTest(id);
  } 
  
    return(
        <Segment style={{margin:'0px 14px 10px 13px', width:'980px'}}>
             <Table/>
                  <TableBody>
                    {
                      labtestsByName.map((labtest) =>(
                          <TableRow key={labtest.id}>
                            <TableCell style={{width:'200px', color:'purple'}}><b>{labtest.name}</b></TableCell>
                            <TableCell>
                              <TableRow>
                                <p style={{paddingTop:'20px', fontSize:'12px', marginRight:'5px'}}><b>Date</b></p><TableCell>{labtest.date}</TableCell>
                              </TableRow>
                              <TableRow>
                                <p style={{paddingTop:'20px', fontSize:'12px', marginRight:'10px'}}><b>Result of test</b></p><TableCell>{labtest.location}</TableCell>
                              </TableRow>
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                            {user.role === "admin" && (
                              <ButtonGroup variant="text" style={{width:'165px', marginLeft:'100px'}}>
                                <Button onClick={() => labTestStore.selectLabTest(labtest.id)} basic color="purple">Edit</Button>
                                <Button name={labtest.id}
                                        loading={loading && target === labtest.id}
                                        onClick={(e) => handleLabTestDelete(e, labtest.id)}  basic color="black"><i class="window close icon"></i></Button>
                              </ButtonGroup>
                              )}
                            </TableCell>
                            <TableCell></TableCell> 
                          </TableRow>
                      ))
                    }
                  </TableBody>
        </Segment>
    );
});