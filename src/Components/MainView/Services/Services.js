import React from 'react';
import ServicesContainer from './Services.styles';


const Services = () => {
  return(


<ServicesContainer>
  <div class="container">

<div class="leftcontainer">

<div class= "upperleft">
<img src="icons/hospital.png" alt="hospital photo" width="170px"></img>
<table>
<tr><b>Address:</b> Bill Clinton Boulevard <br></br>
<b>City/State:</b> Prishtina, Kosova<br></br>
<b>Zip Code:</b> 10000<br></br>
<b>Phone Number:</b> +38344222555<br></br>
<b>Email:</b> hospital@gmail.com<br></br>
</tr>
</table>
</div>

<div class="lowerleft">
<h2><b>About Us Text</b></h2>
<p>The Hospital has over two decades of experience in the healthcare <br></br>
 sector, and is known for providing quality healthcare and valuable<br></br> 
 experience to all domestic and international patients. Our ,<br></br>
 healthcare offerings are supported by a team of compassionate <br></br>
  and dedicated medical professionals who have rich knowledge <br></br>
   and experience in their respective domains.<br></br>
Our Hospital is the largest public health care system in Kosova. We <br></br>
provide  essential inpatient, outpatient and home-based services <br></br>
 to more tan one million residents of Kosova every year in more <br></br>
 than 60 locations across the state's five boroughs.<br></br>
Our Hospital services empower Kosova's to live their healthiest life.<br></br>
 We offer high quality, culturally responsive, and affordable health<br></br> 
 care for children adolescents, adults, and seniors
</p>
</div>

 
</div>

<div class="rightcontainer">
<div class="services">
  <img src="icons/cardiology.png" alt="cardiology" width="100px" ></img> 
  <p><b>Cardiology</b></p>
</div>

<div class="services">
<img src="icons/haematology.png" alt="haematology" width="97px" ></img>
<p><b>Haematology</b></p>
</div>

<div class="services">
<img src="icons/pulmonology.png" alt="pulmonolgy" width="100px" ></img>
<p><b>Pulmonology</b></p>
</div>

<div class="services">
<img src="icons/gastroenterology.png" alt="gastroenterology" width="100px" ></img>
<p><b>Gastroenterology</b></p>
</div>

<div class="services" >
<img src="icons/orthopaedics.png" alt="orthopaedics" width="100px" ></img>
<p><b>Orthopaedics </b></p>
</div>

<div class="services" id="service">
  <p id="services"><b>View More</b></p>
</div>


</div>

</div>

</ServicesContainer>
)

}

export default Services