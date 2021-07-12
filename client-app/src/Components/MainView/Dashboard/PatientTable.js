import React , {useEffect,useState} from "react";
import {TableBody,TableRow, TableCell,TableHead,Table,withStyles,Grid,useTheme} from "@material-ui/core";
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import * as actions from "../HRmanager/Actions/Patients";
import {connect} from "react-redux";
import api from "./actions/api";

const styles=theme=>({
    root:{  
      "& .MuiTableCell-head":{
        fontSize:"1.25rem"
      }
    }
  })

function PatientTable({classes,...props}){
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
              patients.push(patient); 
          }
          setLoadPatients(patients);
      });
  },[refreshKey])
  return(
    <>
        <Card>
         <CardHeader color="primary">
            <h4 className>Patients</h4>
         </CardHeader>
         <CardBody>
            <Table>
                 <TableHead>
                   <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>bloodGroup</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {
                     loadPatients.map((record,index) => {
                       return (<TableRow key={index} hover>
                                  <TableCell>{record.firstName}</TableCell>
                                  <TableCell>{record.lastName}</TableCell>
                                  <TableCell>{record.gender}</TableCell>
                                  <TableCell>{record.bloodGroup}</TableCell>
                              </TableRow>)
                    })
                   }
                 </TableBody>
               </Table>
           </CardBody>
         </Card>
    </>
  )
    
}
const mapStateToProps=state=>({
    patientList:state.dReminders.list
})
  
const mapActionToProps = {
    fetchAllDReminders:actions.fetchAll,
    deleteDReminder:actions.Delete
}
  
export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(PatientTable));
