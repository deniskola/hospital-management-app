import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { useStore } from '../../../../stores/store';

export default observer(function PrescriptionsList() {
    const { prescriptionsStore, userStore } = useStore();
    const { deletePrescription, prescriptionsByNumber, loading } = prescriptionsStore;
    const { user } = userStore;
    const [target, setTarget] = useState('');

    function handlePrescriptionDelete(e, id) {
        setTarget(e.currentTarget.name);
        deletePrescription(id);
    }

    return (

        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>AppointmentID</Table.HeaderCell>
                    <Table.HeaderCell>RX</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {prescriptionsByNumber.map(prescription => (
                    <Table.Row key={prescription.id}>
                        <Table.Cell>{prescription.number}</Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => prescriptionsStore.selectPrescription(prescription.id)} content='View' floated='right' />
                            {user.role === "Doctor" || user.role === "nurse" || user.role === "superadmin" &&(
                                <Button
                                    name={prescription.id}
                                    loading={loading && target === prescription.id}
                                    onClick={(e) => handlePrescriptionDelete(e, prescription.id)}
                                    content='Delete'
                                    color='red'
                                    floated='right' 
                                />
                            )}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
})