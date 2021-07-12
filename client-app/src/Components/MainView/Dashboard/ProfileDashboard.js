import React from "react";
import {makeStyles} from "@material-ui/core";
import Card from '../mainComponents/Card.js';
import CardBody from '../mainComponents/CardBody.js';
import CardAvatar from "../mainComponents/CardAvatar";
import {Link} from "react-router-dom";
import {useStore} from "../../../stores/store";
import GridItem from '../mainComponents/GridItem.js';

const useStyles=makeStyles(theme=>({
    card:{
        width:272,
        height:282,
        borderRadius:"25px!important",
        top:"-150px",
        right:"-60px"
    }
}))
function ProfileDashboard(){
    const classes=useStyles();
    const {userStore} = useStore();
    const {user} = userStore;

    return(
            <Card className={classes.card}>
                <CardBody profile style={{height:"121px"}}>
                    <h4 style={{position:"relative",left:"-80px",color:"#fff"}}>My Profile</h4>
                </CardBody>
                <CardBody plain style={{height:"141px"}}>
                    <CardAvatar profile style={{backgroundColor:"#8e59fa"}}>
                        <Link to="/profile">
                            <img src="https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248uragw.png" 
                            alt=".." style={{position:"relative",top:"5px",right:"-5px"}}/>
                        </Link>
                    </CardAvatar>
                    <h3 style={{position:"relative",top:"10px"}}>Jane Doe</h3> 
                    <h5 style={{position:"relative",top:"15px"}}>Surgeon</h5>
                </CardBody>
            </Card>
    )
}
//{user.firstName}
export default ProfileDashboard;
