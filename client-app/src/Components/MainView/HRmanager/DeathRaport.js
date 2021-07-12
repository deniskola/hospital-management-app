import React, {useEffect,useState} from 'react';
import DeathRaportForm from './DeathRaportForm';
import PageHeader from '../mainComponents/Components/PageHeader';
import PeopleOutLineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles,TableBody,TableRow,TableCell,TableHead,Toolbar,withStyles,InputAdornment} from '@material-ui/core';
import useTable from "../mainComponents/Components/useTable";
import Controls from "../mainComponents/controls/Controls";
import {Input,Select} from "../Dashboard/controls";
import {Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../mainComponents/Components/Popup';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from '@material-ui/icons/Close';
import * as actions from "./Actions/deathRaport";
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

const Doctor = ({classes , ...props}) => {
    
    const [currentId,setCurrentId]=useState(0)
    const [openPopup,setOpenPopup]=useState(false);

    useEffect(()=>{
        props.fetchAllDeathRaport()
    },[])
    
    const{addToast}=useToasts()

    const {
        TblContainer,
        TblPagination,
    } = useTable();

    const formatDate=deathDate=>{
        if(deathDate!=null){
            const date_array = deathDate.split('T');
            return date_array[0];
        }
        return null;
    }

    const onDelete=id=>{
        if(window.confirm('Are you sure to delete this record?'))
        props.deleteDeathRaport(id,()=>addToast("Deleted successfully",{appreance:'info'}))
    }

    return(
        <>
            <PageHeader title="New Death Raport" subTitle="Manage Death Raports"  icon={<PeopleOutLineTwoToneIcon fontSize="large"/>} />

            <Paper className={classes.pageContent}>
            <Toolbar>
                    <Input
                        label="Search Death Raport"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        //onChange={}
                    />
                    <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true) }}
                    />
                </Toolbar>
                <TblContainer>
                    <TableHead>
                        <TableCell>Cause Of Death</TableCell>
                        <TableCell>Death Date</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableHead>
                        <TableBody>
                                {
                                    props.deathRaportList.map((record,index)=>{
                                        return(
                                            <TableRow key={index} hover>
                                                <TableCell>{record.causeOfDeath}</TableCell>
                                                <TableCell>{formatDate(record.deathDate)}</TableCell>
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
            
            <Popup title="Death Raport Form" openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <DeathRaportForm {...({currentId,setCurrentId})}/>
            </Popup>
        </>
    )
}

const mapStateToProps=state=>({
    deathRaportList: state.dReminders.list
});

const mapActionToProps={
    fetchAllDeathRaport:actions.fetchAll,
    deleteDeathRaport:actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Doctor));