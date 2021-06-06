import React from "react";
import {makeStyles} from "@material-ui/core";
import Card from '../mainComponents/Card.js';
import CardHeader from '../mainComponents/CardHeader.js';
import CardBody from '../mainComponents/CardBody.js';
import classNames from "classnames";
import CardAvatar from "../mainComponents/CardAvatar";
import {Link} from "react-router-dom";


const useStyles=makeStyles(theme=>({
    card:{
        width:272,
        height:282,
        borderRadius:"25px!important"
    }
}))
function ProfileDashboard(){
    const classes=useStyles();

    return(
        <Card className={classes.card}>
            <CardBody profile>
            </CardBody>
            <CardBody plain>
                <CardAvatar profile>
                    <Link to="/profile">
                        <img src="https://images.all-free-download.com/images/graphicthumb/vector_doctor_design_elements_set_533210.jpg" alt=".."/>
                    </Link>
                </CardAvatar>
            </CardBody>
        </Card>
    )
}

export default ProfileDashboard;
