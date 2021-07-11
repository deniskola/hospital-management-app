import * as p from "./Profile.styles";
import AllergiesIcon from "./AllergiesIcon.png";
import history from "./history.PNG";
import LabTestIcon from "./LabTestIcon.png";
import Procedure from "./Procedure.png";
import React, { useEffect } from "react";
import { Button } from "semantic-ui-react";
import AllergiesDashboard from './ProfileDashboard/AllergiesDashboard';
import BodyInfoDashboard from "./ProfileDashboard/BodyInfoDashboard";
import PatientHistoryDashboard from "./ProfileDashboard/PatientHistoryDashboard";
import LabTestDashboard from "./ProfileDashboard/LabTestDashboard";
import ProceduresDashboard from "./ProfileDashboard/ProceduresDashboard";
import { useStore } from "../../../stores/store";
import {observer} from "mobx-react-lite";

function Profile() {
/*--------------- Allergies ------------------------- */
  const {allergiesStore} = useStore();
  const {openAllergyForm}=allergiesStore;
  const {userStore} = useStore();
  const {user} = userStore;
  useEffect(() => {
    allergiesStore.loadPAllergy();
  }, [allergiesStore])
  /*------------- Body Infos ------------------------ */
  const {bodyInfoStore} = useStore();
  const {openBodyInfoForm}=bodyInfoStore;
  useEffect(() => {
    bodyInfoStore.loadBodyInfos();
  },[bodyInfoStore])
/*------------- Patient History  ------------------ */
  const {patientHistoryStore} = useStore();
  const {openHistoryForm}=patientHistoryStore;
  useEffect(() => {
    patientHistoryStore.loadPatientHistories();
  }, [patientHistoryStore])

/*------------- Lab Tests --------------------------- */
  const {labTestStore} = useStore();
  const {openForm}=labTestStore;
  useEffect(() => {
    labTestStore.loadLabTests();
  }, [labTestStore])

/*-------------- Procedures ------------------------ */
  const {proceduresStore} = useStore();
  const {openProcedureForm}=proceduresStore;
  useEffect(() => {
    proceduresStore.loadProcedures();
  }, [proceduresStore])

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
              <img src="https://www.ajaydubedi.com/wp-content/uploads/2016/06/user-add-icon.png" alt=" " width="100px" height="100px"/>
              <p>{user.gender}</p>
            </div>
            <div class="second-container">
              <h4>PERSONAL INFORMATION</h4>
              <p>Leke Dukagjini, 03 L5, Dardani</p>
              <p>Prishtine, Kosove</p>
              <h4>CONTACT DETAILS</h4>
              <p>{user.phoneNumber}</p>
              <p>{user.email}</p>
              <p style={{marginTop: "10px"}}><span style={{color: "purple"}}>Last visited:</span> 14 days ago</p>
            </div>
            <div class="third-container">
              <img src="https://www.madmagazine.com/sites/default/files/styles/read_more_340x256/public/field/image/MAD-Magazine-Trump-Seal-Thumb_582c861b175ba3.41558276.jpg?itok=matAlVCC"  alt=" " width="15px" height="15px"/>
              <img src="https://www.techwikies.com/wp-content/uploads/2019/04/gmail-app-icon-2018.jpg" alt=" " height="15px" width="15px"/>
              <img src="https://www.bing.com/th?id=OIP.K61w8tCEKaKN--vUwjeSSwHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2" alt=" " height="15px" width="15px"/>
            </div>
          </p.PersonalInfo>
          <p.BodyInfo>
              <BodyInfoDashboard />
          </p.BodyInfo>
          <p.Proccedures>
            <div>
              <div class="upper-container">
                <img src={Procedure} alt="logo" style={{marginTop:'5px', marginLeft:'5px', width:'25px', height:'25px'}} />
                <p class="pline" style={{marginRight:'45%'}}>Procedures</p>
                <Button onClick={() => proceduresStore.openProcedureForm()}   color='blue' width='1' ><b><i class="plus  icon"></i></b> </Button>
              </div>
              <ProceduresDashboard />
            </div>
            </p.Proccedures>     
        </div>
        <div class="right-container">
        <p.Allergy>
            <div>
              <div class="upper-container" >
                <img src={AllergiesIcon} alt="logo" style={{marginTop:'5px', marginLeft:'5px'}} />
                <p><b>Allergies</b></p>
                <Button onClick={() => allergiesStore.openAllergyForm()}  color='blue' style={{marginLeft:'71%'}}>+ Add Allergy</Button>
              </div>
            <AllergiesDashboard />
            </div>
        </p.Allergy>
        <p.History>
            <div class="upper-container">
              <img src={history} alt="" />
              <p style={{marginRight:'71%'}}>Patient History</p>
              <Button onClick={() => patientHistoryStore.openHistoryForm()}   color="blue">+ Add</Button>
            </div>
            <PatientHistoryDashboard />
        </p.History>
        <p.LabResults>
              <div class="upper-container">
              <img src={LabTestIcon} alt="logo" style={{marginTop:'5px', marginLeft:'5px', width:'30px', height:'30px'}} />
                <p>Lab Test Results</p>
                <Button onClick={() => labTestStore.openForm()} color='blue' style={{marginLeft:'68%'}}><b>+ Add </b> </Button>
              </div>
              <LabTestDashboard/>   
          </p.LabResults>       
        </div>
      </p.ProfileContainer>
    </div>
  );
};
export default observer(Profile);
 