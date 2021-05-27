import * as p from './Profile.styles';
import bodyHeight  from './bodyHeight.PNG'; 
import AllergiesIcon  from './AllergiesIcon.png'; 
import history  from './history.PNG'; 
import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddAllergyModal} from './Allergies/AddAllergyModal';
import {EditAllergyModal} from './Allergies/EditAllergyModal';


export class Profile extends Component{

  constructor(props){
    super(props);
    this.state={Allergies:[], addModalShow: false, editModalShow: false}
  }
  
  deleteAllergy(aid){
    if(window.confirm('Are you sure?')){
        fetch(process.env.REACT_APP_API+'Pacienti/'+aid,{
            method:'DELETE',
            header:{'Accept':'application/json',
            'Content-type':'application/json'}
        })
    }
  }
  render(){
      const { Allergies, aid , aType, adesc}=this.state;
      let addModalClose=()=>this.setState({addModalShow:false});
      let editModalClose=()=>this.setState({editModalShow:false});
    return (
      <div>
      <p.ProfileContainer>
        <div class="left-container">
          <p.PersonalInfo>
            <div class="first-container">
            <p>Full Name</p>
            <p>Id #12345</p>
            <img src="https://www.ajaydubedi.com/wp-content/uploads/2016/06/user-add-icon.png" alt=" " width="70px" height="70px"/>
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
              <img src="https://www.madmagazine.com/sites/default/files/styles/read_more_340x256/public/field/image/MAD-Magazine-Trump-Seal-Thumb_582c861b175ba3.41558276.jpg?itok=matAlVCC" alt=" " width="15px" height="15px"/>
              <img src="https://www.techwikies.com/wp-content/uploads/2019/04/gmail-app-icon-2018.jpg" alt=" " height="15px" width="15px" />
              <img src="https://www.bing.com/th?id=OIP.K61w8tCEKaKN--vUwjeSSwHaHa&w=204&h=204&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2" alt=" " height="15px" width="15px" />
            </div>
          </p.PersonalInfo>

          <p.BodyInfo> 
            <div class="body-first-container">
              <div><p>Age:</p>
                <b>58</b></div>
              <div class="vertical-line"><p>Weight:</p>
                <b>70</b></div>
              <div class="vertical-line"><p>Blood Group:</p>
                <b>AB</b></div>
            </div>
            <div class="body-second-container">
              <img src={bodyHeight} alt="" height="50px" width="20px" margin-right="10px"/>
              <div><p>Height:</p>
                <b>168</b></div>
            </div>
          </p.BodyInfo> 

          <p.bloodPressure>
            <p><b>Blood Pressure</b></p>
            <p id="bp2">120</p>
          </p.bloodPressure>
        </div>

        <div class="right-container">
          <p.Allergy>
            <div class="upper-container">
              <img src={AllergiesIcon} alt=""/> 
              <p>Allergies</p>
            </div>
            <div class="lower-container">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type of Allergy:</th>
                    <th>Description</th>
                    <th>edit/delete</th>
                  </tr>
                </thead>
                <tbody>
                    {Allergies.map(allergy=>                                 
                      <tr>         
                        <td>{allergy.id}</td>             
                        <td>{allergy.typeA}</td>
                        <td>{allergy.desc}</td>
                        <td><ButtonToolbar>
                            <Button className="mr-2" variant="info"
                            onClick={()=>this.setState({editModalShow: true, aid:allergy.id, aType:allergy.typeA, adesc:allergy.desc})}>
                            Edit</Button>
                            <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteAllergy(allergy.id)}>
                            Delete
                            </Button>

                            <EditAllergyModal show={this.state.editModalShow}
                            onHide={editModalClose}
                            aid={aid}
                            aType={aType}
                            adesc={adesc}
                            />
                            </ButtonToolbar>
                        </td>
                      </tr>)}
                </tbody>
              </Table>
            </div>
            <ButtonToolbar>
              <Button variant="info" onClick={()=>this.setState({addModalShow:true})} >
                Add Allergy
              </Button>
              <AddAllergyModal show={this.state.addModalShow}
                onHide={addModalClose}/>
            </ButtonToolbar>
          </p.Allergy>




          <p.History>
            <div class="upper-container">
              <img src={history} alt=""/> 
              <p>Patient History</p>
            </div>
            <div class="lower-container">
              <Table>
                <thead>
                  <tr class="history-row">
                    <th>ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Doctor</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </Table>
            </div>
          </p.History>

          <div class="third-div">
            <p.Proccedures>
              <p class="pline">Proccedures</p>
            </p.Proccedures>
            <p.LabResults>
            <p class="pline">Lab test Results</p>
            </p.LabResults>
          </div>
        </div>
        
      </p.ProfileContainer>
      </div>
    )
  }
}

export default Profile