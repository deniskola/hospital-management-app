import React from "react";
import {makeStyles,Typography} from "@material-ui/core";
import Card from '../mainComponents/Card.js';

const useStyles=makeStyles(theme=>({
    cardDoctors:{
        display:"inline-block!important",
    }
}))

function PatientList(){

    const classes=useStyles();

    return(

        <Typography variant="h5">
        <div style={{backgroundColor:"#d8bbfb",height:"50px",width:"50px",borderRadius:"20px",margin:"10px 0 0 10px"}} >
            <img src="https://image.flaticon.com/icons/png/512/921/921129.png" height="50px" width="50px" margin="auto"/>
        </div>
        <h4 style={{position:"relative",top:"-30px",}}>
            18/05/2021

            Jane Doe

            25

            Diabeties

            <span style={{color:"#5a0df8"}}> Last:24/04/2021</span>
        </h4>
        </Typography>

    )
}
export default PatientList;