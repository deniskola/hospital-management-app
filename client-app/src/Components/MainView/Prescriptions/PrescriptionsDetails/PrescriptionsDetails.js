import React from 'react';
import { Divider, Header, Icon, Table, Button } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default function PrescriptionsDetails(){
    const {prescriptionsStore, userStore} = useStore();
    const {selectedPrescription: prescription, openForm, cancelSelectedPrescription} = prescriptionsStore;
    const {user} = userStore;
    
    if(!prescription) return;

    return(
        <>
        <Divider horizontal>
        <Header as='h4'>
          <Icon name='hospital' />
          Prescription
        </Header>
      </Divider>
  
      <Table definition>
            <Table.Row>
              <Table.HeaderCell>AppointmentID</Table.HeaderCell>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Doctor Name</Table.HeaderCell>
              <Table.HeaderCell>RX</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        <Table.Row>
            <Table.Cell>{prescription.number}</Table.Cell>
            <Table.Cell>{prescription.customerName}</Table.Cell>
            <Table.Cell>{prescription.doctorName}</Table.Cell>
            <Table.Cell>{prescription.rx}</Table.Cell>
            {user.role === "Doctor" || user.role === "nurse" || user.role === "superadmin" &&(
              <Table.Cell><Button onClick={() => openForm(prescription.id)}>Edit</Button></Table.Cell>
            )}
            <Table.Cell><Button onClick={cancelSelectedPrescription}>Cancel</Button></Table.Cell>
        </Table.Row>
      </Table>
      </>
    )
}