import React, { useState, useEffect, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as p from './Profile.styles';

const Profile = () => {
  return (
      <p.ProfileContainer>
        <div class="left-container">
          <div class="PersonalInfo">Personal Information</div>
          <div class="BodyInfo"> Body information</div>
          <div class="bloodPressure">Blood Pressure</div>
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