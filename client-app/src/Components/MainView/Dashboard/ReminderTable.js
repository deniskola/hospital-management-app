import React , {useEffect,useState} from "react";
import {ButtonGroup, Button ,TableBody,TableRow, TableCell,TableHead,Table,withStyles,Grid,useTheme} from "@material-ui/core";
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import ReminderForm from './dReminder/ReminderForm.js';
import {ToastProvider,useToasts} from "react-toast-notifications";
import * as actions from "./actions/dReminder";
import {connect} from "react-redux";

const styles=theme=>({
    root:{  
      "& .MuiTableCell-head":{
        fontSize:"1.25rem"
      }
    }
  })

function ReminderTable({classes,...props}){
    const[currentId,setCurrentId]=useState(0)
    const[show,setShow]=useState(false)

    const{addToast}=useToasts()

    const onDelete=id=>{
      if(window.confirm('Are you sure to delete this record?'))
      props.deleteDReminder(id,()=>addToast("Deleted successfully",{appearance:'info'}))
    }
    
    useEffect(()=>{
        props.fetchAllDReminders()
      },[])

    return(
        <Card>
         <CardHeader color="primary">
            <h4 className>Reminders</h4>
         </CardHeader>
         <CardBody>
            <Table>
                 <TableHead>
                   <TableRow>
                     <TableCell>Id</TableCell>
                     <TableCell>Name</TableCell>
                     <TableCell>Date</TableCell>
                     <TableCell><Button onClick={()=>setShow(true)}><AddIcon style={{ color:"#06cf2e" }}/></Button></TableCell>
                   </TableRow>
                   <TableRow>
                   {
                      show?( 
                        <Grid container direction="row" justify="flex-start" alignItem="center">
                        <TableHead>
                        <TableRow>
                          <TableCell><ReminderForm
                            {...({currentId,setCurrentId})}/>
                          <Button onClick={()=>setShow(false)}><RemoveOutlinedIcon color="secondary"/></Button></TableCell>
                        </TableRow>
                        </TableHead>
                        </Grid>
                      ):null
                     }
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {
                     props.dReminderList.map((record,index) => {
                       return (<TableRow key={index} hover>
                         <TableCell>{record.id}</TableCell>
                         <TableCell>{record.reminderTitle}</TableCell>
                         <TableCell>{record.reminderDate}</TableCell>
                         <TableCell>
                           <ButtonGroup variant="text">
                             <Button><EditIcon color="primary" onClick={()=> {setCurrentId(record.id)}} /></Button>
                             <Button><DeleteIcon color="secondary" onClick={()=> onDelete(record.id)} /></Button>
                           </ButtonGroup>
                         </TableCell>
                       </TableRow>)
                     })
                   }
                 </TableBody>
               </Table>
           </CardBody>
         </Card>
    )
}
const mapStateToProps=state=>({
    dReminderList:state.dReminder.list
})
  
const mapActionToProps = {
    fetchAllDReminders:actions.fetchAll,
    deleteDReminder:actions.Delete
}
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(ReminderTable));