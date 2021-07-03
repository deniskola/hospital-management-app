import React from 'react';
import {Grid, List} from 'semantic-ui-react';
import { Table, TableBody, TableCell, TableHead, TableRow, ButtonGroup } from '@material-ui/core'; 
import { Button} from "semantic-ui-react";
import { BodyInfoList } from './BodyInfoList';
import  BodyInfoFrom  from '../Form/BodyInfoFrom';

export default function BodyInfoDashboard ({bodyinfos, editMode}){
    return (
        <Grid>
            <Grid.Column width='17'>
                <BodyInfoList
                    bodyinfos={bodyinfos}
                />
            </Grid.Column>
            <Grid.Column>
            {editMode && (
                <BodyInfoFrom
                />
            )}
            </Grid.Column>
        </Grid>
    );
}