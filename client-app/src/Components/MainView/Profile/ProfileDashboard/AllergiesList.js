import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { Button, ButtonGroup, Segment} from 'semantic-ui-react';

export default function AllergiesList({allergies, deleteAllergy, openModalForm, submitting}){
  const [target, setTarget] = useState('');

  function handleAllergyDelete(e, id){
    setTarget(e.currentTarget.name);
    deleteAllergy(id);
  }
    return(
        <Segment>
            <Table
                  tableHead={[]}
                  tableData={[]}
                  />
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      allergies.map(pAllergies =>(
                          <TableRow key={pAllergies.id}>
                          <TableCell>{pAllergies.type}</TableCell>
                          <TableCell>{pAllergies.description}</TableCell>
                          <TableCell>
                          <ButtonGroup variant="text">
                            <Button  onClick={() => openModalForm(pAllergies.id)} basic color='purple' width='1'><i class="edit icon"></i></Button>
                            <Button  name={pAllergies.id} loading={submitting && target === pAllergies.id} onClick={(e) => handleAllergyDelete(e, pAllergies.id)} basic color='purple' width='1'><i class="trash icon"></i></Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
        </Segment>
    )
}