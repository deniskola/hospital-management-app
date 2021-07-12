import React, {useState,useEffect} from 'react';
import PatientForm from './PatientForm';
import PageHeader from '../mainComponents/Components/PageHeader';
import PeopleOutLineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles,TableBody,TableRow,TableCell,Toolbar,withStyles,InputAdornment,TableHead} from '@material-ui/core';
import useTable from "../mainComponents/Components/useTable";
import Controls from "../mainComponents/controls/Controls";
import {Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../mainComponents/Components/Popup';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import * as actions from "./Actions/Patients";
import {ToastProvider,useToasts} from "react-toast-notifications";
import {Input} from "../Dashboard/controls";
import api from "../Dashboard/actions/api";

const styles=makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    searchInput:{
        width:'75%'
    },
    newButton:{
        position:'absolute',
        right:'10px'
    }
}))

const headCells=[
    {id:'firstName',label:'First Name'},
    {id:'lastName',label:'Last Name'},
    {id:'gender',label:'Gender'},
    {id:'bloodGroup',label:'Blood Group'}
]

const Patient = ({classes , ...props}) => {
    const [currentId,setCurrentId]=useState(0)  
    const [openPopup,setOpenPopup]=useState(false);
    const [loadPatients,setLoadPatients]=useState([]);
    const [refreshKey,setRefreshKey]=useState(0);
    
    useEffect(()=>{
        api.Patients().fetchAll().then(
            (response)=>{
                return response.data;
            }
        ).then((data)=>{
            const patients=[];
            for(const key in data){
                const patient={
                    id:key,
                    ...data[key],
                };
                console.log(patient);
                patients.push(patient); //here we stopped check again
            }
            setLoadPatients(patients);
        });
    },[refreshKey])

    const{addToast}=useToasts()
    

    const {
        TblContainer,
        TblPagination,
    } = useTable(headCells);


    const onDelete=id=>{
        if(window.confirm('Are you sure to delete this record?'))
        props.deletePatient(id,()=>addToast("Deleted successfully",{appreance:'info'}))
    }

    return(
        <>
            <PageHeader title="New Patient" subTitle="Manage Patients" icon={<PeopleOutLineTwoToneIcon fontSize="large"/>}/>
            <Paper className={classes.pageContent}>
            <Toolbar>
                    <Input
                        label="Search Patients"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        //onChange={handleSearch}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true);}}
                    />
                </Toolbar>
                <TblContainer>
                    <TableHead>
                        <TableCell>First name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>bloodGroup</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableHead>
                        <TableBody>
                                {
                                    loadPatients.map((record,index)=>{
                                        return(
                                            <TableRow key={index} hover>
                                                <TableCell>{record.firstName}</TableCell>
                                                <TableCell>{record.lastName}</TableCell>
                                                <TableCell>{record.gender}</TableCell>
                                                <TableCell>{record.bloodGroup}</TableCell>
                                                {console.log(loadPatients)}
                                                <TableCell>
                                                    <Controls.ActionButton color="primary">
                                                        <EditOutlinedIcon fontSize="small" onClick={()=>{setCurrentId(record.id)}}/>
                                                    </Controls.ActionButton>
                                                    <Controls.ActionButton color="secondary">
                                                        <CloseIcon fontSize="small" onClick={()=> onDelete(record.id)}/>
                                                    </Controls.ActionButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                        </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            
            <Popup
                title="Patient Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <PatientForm {...({currentId,setCurrentId})}/>
            </Popup>
            
        </>
    )
}

const mapStateToProp =state => ({
    patientList:state.dReminders.list
})

const mapActionToProp={
    fetchAllPatients:actions.fetchAll,
    deletePatient:actions.Delete
}


export default connect(mapStateToProp,mapActionToProp)(withStyles(styles)(Patient));