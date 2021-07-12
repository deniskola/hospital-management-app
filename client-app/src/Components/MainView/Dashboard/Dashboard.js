import React , {useEffect,useState} from "react";
import {withStyles,Grid} from "@material-ui/core";
import GridContainer from '../mainComponents/GridContainer.js';
import GridItem from '../mainComponents/GridItem.js';
import Card from '../mainComponents/Card.js';
import CardBody from '../mainComponents/CardBody.js';
import Box from "@material-ui/core/Box";
import * as actions from "./actions/dReminder";
import {connect} from "react-redux";
import {Pie, Doughnut} from 'react-chartjs-2';

//Components
import SearchReminder from "./search/SearchReminder";
import ChartDashboard from "./ChartDashboard";
import ReminderTable from "./ReminderTable";
import ProfileDashboard from "./ProfileDashboard";
import PatientTable from "./PatientTable";

const styles=theme=>({
  root:{  
    "& .MuiTableCell-head":{
      fontSize:"1.25rem"
    }
  },
  cardInfo:{
    width:160,
    height:213,
    borderRadius: '25px!important',
  },
  gridContainer:{
    direction:"column",
    justify:"space-evenly",
    alignItems:"flex-end",
    marginLeft:"100px",
  },
  lComponents:{
    width:"95px",
    height:"86px",
    borderRadius:'15px!important',
    margin:"42px auto 15px auto"
  },
  cardDonut:{
    width:272,
    height:282,
    borderRadius:"25px!important",
    left:"60px"
  },
})

const state = {
  labels: ['Female','Male'],
  datasets: [
    {
      label: 'Gender',
      backgroundColor: [
        '#9c27b0',
        '#ECA655'
      ],
      hoverBackgroundColor: [
      ],
      data: [75,25]
    }
  ]
}

const Dashboard=({classes,...props})=>{

  useEffect(()=>{
    props.fetchAllDReminders()
  },[])

  return(
    <div>
       <GridContainer spacing={10} direction="row" justify="flex-start" alignItems="baseline" > 
          <GridItem xs={4}  style={{position:"relative",right:"85px"}}>
            <h2 style={{position:"relative",right:"20px"}}>Hello Dr.Jane Doe</h2>
            <h6 style={{color:"#707070"}}>Have a nice day at work and stay healthy!</h6>
          </GridItem>

          <GridItem xs={8}>
            <SearchReminder/>
          </GridItem>
      
        <GridItem xs={2} >
           <Card className={classes.cardInfo}>
            <Card className={classes.lComponents} style={{backgroundColor:"#f3ecfb"}}>
              <CardBody  position="absolute" top="50%" right="50%">
              <img src="https://image.flaticon.com/icons/png/512/3034/3034878.png" height="55px" width="55px"  margin="0" />
              </CardBody>
            </Card>
              <h4>Total Patient</h4>
              <h5 style={{position:"relative",top:"10px"}}>1050</h5>
           </Card>
        </GridItem>

        <GridItem xs={2} >
           <Card className={classes.cardInfo}>
            <Card className={classes.lComponents} style={{backgroundColor:"#fee8ed"}}>
            <CardBody  position="absolute" top="50%" right="50%">
              <img src="https://image.flaticon.com/icons/png/512/2397/2397594.png" height="50px" width="50px" margin="auto"/>
            </CardBody>
            </Card>
              <h4>Consulation</h4>
              <h5 style={{position:"relative",top:"10px"}}>1050</h5>
           </Card>
        </GridItem>

        <GridItem xs={2} >
           <Card className={classes.cardInfo}>
            <Card className={classes.lComponents} style={{backgroundColor:"#fecb90"}}>
            <CardBody  position="absolute" top="50%" right="50%">
              <img src="https://image.flaticon.com/icons/png/512/3304/3304567.png" height="50px" width="50px" margin="auto"/>
            </CardBody>
            </Card>
              <h4>Staff</h4>
              <h5 style={{position:"relative",top:"10px"}}>1050</h5>
           </Card>
        </GridItem>

        <GridItem xs={2}>
           <Card className={classes.cardInfo}>
            <Card className={classes.lComponents} style={{backgroundColor:"#EFF8FF"}}>
            <CardBody  position="absolute" top="50%" right="50%">
              <img src="https://image.flaticon.com/icons/png/512/3063/3063176.png" height="50px" width="50px" margin="auto"/>
            </CardBody>
            </Card>
              <h4>Rooms</h4>
              <h5 style={{position:"relative",top:"10px"}}>1050</h5>
           </Card>
        </GridItem>

        <GridItem  xs={2} >
          <ProfileDashboard/>
        </GridItem>

       </GridContainer>

       <GridContainer spacing={2}>

       <GridItem xs={8}  className={classes.gridContainer} component={Box} marginBottom="3rem!important" style={{position:"relative",top:"-85px"}}>
          <ChartDashboard/>
        </GridItem>

        <GridItem xs={4} style={{position:"relative",right:"-5px",top:"-85px"}} >
          <Card className={classes.cardDonut}>
          <CardBody>
          <Doughnut
            data={state}
            options={{
              title:{
                display:true,
                text:'Patients by gender',
                fontSize:20
              },
              legend:{
                display:true,
                position:'bottom'
              }
            }}
          />
          </CardBody>
        </Card>
        </GridItem>

        <GridItem xs={2} sm={6} md={6}>
          <ReminderTable/>
        </GridItem>

        <GridItem xs={2} sm={6} md={6}>
          <PatientTable/>
        </GridItem>

      </GridContainer>
     </div>
  );
}

const mapStateToProps=state=>({
  dReminderList:state.dReminders.list
})

const mapActionToProps = {
  fetchAllDReminders:actions.fetchAll,
  deleteDReminder:actions.Delete
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(Dashboard));


