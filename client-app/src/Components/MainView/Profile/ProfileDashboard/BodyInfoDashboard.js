import React from 'react';
import {Grid} from 'semantic-ui-react';
import BodyInfoList  from './BodyInfoList';
import  BodyInfoFrom  from '../Form/BodyInfoFrom';
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function BodyInfoDashboard (){
    const {allergiesStore}= useStore();
    const {editMode}=allergiesStore;
    return (
        <Grid>
                <BodyInfoList />
                {editMode && (
                <BodyInfoFrom />
            )}

        </Grid>
    );
})