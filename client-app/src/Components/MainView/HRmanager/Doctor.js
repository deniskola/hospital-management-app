import React, {useEffect,useState} from 'react';
import DoctorForm from './DoctorForm';
import PageHeader from './Components/PageHeader';
import PeopleOutLineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles,TableBody,TableRow,TableCell,TableHead,Toolbar,withStyles,InputAdornment} from '@material-ui/core';
import useTable from "./Components/useTable";
import Controls from "./controls/Controls";
import {Input,Select} from "../Dashboard/controls";
import {Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from './Components/Popup';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "./Actions/hrDoctor";
import {connect} from "react-redux";
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
    {id: 'department',label:'Department'},
    {id:'specialist',label:'Specialist'},
    {id:'actions',label:'Actions',disableSorting:true}
]

const Doctor = ({classes , ...props}) => {
    
    const [currentId,setCurrentId]=useState(0)
    const [recordForEdit,setRecordForEdit]=useState(null)
    const [records,setRecords]=useState()
    const [filterFn,setFilterFn]=useState()//{fn:items=>{return items;}}
    const [openPopup,setOpenPopup]=useState(false);
    const [notify,setNotify]=useState({isOpen:false,message:'',type:''})
    const [confirmDialog,setConfirmDialog]=useState({isOpen:false,title:'',subTitle:''})

    useEffect(()=>{
        props.fetchAllDoctors()
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
        props.deleteDoctor(id,()=>addToast("Deleted successfully",{appreance:'info'}))
    }

    return(
        <>
            <PageHeader title="New Doctor" subTitle="Manage Doctors"  icon={<PeopleOutLineTwoToneIcon fontSize="large"/>} />

            <Paper className={classes.pageContent}>
            <Toolbar>
                    <Input
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
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TableHead>
                        <TableCell>First name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Specialist</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableHead>
                        <TableBody>
                                {
                                    props.doctorList.map((record,index)=>{
                                        return(
                                            <TableRow key={index} hover>
                                                <TableCell>{record.firstName}</TableCell>
                                                <TableCell>{record.lastName}</TableCell>
                                                <TableCell>{record.department}</TableCell>
                                                <TableCell>{record.specialist}</TableCell>
                                            <TableCell>
                                                  <Controls.ActionButton color="primary">
                                                      <EditOutlinedIcon fontSize="small" onClick={()=>{setOpenPopup(true);setCurrentId(record.id)}}/>
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
            
            <Popup title="Doctor Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <DoctorForm {...({currentId,setCurrentId})}/>
            </Popup>
        </>
    )
}

const mapStateToProps=state=>({
    doctorList: state.dReminders.list
});

const mapActionToProps={
    fetchAllDoctors:actions.fetchAll,
    deleteDoctor:actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Doctor));