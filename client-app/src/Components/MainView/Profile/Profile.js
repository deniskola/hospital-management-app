import * as p from "./Profile.styles";
import bodyHeight from "./bodyHeight.PNG";
import AllergiesIcon from "./AllergiesIcon.png";
import bloodP from "./bloodP.PNG";
import history from "./history.PNG";
<<<<<<< HEAD
import LabTestIcon from "./LabTestIcon.png";
import Procedure from "./Procedure.png";
import React, { useEffect, useState } from "react";
import {TableRow,TableCell} from "@material-ui/core";
import { Button, List } from "semantic-ui-react";
import AllergiesDashboard from './ProfileDashboard/AllergiesDashboard';
import BodyInfoDashboard from "./ProfileDashboard/BodyInfoDashboard";
import PatientHistoryDashboard from "./ProfileDashboard/PatientHistoryDashboard";
import LabTestDashboard from "./ProfileDashboard/LabTestDashboard";
import ProceduresDashboard from "./ProfileDashboard/ProceduresDashboard";
import agent from "../../../api/agent";
import { v4 as uuid } from "uuid";
import AllergiesForm from "./Form/AllergiesForm";
import PatientHistoryFrom from "./Form/PatientHistoryFrom";
import BodyInfoFrom from "./Form/BodyInfoFrom";
import { useStore } from "../../../stores/store";
import {Modal} from 'react-bootstrap';
=======
import React, {useEffect, useState} from "react";
import {
  ButtonGroup,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import axios from "axios";
import {Button} from "semantic-ui-react";
//import AllergiesDashboard from './ProfileDashboard/AllergiesDashboard';
import agent from "../../../api/agent";
import {v4 as uuid} from "uuid";
import AllergiesModalForm from "./Form/AllergiesModalForm";
import {useStore} from "../../../stores/store";
>>>>>>> a887d1be86194c48e3e1789c138fd26f8c81c73a

const Profile = () => {



  /*---------------------------------------- Allergies -------------------------------- */
  const [allergies, setAllergies]=useState([]);
  const [selectedAllergy, setSelectedAllergy]=useState(undefined);
  const [editMode, setEditMode]=useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {userStore} = useStore();
  const {user} = userStore;
<<<<<<< HEAD
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
=======
>>>>>>> a887d1be86194c48e3e1789c138fd26f8c81c73a

 
  useEffect(() => {
    agent.PAllergy.list().then(response => {
      setAllergies(response);
    })
  }, [])

  function handleSelectAllergy(id){
     setSelectedAllergy(allergies.find(x => x.id === id))
  }
  function handleCancelSelectAllergy(){
    setSelectedAllergy (undefined);
  }
  function handleFormOpen(id){
    id ? handleSelectAllergy() : handleCancelSelectAllergy();
     setEditMode(true);
  }
  function handleFormClose(){
    setEditMode(false);
  }

  function handleCreateOrEditAllergy(pAllergies){
    setSubmitting(true);
    if(pAllergies.id){
        agent.PAllergy.update(pAllergies).then( () =>{
          setAllergies([...allergies.filter(x => x.id !== pAllergies.id), pAllergies]) 
          setSelectedAllergy(pAllergies);
          setEditMode(false);
          setSubmitting(false);
        })
    }else{
      pAllergies.id = uuid();
      agent.PAllergy.create(pAllergies).then(() => {
        setAllergies([...allergies, pAllergies]);
        setSelectedAllergy(pAllergies);
        setEditMode(false);
        setSubmitting(false);
      })
    }
   }

   function handleDeleteAllergy(id){
     setSubmitting(true);
     agent.PAllergy.delete(id).then(() =>{
       setAllergies([...allergies.filter(x=> x.id !==id)])
       setSubmitting(false);
     })
   }

  /*---------------------------------------- Body Infos -------------------------------- */
  const [bodyinfos, setBodyInfos]=useState([]);
  const [selectedBodyInfo, setSelectedBodyInfo]=useState(undefined);
  const [editBodyInfoMode, setEditBodyInfoMode] = useState(false);
  const [submittingBodyInfo, setSubmittingBodyInfo] = useState(false);

  useEffect(() => {
    agent.BodyInfos.list().then(response => {
      setBodyInfos(response);
    })
  }, [])

  function handleSelectBodyInfo(id){
    setSelectedBodyInfo(bodyinfos.find(x => x.id === id))
  }
  function handleCancelSelectBodyInfo(){
   setSelectedBodyInfo (undefined);
  }
  function handleFormBodyInfoOpen(id){
    id ? handleSelectBodyInfo() : handleCancelSelectBodyInfo();
     setEditBodyInfoMode(true);
  }
  function handleFormBodyInfoClose(){
    setEditBodyInfoMode(false);
  }

  function handleCreateOrEditBodyInfo(bodyinfo){
    setSubmittingBodyInfo(true);
    if(bodyinfo.id){
        agent.BodyInfos.update(bodyinfo).then( () =>{
          setBodyInfos([...bodyinfos.filter(x => x.id !== bodyinfo.id), bodyinfo]) 
          setSelectedBodyInfo(bodyinfo);
          setEditBodyInfoMode(false);
          setSubmittingBodyInfo(false);
        })
    }else{
      bodyinfo.id = uuid();
      agent.BodyInfos.create(bodyinfo).then(() => {
        setBodyInfos([...bodyinfos, bodyinfo]);
        setSelectedBodyInfo(bodyinfo);
        setEditBodyInfoMode(false);
        setSubmittingBodyInfo(false);
      })
    }
  }

  function handleDeleteBodyInfo(id){
    setSubmittingBodyInfo(true);
    agent.BodyInfos.delete(id).then(() =>{
      setBodyInfos([...bodyinfos.filter(x=> x.id !==id)])
      setSubmittingBodyInfo(false);
    })
  }

/*---------------------------------------- Patient History  -------------------------------- */
 const [patienthistories, setPatientHistories]=useState([]);
 const [selectedPatientHistory, setSelectedPatientHistory] = useState(undefined);
 const [editHistoryMode, setEditHistoryMode] = useState(false);
 const [submittingHistory, setSubmittingHistory] = useState(false);

  useEffect(() => {
    agent.PatientHistories.list().then(response => {
      setPatientHistories(response);
    })
  }, [])

  function handleSelectPatientHistory(id){
    setSelectedPatientHistory(patienthistories.find(x => x.id === id));
  }

  function handleCancelSelectPatientHistory(){
    setSelectedPatientHistory(undefined);
  }

  function handleFormHistoryOpen(id){
    id ? handleSelectPatientHistory() : handleCancelSelectPatientHistory();
      setEditHistoryMode(true) 
  }
  function handleFormHistoryClose(){
    setEditHistoryMode(false);
  }
  function handleCreateOrEditPatientHistory(patientHistory){
    setSubmittingHistory(true);
    if(patientHistory.id){
        agent.PatientHistories.update(patientHistory).then( () =>{
          setPatientHistories([...patienthistories.filter(x => x.id !== patientHistory.id), patientHistory]) 
          setSelectedPatientHistory(patientHistory);
          setEditHistoryMode(false);
          setSubmittingHistory(false);
        })
    }else{
      patientHistory.id = uuid();
      agent.PatientHistories.create(patientHistory).then(() => {
        setPatientHistories([...patienthistories, patientHistory]);
        setSelectedPatientHistory(patientHistory);
        setEditHistoryMode(false);
        setSubmittingHistory(false);
      })
    }
   }

  function handleDeletePatientHistory(id){
    setSubmitting(true);
    agent.PatientHistories.delete(id).then(() =>{
      setPatientHistories([...patienthistories.filter(x=> x.id !==id)])
      setSubmitting(false);
    })
  }

  /*--------------------------------- Lab Tests ------------------------------------------------------ */
  const [labtests, setLabTests]=useState([]);
  const [selectedLabTest, setSelectedLabTest] = useState(undefined);
  const [editLabTestMode, setEditLabTestMode] = useState(false);
  const [submittingLabTest, setSubmittingLabTest] = useState(false);

  useEffect(() => {
    agent.LabTests.list().then(response => {
      setLabTests(response);
    })
  }, [])

  function handleSelectLabTest(id){
    setSelectedLabTest(labtests.find(x => x.id === id));
  }
  function handleCancelSelectLabTest(){
    setSelectedLabTest(undefined);
  }

  function handleFormLabTestOpen(id){
    id ? handleSelectLabTest() : handleCancelSelectLabTest();
      setEditLabTestMode(true) 
  }
  function handleFormLabTestClose(){
    setEditLabTestMode(false);
  }

  function handleCreateOrEditLabTest(labtest){
    setSubmittingLabTest(true);
    if(labtests.id){
        agent.LabTests.update(labtest).then( () =>{
          setLabTests([...labtests.filter(x => x.id !== labtest.id), labtest]) 
          setSelectedLabTest(labtest);
          setEditLabTestMode(false);
          setSubmittingLabTest(false);
        })
    }else{
      labtest.id = undefined;
      agent.LabTests.create(labtest).then(() => {
        setLabTests([...labtests, labtest]);
        setSelectedLabTest(labtest);
        setEditLabTestMode(false);
        setSubmittingLabTest(false);
      })
    }
   }

  function handleDeleteLabTest(id){
    setSubmittingLabTest(true);
    agent.LabTests.delete(id).then(() =>{
      setLabTests([...labtests.filter(x=> x.id !==id)])
      setSubmittingLabTest(false);
    })
  }

  /*--------------------------------------- Procedures -------------------------------------------- */
  const [procedures, setProcedures]=useState([]);
  const [selectedProcedure, setSelectedProcedure]=useState(undefined);
  const [editProcedureMode, setEditProcedureMode] = useState(false);
  const [submittingProcedure, setSubmittingProcedure] = useState(false);

  /*useEffect(() => {
    agent.Procedures.list().then(response => {
      setProcedures(response);
    })
  }, [])*/

  useEffect(() => {
    agent.Procedures.list().then(response => {
      let procedures = [];
      response.forEach(procedure => {
        procedure.date = procedure.date.split('T')[0];
        procedures.push(procedure);
      })
      setProcedures(procedures);
    })
  }, [])
  function handleSelectProcedure(id){
    setSelectedProcedure(procedures.find(x => x.id === id));
  }
  function handleCancelSelectProcedure(){
    setSelectedProcedure(undefined);
  }
  function handleFormProcedureOpen(id){
    id ? handleSelectProcedure() : handleCancelSelectProcedure();
      setEditProcedureMode(true) 
  }
  function handleFormProcedureClose(){
    setEditProcedureMode(false);
  }
  function handleCreateOrEditProcedure(procedure){
    setSubmittingProcedure(true);
    if(procedures.id){
        agent.Procedures.update(procedure).then( () =>{
          setProcedures([...procedures.filter(x => x.id !== procedure.id), procedure]) 
          setSelectedProcedure(procedure);
          setEditLabTestMode(false);
          setSubmittingLabTest(false);
        })
    }else{
      procedure.id = uuid();
      agent.Procedures.create(procedure).then(() => {
        setProcedures([...procedures, procedure]);
        setSelectedProcedure(procedure);
        setEditLabTestMode(false);
        setSubmittingLabTest(false);
      })
    }
  }
  function handleDeleteProcedure(id){
    setSubmittingProcedure(true);
    agent.Procedures.delete(id).then(() =>{
      setProcedures([...procedures.filter(x=> x.id !==id)])
      setSubmittingProcedure(false);
    })
  }

  return (
    <div>
      <p.ProfileContainer>
        <div class="left-container">
          <p.PersonalInfo>
            <div class="first-container">
              <p class="f-name">
                {user.firstName} {user.lastName}
              </p>
              <p>Id #12345</p>
              <img
                src="https://www.ajaydubedi.com/wp-content/uploads/2016/06/user-add-icon.png"
                alt=" "
                width="100px"
                height="100px"
              />
              <p>{user.gender}</p>
            </div>
            <div class="second-container">
              <h4>PERSONAL INFORMATION</h4>
              <p>Leke Dukagjini, 03 L5, Dardani</p>
              <p>Prishtine, Kosove</p>
              <h4>CONTACT DETAILS</h4>
              <p>{user.phoneNumber}</p>
              <p>{user.email}</p>
              <p style={{marginTop: "10px"}}>
                <span style={{color: "purple"}}>Last visited:</span> 14 days ago
              </p>
            </div>
            <div class="third-container">
              <img
                src="https://www.madmagazine.com/sites/default/files/styles/read_more_340x256/public/field/image/MAD-Magazine-Trump-Seal-Thumb_582c861b175ba3.41558276.jpg?itok=matAlVCC"
                alt=" "
                width="15px"
                height="15px"
              />
              <img
                src="https://www.techwikies.com/wp-content/uploads/2019/04/gmail-app-icon-2018.jpg"
                alt=" "
                height="15px"
                width="15px"
              />
              <img
                src="https://www.bing.com/th?id=OIP.K61w8tCEKaKN--vUwjeSSwHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2"
                alt=" "
                height="15px"
                width="15px"
              />
            </div>
          </p.PersonalInfo>

          <p.BodyInfo>
           <BodyInfoDashboard 
              bodyinfos={bodyinfos}
              selectedBodyInfo={selectedBodyInfo}
              selectBodyInfo={handleSelectBodyInfo}
              cancelSelectBodyInfo={handleCancelSelectBodyInfo}
              editBodyInfoMode={editBodyInfoMode}
              openBodyInfoForm={handleFormBodyInfoOpen}
              closeBodyInfoForm={handleFormBodyInfoClose}
              createOrEdit={handleCreateOrEditBodyInfo}
              deleteBodyInfo={handleDeleteBodyInfo}
              submittingBodyInfo={submittingBodyInfo}
           />
          </p.BodyInfo>

          <p.bloodPressure>
            <p class="blood-title">
              <b>Blood Pressure</b>
            </p>
            <p id="bp2">
              <img
                src={bloodP}
                alt="bloodPressure"
                height="90px"
                width="150px"
              />
            </p>
          </p.bloodPressure>
          <p.Proccedures>
            <div>
              <div class="upper-container">
                <img src={Procedure} alt="logo" style={{marginTop:'5px', marginLeft:'5px', width:'25px', height:'25px'}} />
                <p class="pline" style={{marginRight:'45%'}}>Procedures</p>
                <Button onClick={handleFormProcedureOpen}  color='blue' width='1' ><b><i class="plus  icon"></i></b> </Button>
              </div>
              <ProceduresDashboard 
                procedures={procedures}
                selectedProcedure={selectedProcedure}
                selectProcedure={handleSelectProcedure}
                cancelSelectProcedure={handleCancelSelectProcedure}
                editProcedureMode={editProcedureMode}
                openProcedureForm={handleFormProcedureOpen}
                closeProcedureForm={handleFormProcedureClose}
                createOrEditProcedure={handleCreateOrEditProcedure}
                deleteProcedure={handleDeleteProcedure}
                submittingProcedure={submittingProcedure}
              />
            </div>
            </p.Proccedures>     
        </div>

        <div class="right-container">
<<<<<<< HEAD
        <p.Allergy onClick={handleShow}>
            <div>
              <div class="upper-container" >
                <img src={AllergiesIcon} alt="logo" style={{marginTop:'5px', marginLeft:'5px'}} />
                <p><b>Allergies</b></p>
                <Button onClick={handleFormOpen}  color='blue' style={{marginLeft:'71%'}}>+ Add Allergy</Button>
              </div>
            <AllergiesDashboard
              allergies={allergies}
              selectedAllergy={selectedAllergy}
              selectAllergy={handleSelectAllergy}
              cancelSelectAllergy={handleCancelSelectAllergy}
              editMode={editMode}
              openForm={handleFormOpen}
              closeForm={handleFormClose}
              createOrEdit={handleCreateOrEditAllergy}
              deleteAllergy={handleDeleteAllergy}
              submitting={submitting}
            />
=======
          <p.Allergy openModalForm={handleModalFormOpen}>
            <div class="upper-container">
              <img
                src={AllergiesIcon}
                alt="logo"
                style={{marginTop: "5px", marginLeft: "5px"}}
              />
              <p>
                <b>Allergies</b>
                <i class="angle down icon"></i>
              </p>
              <Button basic color="purple" style={{marginLeft: "70%"}}>
                + Add Allergy
              </Button>
>>>>>>> a887d1be86194c48e3e1789c138fd26f8c81c73a
            </div>
                {/*<Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                          <Modal.Title>
                            Add Allergy
                          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AllergiesForm 
                       submitting={submitting}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"onClick={handleClose}>
                          Close
                        </Button>
                    </Modal.Footer>
                </Modal>*/}
          </p.Allergy>

        <p.History>
            <div class="upper-container">
              <img src={history} alt="" />
              <p style={{marginRight:'71%'}}>Patient History</p>
              <Button onClick={handleFormHistoryOpen}  color="blue">+ Add</Button>
            </div>
            <div class="lower-container">
<<<<<<< HEAD
            <PatientHistoryDashboard
              patienthistories={patienthistories}
              selectedPatientHistory={selectedPatientHistory}
              selectPatientHistory={handleSelectPatientHistory}
              cancelSelectPatientHistory={handleCancelSelectPatientHistory}
              editHistoryMode={editHistoryMode}
              openHistoryForm={handleFormHistoryOpen}
              closeHistoryForm={handleFormHistoryClose}
              createOrEdit={handleCreateOrEditPatientHistory}
              deletePatientHistory={handleDeletePatientHistory}
              submittingHistory={submittingHistory}
            />
            </div>
        </p.History>

        <p.LabResults>
            <div>
              <div class="upper-container">
              <img src={LabTestIcon} alt="logo" style={{marginTop:'5px', marginLeft:'5px', width:'30px', height:'30px'}} />
                <p>Lab Test Results</p>
                <Button onClick={handleFormLabTestOpen} color='blue' style={{marginLeft:'68%'}}><b>+ Add </b> </Button>
              </div>
              <div class="lower-container">
              <LabTestDashboard
                labtests={labtests}
                selectedLabTest={selectedLabTest}
                selectLabTest={handleSelectLabTest}
                cancelSelectLabTest={handleCancelSelectLabTest}
                editLabTestMode={editLabTestMode}
                openLabTestForm={handleFormLabTestOpen}
                closeLabTestForm={handleFormLabTestClose}
                createOrEdit={handleCreateOrEditLabTest}
                deleteLabTest={handleDeleteLabTest}
                submittingLabTest={submittingLabTest}
              />   
              </div>
            </div>
      </p.LabResults>   
=======
              <Table striped bordered hover size="sm">
                <TableRow>
                  <TableCell>
                    <Button color="purple">New</Button>
                    <p style={{fontSize: "10px", marginLeft: "10px"}}>
                      24/05/2021
                    </p>
                  </TableCell>
                  <TableCell>
                    Asthmna Undergoing for the pas 3 years{" "}
                    <p>Asthmna Undergoing for the pas 3 years</p>
                  </TableCell>
                  <TableCell>
                    <i class="stethoscope icon"></i>Dr. Astrit Gashi
                  </TableCell>
                  <TableCell>
                    <Button color="purple">View Details</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button color="purple">New</Button>
                    <p style={{fontSize: "10px", marginLeft: "10px"}}>
                      24/05/2021
                    </p>
                  </TableCell>
                  <TableCell>
                    Cereals containing gluten allergy{" "}
                    <p>Asthmna Undergoing for the pas 3 years</p>
                  </TableCell>
                  <TableCell>
                    <i class="stethoscope icon"></i>Dr. Astrit Gashi
                  </TableCell>
                  <TableCell>
                    <Button color="purple">View Details</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Button color="purple">New</Button>
                    <p style={{fontSize: "10px", marginLeft: "10px"}}>
                      24/05/2021
                    </p>
                  </TableCell>
                  <TableCell>
                    Rhinitis Undergoing treatment for the past 4 years{" "}
                    <p>Undergoing treatment for the past 4 years</p>
                  </TableCell>
                  <TableCell>
                    <i class="stethoscope icon"></i>Dr. Astrit Gashi
                  </TableCell>
                  <TableCell>
                    <Button color="purple">View Details</Button>
                  </TableCell>
                </TableRow>
              </Table>
            </div>
          </p.History>

          <div class="third-div">
            <p.Proccedures>
              <p class="pline">Procedures</p>
              <TableRow>
                <TableCell>
                  <Button
                    color="purple"
                    style={{
                      borderRadius: "50%",
                      width: "20px",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    1{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <p class="title">
                    <b>Electrography</b>
                  </p>
                  <p class="date">
                    Date of procedure:
                    <span style={{color: "black"}}>
                      <b> 20/05/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:
                    <span style={{color: "black"}}>
                      <b> chest</b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Button
                    color="purple"
                    style={{borderRadius: "50%", width: "20px"}}
                  >
                    {" "}
                    2{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <p class="title">
                    <b>Blood Transfusion</b>
                  </p>
                  <p class="date">
                    Date of procedure:{" "}
                    <span style={{color: "black"}}>
                      <b> 01/05/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:
                    <span style={{color: "black"}}>
                      <b> arm</b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Button
                    color="purple"
                    style={{borderRadius: "50%", width: "20px"}}
                  >
                    {" "}
                    3{" "}
                  </Button>
                </TableCell>
                <TableCell>
                  <p class="title">
                    <b>Radio Surgery</b>
                  </p>
                  <p class="date">
                    Date of procedure:{" "}
                    <span style={{color: "black"}}>
                      <b> 13/04/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:
                    <span style={{color: "black"}}>
                      <b> arm</b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <p class="show-more">
                Show more <i class="angle down icon"></i>
              </p>
            </p.Proccedures>

            <p.LabResults>
              <p class="pline">Lab test Results</p>
              <TableRow>
                <TableCell>
                  <p class="title">
                    <b>Blood Test</b>
                  </p>
                  <p class="date">
                    Date of procedure:{" "}
                    <span style={{color: "black"}}>
                      <b> 20/05/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:{" "}
                    <span style={{color: "black"}}>
                      <b> chest</b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <p class="title">
                    <b>Blood Test</b>
                  </p>
                  <p class="date">
                    Date of procedure:{" "}
                    <span style={{color: "black"}}>
                      <b> 01/05/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:{" "}
                    <span style={{color: "black"}}>
                      <b> arm</b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <p class="title">
                    <b>RAST Test</b>
                  </p>
                  <p class="date">
                    Date of procedure:{" "}
                    <span style={{color: "black"}}>
                      <b> 13/03/2021</b>
                    </span>
                  </p>
                  <p class="date">
                    Location on body:{" "}
                    <span style={{color: "black"}}>
                      <b> arm </b>
                    </span>
                  </p>
                </TableCell>
              </TableRow>
              <p class="show-more">
                Show more <i class="angle down icon"></i>
              </p>
            </p.LabResults>
          </div>
>>>>>>> a887d1be86194c48e3e1789c138fd26f8c81c73a
        </div>
      </p.ProfileContainer>
    </div>
  );
};

export default Profile;
