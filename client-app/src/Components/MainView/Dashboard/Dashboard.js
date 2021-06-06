import React , {useEffect,useState} from "react";
import {ButtonGroup, Button ,TableBody,TableRow, TableCell,TableHead,Table,withStyles,Grid,useTheme} from "@material-ui/core";
import GridContainer from '../mainComponents/GridContainer.js';
import GridItem from '../mainComponents/GridItem.js';
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import Box from "@material-ui/core/Box";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import ReminderForm from './dReminder/ReminderForm.js';
import SearchReminder from "./search/SearchReminder";
import {ToastProvider,useToasts} from "react-toast-notifications";
import * as actions from "./actions/dReminder";
import {connect} from "react-redux";
import * as s from './Dashboard.styles';
//Charts
//import Chart from "chart.js";
import {Line,Bar} from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";
//import{chartOptions,parseOptions,chartExample1,chartExample2,}from "./chart/charts.js";

const styles=theme=>({
  root:{  
    "& .MuiTableCell-head":{
      fontSize:"1.25rem"
    }
  },
  cardInfo:{
    width:300,
    height:300,
    borderRadius: '25px!important'
  }
})

const Dashboard=({classes,...props})=>{
  const[currentId,setCurrentId]=useState(0)
  const[show,setShow]=useState(false)
  const theme=useTheme();
  const[chartExample1Data,setChartExample1Data]=React.useState("data1");
  const[chartExample2Data,setChartExample2Data]=React.useState("data2");

  const toggleNavs=(index)=>{
    setChartExample1Data("data"+index);
  };

  useEffect(()=>{
    props.fetchAllDReminders()
  },[])

  const{addToast}=useToasts()

  const onDelete=id=>{
    if(window.confirm('Are you sure to delete this record?'))
    props.deleteDReminder(id,()=>addToast("Deleted successfully",{appearance:'info'}))
  }
  
  return(
    <div>
      <GridContainer spacing={2}>
        <GridItem md={6}>
            <SearchReminder/>
        </GridItem>
       </GridContainer>
       <GridContainer>
         <Grid item xl={3} lg={6} xs={12}>
           <Card className={classes.cardInfo}>
             <CardHeader color="warning" stats icon>
               <Card style={{width:"50px",height:"20px",borderRadius: '25px!important',backgroundColor:"black"}}>
                  <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </Card>
               <h3>Test 123</h3>
           </CardHeader>
           </Card>
         </Grid>
       </GridContainer>
       <GridContainer spacing={2}>
        <GridItem xs={12} sm={12} md={6}>
         <Card>
         <CardHeader style={{backgroundColor:"#8E59FA",color:"#fff"}}>
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
                        <TableHead>
                        <TableRow>
                          <TableCell><ReminderForm
                            {...({currentId,setCurrentId})}/>
                          <Button onClick={()=>setShow(false)}><RemoveOutlinedIcon color="secondary"/></Button></TableCell>
                        </TableRow>
                        </TableHead>
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
       </GridItem>
       <GridItem xs={12} sm={12} md={6}>
          <s.profileCard>
          <div className='Card'>
              <div className='upper-container'>
                  <div className='image-container'>
                      <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
                  </div>
              </div>
              <div className="lower-container">
                  <h3>aasss</h3>
                  <h4>asdd</h4>
                  <h5>asd</h5>
              </div>
            </div>
          </s.profileCard>
        </GridItem>
      </GridContainer>
     </div>
  );
}

const mapStateToProps=state=>({
  dReminderList:state.dReminder.list
})

const mapActionToProps = {
  fetchAllDReminders:actions.fetchAll,
  deleteDReminder:actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Dashboard));

