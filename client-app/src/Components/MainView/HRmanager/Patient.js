import React, {useEffect,useState} from 'react';
import PatientForm from './PatientForm';
import PageHeader from './Components/PageHeader';
import PeopleOutLineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles,TableBody,TableRow,TableCell,Toolbar,withStyles,InputAdornment,TableHead} from '@material-ui/core';
import useTable from "./Components/useTable";
import Controls from "./controls/Controls";
import {Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from './Components/Popup';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from '@material-ui/icons/Close';
import {connect} from "react-redux";
import * as actions from "./ActionsPatient/Patients";
import {ToastProvider,useToasts} from "react-toast-notifications";

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
    const [records,setRecords]=useState()
    const [filterFn,setFilterFn]=useState()
    const [openPopup,setOpenPopup]=useState(false);
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''})
    const [confirmDialog,setConfirmDialog]=useState({isOpen:false,title:'',subTitle:''})

    useEffect(()=>{
        props.fetchAllPatients()
    },[])

    const{addToast}=useToasts()

    const {
        TblContainer,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);


    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    const onDelete=id=>{
        if(window.confirm('Are you sure to delete this record?'))
        props.deletePatient(id,()=>addToast("Deleted successfully",{appreance:'info'}))
    }

    return(
        <>
            <PageHeader title="New Patient" subTitle="Manage Patients" icon={<PeopleOutLineTwoToneIcon fontSize="large"/>}/>
            <Paper className={classes.pageContent}>
            <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
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
                                    props.patientList.map((record,index)=>{
                                        return(
                                            <TableRow key={index} hover>
                                                <TableCell>{record.firstName}</TableCell>
                                                <TableCell>{record.lastName}</TableCell>
                                                <TableCell>{record.gender}</TableCell>
                                                <TableCell>{record.bloodGroup}</TableCell>

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
                <PatientForm/>
            </Popup>
            
        </>
    )
}

const mapStateToProp =state => ({
    patientList:state.dReminders.list
    //Patient the name of the reducer
})

const mapActionToProp={
    fetchAllPatients:actions.fetchAll,
    deletePatient:actions.Delete
}


export default connect(mapStateToProp,mapActionToProp)(withStyles(styles)(Patient));