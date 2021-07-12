import React , {useEffect,useState} from "react";
import {ButtonGroup, Button ,TableBody,TableRow, TableCell,TableHead,Table,withStyles,Grid,useTheme} from "@material-ui/core";
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ReminderForm from './dReminder/ReminderForm.js';
import {ToastProvider,useToasts} from "react-toast-notifications";
import * as actions from "./actions/dReminder";
import {connect} from "react-redux";
import Popup from "../mainComponents/Components/Popup";

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
  const[openPopup,setOpenPopup]=useState(false);

  const{addToast}=useToasts()

  const onDelete=id=>{
      if(window.confirm('Are you sure to delete this record?'))
      props.deleteDReminder(id,()=>addToast("Deleted successfully",{appearance:'info'}))
  }

  const formatDate=reminderData=>{
    if(reminderData!=null){
      const date_array = reminderData.split('T');

      return date_array[0];
    }

    return null;
  }
    
  useEffect(()=>{
        props.fetchAllDReminders()
  },[])

  return(
    <>
        <Card>
         <CardHeader color="primary">
            <h4 className>Reminders</h4>
         </CardHeader>
         <CardBody>
            <Table>
                 <TableHead>
                   <TableRow>
                     <TableCell>Name</TableCell>
                     <TableCell>Date</TableCell>
                     <TableCell><Button onClick={()=>setOpenPopup(true)}><AddIcon style={{ color:"#06cf2e" }}/></Button></TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {
                     props.dReminderList.map((record,index) => {
                       return (<TableRow key={index} hover>
                         <TableCell>{record.reminderTitle}</TableCell>
                         <TableCell>{formatDate(record.reminderDate)}</TableCell>
                         <TableCell>
                           <ButtonGroup variant="text">
                             <Button><EditIcon color="primary" onClick={()=>{setOpenPopup(true);setCurrentId(record.id)}} /></Button>
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
         <Popup title="Reminder" openPopup={openPopup} setOpenPopup={setOpenPopup}>
            <ReminderForm {...({currentId,setCurrentId})}/>
         </Popup>
    </>
  )
    
}
const mapStateToProps=state=>({
    dReminderList:state.dReminders.list
})
  
const mapActionToProps = {
    fetchAllDReminders:actions.fetchAll,
    deleteDReminder:actions.Delete
}
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(ReminderTable));

//{record.dReminderList[index].reminderTitle}