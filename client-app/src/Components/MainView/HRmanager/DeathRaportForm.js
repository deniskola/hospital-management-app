import React , {useState,useEffect} from 'react'
import {Grid,withStyles,Button,TextField,ButtonGroup,InputAdornment} from '@material-ui/core';
import useForm from "../Dashboard/dReminder/useForm";
import Form from "../Dashboard/dReminder/Form";
import {connect} from "react-redux";
import {Input} from "../Dashboard/controls";
import * as actions from "./Actions/deathRaport";
import ReplayIcon from '@material-ui/icons/Replay';
import {ToastProvider,useToasts} from "react-toast-notifications";
import Controls from '../mainComponents/controls/Controls';

const genderItems=[
    {id:'male',title:'Male'},
    {id:'female',title:'Female'}
]
const styles=theme=>({
    adornmentText:{
        '& .MuiTypography-root':{
            color:'#7238E6',
            fontWeight:'bolder',
            fontSize:'1.5em'
        }
    },
    submitButtonGroup:{
        backgroundColor:"#A070FE",
        color:'#fff',
        margin:theme.spacing(1),
        '& .MuiButton-label':{
            textTransform:'none'
        },
        '&:hover':{
            backgroundColor:'#F8A749'
        }
    }
})

const initialFieldValues = {
    causeOfDeath:'',
    deathDate:''
}

const DeathRaportForm=({classes,...props})=>{
    const{addToast}=useToasts()
    
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('causeOfDeath' in fieldValues)
            temp.causeOfDeath=fieldValues.causeOfDeath?"":"This field is required."

        setErrors({
            ...temp
        })

        if(fieldValues==values)
            return Object.values(temp).every(x=>x=="")
    }

    const {
        values,setValues,errors,setErrors,handleInputChange,resetForm
    }=useForm(initialFieldValues,validate,props.setCurrentId)

    const handleSubmit=e=>{
        e.preventDefault()
        if(validate()){
            const onSuccess=()=>{
                resetForm()
                addToast("Submitted successfully",{appearance:'success'})
            }
            if(props.currentId==0)
                props.createDeathRaport(values,onSuccess)
            else
                props.updateDeathRaport(props.currentId,values,onSuccess)
        }
    }

    useEffect(()=>{
        if(props.currentId!=0){
            setValues({
                ...props.deathRaportList.find(x=>x.id==props.currentId)
            })
            setErrors({})
        }
    },[props.currentId])

    return(
        <div>
        <Form  autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container container direction="row" justify="flex-start" alignItem="center" >
                <Grid item xs={4}>
                <Input name="causeOfDeath" label="Cause of Death" value={values.causeOfDeath} onChange={handleInputChange} {...(errors.causeOfDeath
                         && {error:true,helperText:errors.causeOfDeath})}/>
                 <TextField
                        name="deathDate"
                        label="Death Date"
                        variant="outlined"
                        value={values.deathDate}
                        type="date"
                        className={classes.textField}
                        onChange={handleInputChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        {...(errors.deathDate && {error: true, helperText:errors.deathDate})}/>

                <ButtonGroup className={classes.submitButtonGroup}>
                    <Button size="large" type="submit"> Submit</Button>    
                    <Button size="small" onClick={resetForm} startIcon={<ReplayIcon/>} />                       
                </ButtonGroup>
                </Grid>
            </Grid>
        </Form>
        </div>
    );
}

const mapStateToProps=state=>({
    deathRaportList:state.dReminders.list
})

const mapActionToProps={
    createDeathRaport:actions.create,
    updateDeathRaport:actions.update
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(DeathRaportForm))

