import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as p from './Profile.styles';
import bodyHeight  from './bodyHeight.PNG'; 


const Profile = () => {

    const [age,setAge]=useState("80");
    const [weight,setWeight]=useState("64 kg");
    const [bloodGroup,setBloodGroup]=useState("AB+");
    const [height,setHeight]=useState("180cm");
    const [bloodPressure,setBloodPressure]=useState("=======  120/80 mmHg");
  return (
      <p.ProfileContainer>
        <div class="left-container">
          <div class="PersonalInfo">
            <div class="first-container">
            <p>Full Name</p>
            <p>Id #12345</p>
            <img src="https://www.ajaydubedi.com/wp-content/uploads/2016/06/user-add-icon.png" width="70px" height="70px"/>
            <p>Gender</p>
            </div>
            <div class="second-container">
            <h4>PERSONAL INFORMATION</h4>
            <p>Leke Dukagjini, 03 L5, Dardani</p>
            <p>Prishtine, Kosove</p>
            <h4>CONTACT DETAILS</h4>
            <p>+383 123-456</p>
            <p>albionaberish@gmail.com</p>
            </div>
            <div class="third-container">
              <img src="https://www.madmagazine.com/sites/default/files/styles/read_more_340x256/public/field/image/MAD-Magazine-Trump-Seal-Thumb_582c861b175ba3.41558276.jpg?itok=matAlVCC" width="15px" height="15px"/>
              <img src="https://www.techwikies.com/wp-content/uploads/2019/04/gmail-app-icon-2018.jpg" height="15px" width="15px" />
              <img src="https://www.bing.com/th?id=OIP.K61w8tCEKaKN--vUwjeSSwHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2" height="15px" width="15px" />
            </div>
          </div>

          <div class="BodyInfo"> 
            <div class="body-first-container">
              <div><p>Age:</p>
                <b>{age}</b></div>
              <div><p>Weight:</p>
                <b>{weight}</b></div>
              <div><p>Blood Group:</p>
                <b>{bloodGroup}</b></div>
            </div>
            <div class="body-second-container">
              <img src={bodyHeight} height="50px" width="20px" margin-right="10px"/>
              <div><p>Height:</p>
                <b>{height}</b></div>
            </div>
          </div>

          <div class="bloodPressure">
            <p><b>Blood Pressure</b></p>
            <p id="bp2">{bloodPressure}</p>
          </div>
        </div>
        <div class="right-container">
          <div class="Allergy">Allergy</div>
          <div class="History"> Patient History</div>
          <div class="third-div">
            <div class="proccedures">Proccedures</div>
            <div class="labResults">Lab test Results</div>
          </div>
        </div>
      </p.ProfileContainer>
  );

}

export default Profile