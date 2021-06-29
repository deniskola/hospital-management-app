import React , {useEffect,useState} from "react";
import {withStyles,Grid} from "@material-ui/core";
import GridContainer from '../mainComponents/GridContainer.js';
import GridItem from '../mainComponents/GridItem.js';
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import Box from "@material-ui/core/Box";
import * as actions from "./actions/dReminder";
import {connect} from "react-redux";

//Components
import SearchReminder from "./search/SearchReminder";
import ChartDashboard from "./ChartDashboard";
import ReminderTable from "./ReminderTable";
import ProfileDashboard from "./ProfileDashboard";

const styles=theme=>({
  root:{  
    "& .MuiTableCell-head":{
      fontSize:"1.25rem"
    }
  },
  cardInfo:{
    width:160,
    height:213,
    borderRadius: '25px!important'
  }
})

const Dashboard=({classes,...props})=>{

  useEffect(()=>{
    props.fetchAllDReminders()
  },[])

  return(
    <div>
      <GridContainer >
        <GridItem xs={12} >
            <SearchReminder/>
        </GridItem>
       </GridContainer>
       <GridContainer direction="row" justify="flex-start" alignItems="baseline"> 
          <GridItem md={2} >
           <Card className={classes.cardInfo}>
               <CardBody style={{width:"50px",height:"20px",borderRadius: '25px!important'}}>
                  <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </CardBody>
           </Card>
          </GridItem>

          <GridItem  md={2}>
           <Card className={classes.cardInfo}>
             <CardHeader color="warning" stats icon>
               <CardBody style={{width:"50px",height:"20px",borderRadius: '25px!important'}}>
                  <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </CardBody>
              </CardHeader>
           </Card>
          </GridItem>

          <GridItem md={2}>
           <Card className={classes.cardInfo}>
             <CardHeader color="warning" stats icon>
               <CardBody style={{width:"50px",height:"20px",borderRadius: '25px!important'}}>
                  <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </CardBody>
              </CardHeader>
           </Card>
          </GridItem>

          <GridItem md={2}>
           <Card className={classes.cardInfo}>
             <CardHeader color="warning" stats icon>
               <CardBody style={{width:"50px",height:"20px",borderRadius: '25px!important'}}>
                  <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </CardBody>
              </CardHeader>
           </Card>
          </GridItem>

        <GridItem  md={4}>
          <ProfileDashboard/>
        </GridItem>
       </GridContainer>

       <GridContainer spacing={2}>

        <Grid xs={12} sm={12} md={6} component={Box} marginBottom="3rem!important">
         <ChartDashboard/>
         </Grid>

        <GridItem xs={12} sm={12} md={6}>
          <ReminderTable/>
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


