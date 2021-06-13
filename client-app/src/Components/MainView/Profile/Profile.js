import * as p from './Profile.styles';
import bodyHeight  from './bodyHeight.PNG'; 
import AllergiesIcon  from './AllergiesIcon.png'; 
import bloodP from './bloodP.PNG';
import history  from './history.PNG'; 
import React,{useEffect,useState} from 'react';
import {ButtonGroup,Table, TableBody,TableRow, TableCell,TableHead} from "@material-ui/core";
import axios from 'axios';
import { Button } from 'semantic-ui-react';
//import AllergiesDashboard from './ProfileDashboard/AllergiesDashboard';
import agent from '../../../api/agent';
import {v4 as uuid} from 'uuid';
import AllergiesModalForm from './Form/AllergiesModalForm';

const Profile = () => {
   const [allergies, setAllergies]=useState([]);
   const [selectedAllergy, setSelectedAllergy]=useState(undefined);
   const [editMode, setEditMode]=useState(false);
   const [submitting, setSubmitting] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:5000/API/PAllergies').then(response =>{
        setAllergies(response.data);
      })
   }, [])

   function handleSelectAllergy(id){
      setSelectedAllergy(allergies.find(x => x.id === id))
   }
   function handleCancelSelectAllergy(){
     setSelectedAllergy (undefined);
   }
   function handleModalFormOpen(id){
     id ? handleSelectAllergy() : handleCancelSelectAllergy();
      setEditMode(true);
   }
   function handleModalFormClose(){
     setEditMode(false);
   }

   /*function handleCreateOrEditAllergy(allergy){
    setSubmitting(true);
    if(allergy.id){
      agent.ProfileA.update(allergy).then(()=>{
        setAllergy([...pAllergies.filter(x => x.id !== allergy.id), allergy]) 
        setSelectedAllergy(allergy);
        setEditMode(false);
        setSubmitting(false);
      })
    }else {
      allergy.id = uuid();
      agent.ProfileA.create(allergy).then(()=> {
        setAllergy([...pAllergies, allergy])
        setSelectedAllergy(allergy);
        setEditMode(false);
        setSubmitting(false);

      })}
    }

    function handleDeleteAllergy(id){
      setSubmitting(true);
      agent.ProfileA.delete(id).then(() =>{
        setAllergy([...pAllergies.filter(x=> x.id !==id)])
        setSubmitting(false);
      })
      
    }*/

    return (
      <div>
      <p.ProfileContainer>
        <div class="left-container">
          <p.PersonalInfo>
            <div class="first-container">
            <p class="f-name">Full Name</p>
            <p>Id #12345</p>
            <img src="https://www.ajaydubedi.com/wp-content/uploads/2016/06/user-add-icon.png" alt=" " width="100px" height="100px"/>
            <p>Gender</p>
            </div>
            <div class="second-container">
            <h4>PERSONAL INFORMATION</h4>
            <p>Leke Dukagjini, 03 L5, Dardani</p>
            <p>Prishtine, Kosove</p>
            <h4>CONTACT DETAILS</h4>
            <p>+383 123-456</p>
            <p>albionaberish@gmail.com</p>
            <p style={{marginTop:'10px'}}><span style={{color:'purple'}}>Last visited:</span> 14 days ago</p>
            </div>
            <div class="third-container">
              <img src="https://www.madmagazine.com/sites/default/files/styles/read_more_340x256/public/field/image/MAD-Magazine-Trump-Seal-Thumb_582c861b175ba3.41558276.jpg?itok=matAlVCC" alt=" " width="15px" height="15px"/>
              <img src="https://www.techwikies.com/wp-content/uploads/2019/04/gmail-app-icon-2018.jpg" alt=" " height="15px" width="15px" />
              <img src="https://www.bing.com/th?id=OIP.K61w8tCEKaKN--vUwjeSSwHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2" alt=" " height="15px" width="15px" />
            </div>
          </p.PersonalInfo>

          <p.BodyInfo> 
            <div class="body-first-container">
              <div><p class="upper-items">Age:</p>
                <b class="data">58</b></div>
              <div class="vertical-line" ><p class="upper-items">Weight:</p>
                <b class="data">70</b></div>
              <div class="vertical-line"><p class="upper-items">Blood Group:</p>
                <b class="data">AB</b></div>
            </div>
            <div class="body-second-container">
              <img src={bodyHeight} alt="bodyheight" height="90px" width="50px" margin-right="10px"/>
              <div><p class="upper-items">Height:</p>
                <b class="data">168</b></div>
            </div>
          </p.BodyInfo> 

          <p.bloodPressure>
            <p class="blood-title"><b>Blood Pressure</b></p>
            <p id="bp2"><img src={bloodP} alt="bloodPressure" height="90px" width="150px" /></p>
          </p.bloodPressure>
        </div>

        <div class="right-container">
          <p.Allergy openModalForm={handleModalFormOpen}>
            <div class="upper-container">
              <img src={AllergiesIcon} alt="logo" style={{marginTop:'5px', marginLeft:'5px'}} /> 
              <p><b>Allergies</b><i class="angle down icon"></i></p>
              <Button  basic color='purple' style={{marginLeft:'70%'}}>+ Add Allergy</Button>
            </div>
            <div class="lower-container">
            <Table
                  tableHead={[]}
                  tableData={[]}
                  />
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Description</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      allergies.map(pAllergies =>(
                          <TableRow key={pAllergies.id}>
                          <TableCell>{pAllergies.type}</TableCell>
                          <TableCell>{pAllergies.description}</TableCell>
                          <TableCell>
                          <ButtonGroup variant="text">
                            <Button   basic color='purple' width='1'><i class="edit icon"></i></Button>
                            <Button   basic color='purple' width='1'><i class="trash icon"></i></Button>
                          </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
            </div>
          </p.Allergy>


          <p.History>
            <div class="upper-container">
              <img src={history} alt=""/> 
              <p><b>Patient History</b><i class="angle right icon"></i>2021<i class="angle down icon"></i>All<i class="angle down icon"></i></p>
            </div>
            <div class="lower-container">
              <Table striped bordered hover size="sm">
                <TableRow>
                    <TableCell><Button color='purple'>New</Button><p style={{fontSize:'10px', marginLeft:'10px'}}>24/05/2021</p></TableCell>
                    <TableCell>Asthmna Undergoing for the pas 3 years <p>Asthmna Undergoing for the pas 3 years</p></TableCell>
                    <TableCell><i class="stethoscope icon"></i>Dr. Astrit Gashi</TableCell>
                    <TableCell><Button color='purple'>View Details</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button color='purple'>New</Button><p style={{fontSize:'10px', marginLeft:'10px'}}>24/05/2021</p></TableCell>
                    <TableCell>Cereals containing gluten allergy <p>Asthmna Undergoing for the pas 3 years</p></TableCell>
                    <TableCell><i class="stethoscope icon"></i>Dr. Astrit Gashi</TableCell>
                    <TableCell><Button color='purple'>View Details</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Button color='purple'>New</Button><p style={{fontSize:'10px', marginLeft:'10px'}}>24/05/2021</p></TableCell>
                    <TableCell>Rhinitis	Undergoing treatment for the past 4 years <p>Undergoing treatment for the past 4 years</p></TableCell>
                    <TableCell><i class="stethoscope icon"></i>Dr. Astrit Gashi</TableCell>
                    <TableCell><Button color='purple'>View Details</Button></TableCell>
                </TableRow>
              </Table>
            </div>
          </p.History>

          <div class="third-div">
            <p.Proccedures>
              <p class="pline">Procedures</p>
              <TableRow>
                    <TableCell><Button color='purple' style={{borderRadius:'50%', width:'20px', alignItems:'center'}}> 1 </Button></TableCell>
                    <TableCell><p class="title"><b>Electrography</b></p><p class="date">Date of procedure:<span style={{color:'black'}}><b> 20/05/2021</b></span></p><p class="date">Location on body:<span style={{color:'black'}}><b> chest</b></span></p></TableCell>
              </TableRow>
              <TableRow>
                    <TableCell><Button color='purple' style={{borderRadius:'50%', width:'20px'}}> 2 </Button></TableCell>
                    <TableCell><p class="title"><b>Blood Transfusion</b></p><p class="date">Date of procedure: <span style={{color:'black'}}><b> 01/05/2021</b></span></p><p class="date">Location on body:<span style={{color:'black'}}><b> arm</b></span></p></TableCell>
              </TableRow>
              <TableRow>
                    <TableCell><Button color='purple' style={{borderRadius:'50%', width:'20px'}}> 3 </Button></TableCell>
                    <TableCell><p class="title"><b>Radio Surgery</b></p><p class="date">Date of procedure: <span style={{color:'black'}}><b> 13/04/2021</b></span></p><p class="date">Location on body:<span style={{color:'black'}}><b> arm</b></span></p></TableCell>
              </TableRow>
              <p class="show-more">Show more <i class="angle down icon"></i></p>
            </p.Proccedures>

            <p.LabResults>
            <p class="pline">Lab test Results</p>
            <TableRow>
                    <TableCell><p class="title"><b>Blood Test</b></p><p class="date">Date of procedure: <span style={{color:'black'}}><b> 20/05/2021</b></span></p><p class="date">Location on body: <span style={{color:'black'}}><b> chest</b></span></p></TableCell>
              </TableRow>
              <TableRow>
                    <TableCell><p class="title"><b>Blood Test</b></p><p class="date">Date of procedure: <span style={{color:'black'}}><b> 01/05/2021</b></span></p><p class="date">Location on body: <span style={{color:'black'}}><b> arm</b></span></p></TableCell>
              </TableRow>
              <TableRow>
                    <TableCell><p class="title"><b>RAST Test</b></p><p class="date">Date of procedure: <span style={{color:'black'}}><b> 13/03/2021</b></span></p><p class="date">Location on body: <span style={{color:'black'}}><b> arm </b></span></p></TableCell>
              </TableRow>
              <p class="show-more">Show more <i class="angle down icon"></i></p>
            </p.LabResults>
          </div>
        </div>
        
      </p.ProfileContainer>
      </div>
    )
}

export default Profile