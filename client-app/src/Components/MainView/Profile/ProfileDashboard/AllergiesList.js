import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'; 
import React, { useState } from "react";
import { Table} from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer (function AllergiesList(){
  const {allergiesStore} = useStore();
  const {deleteAllergy, allergiesByType, loading} = allergiesStore;
  const { userStore } = useStore();
  const { user } = userStore;
  const [target, setTarget] = useState("''");

  function handleAllergyDelete( e, id){
    setTarget(e.currentTarget.name);
    deleteAllergy(id);
  } 
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
                      allergiesByType.map(pAllergies =>(
                          <TableRow key={pAllergies.id}>
                          <TableCell>{pAllergies.type}</TableCell>
                          <TableCell>{pAllergies.description}</TableCell>
                          <TableCell>
                          {user.role === "admin" && (
                          <ButtonGroup variant="text">
                            <Button  onClick={() => allergiesStore.selectAllergy(pAllergies.id)} basic color='purple' width='1'><i class="edit icon"></i></Button>
                            <Button name={pAllergies.id}
                                        loading={loading && target === pAllergies.id}
                                        onClick={(e) => handleAllergyDelete(e, pAllergies.id)}  basic color='black' width='1'><i class="trash icon"></i></Button>
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
