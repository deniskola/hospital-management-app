import React , {useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {ButtonGroup, Button ,TableBody,TableRow, TableCell,TableHead} from "@material-ui/core";
import axios from 'axios';
import * as s from './Dashboard.styles';
import GridContainer from '../mainComponents/GridContainer.js';
import GridItem from '../mainComponents/GridItem.js';
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import Table from "../mainComponents/Table.js";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "../mainComponents/style/dashboardStyle.js";

const useStyles=makeStyles(styles);

const Dashboard=()=>{
    const classes=useStyles();
    const [dReminders, setReminder]=useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/DReminders').then(response=>{
        setReminder(response.data);
      })
    }, [])
    const [name,setName]=useState("Dr.John Doe");
    const [job,setJob]=useState("General Practitioners");
    const [about,setAbout]=useState("(5.0) stars ...");

   return(
     <div>
       <GridContainer>
       <s.profileCard>
       <div className='Card'>
           <div className='upper-container'>
               <div className='image-container'>
                   <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt='' height="100px" width="100px"/>
               </div>
           </div>
           <div className="lower-container">
               <h3>{name}</h3>
               <h4>{job}</h4>
               <h5>{about}</h5>
           </div>
        </div>
       </s.profileCard>
         <GridItem xs={12} sm={12} md={6}>
           <Card>
           <CardHeader color="warning">
             <h4 className={classes.cardTitleWhite}>Reminders</h4>
           </CardHeader>
           <CardBody>
             <Table
                  tableHeaderColor="warning"
                  tableHead={[]}
                  tableData={[]}
                  />
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      dReminders.map((record,index)=>{
                        return (<TableRow key={index}>
                          <TableCell>{record.id}</TableCell>
                          <TableCell>{record.title}</TableCell>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>
                          <ButtonGroup variant="text">
                            <Button><EditIcon color="primary"/></Button>
                            <Button><DeleteIcon color="secondary"/></Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>)
                      })
                    }
                  </TableBody>
           </CardBody>
           </Card>
         </GridItem>
       </GridContainer>
      </div>
   )
}

export default Dashboard