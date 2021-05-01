import React,{ useState } from 'react';

import * as s from './Dashboard.styles';

const Dashboard=()=>{

    const [name,setName]=useState("Dr.John Doe");
    const [job,setJob]=useState("General Practitioners");
    const [about,setAbout]=useState("(5.0) stars ...");

   return(
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
   )
}

export default Dashboard