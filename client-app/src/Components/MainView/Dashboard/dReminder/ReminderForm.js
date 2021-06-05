import React ,{useState,useEffect} from 'react';
import { Grid, InputAdornment,withStyles,MenuItem,ButtonGroup,Button as MuiButton, TextField,} from '@material-ui/core';
import useForm from "./useForm";
import  {connect} from "react-redux";
import * as actions from "../actions/dReminder";
import {ToastProvider,useToasts} from "react-toast-notifications";
import {Input,Select,Button} from "../controls";
import ReplayIcon from '@material-ui/icons/Replay';
import Form from './Form';

const styles=theme=>({
    adornmentText:{
        '& .MuiTypography-root':{
            color:'#FECB90',
            fontWeight:'bolder',
            fontSize:'1.5em'
        }
    },
    submitButtonGroup:{
        backgroundColor:"#FECB90",
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
    reminderTitle:'',
    reminderDate:''
}

const ReminderForm=({classes,...props})=>{
    const{addToast}=useToasts()

    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('reminderTitle' in fieldValues)
            temp.reminderTitle=fieldValues.reminderTitle?"":"This field is required."
        if('reminderDate' in fieldValues)
            temp.reminderDate=fieldValues.reminderDate?"":"This field is required."

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
                props.createDReminder(values,onSuccess)
            else
                props.updateDReminder(props.currentId,values,onSuccess)
        }
    }

    useEffect(()=>{
        if(props.currentId!=0){
            setValues({
                ...props.dReminderList.find(x=>x.id==props.currentId)
            })
            setErrors({})
        }
    },[props.currentId])

    return(
        <div>
        <Form  autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Input
                        label="Title"
                        name="reminderTitle"
                        value={values.title}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment:<InputAdornment
                            className={classes.adornmentText}
                            position="start">#</InputAdornment>
                        }}
                        {...(errors.reminderTitle && {error:true,helperText:errors.reminderTitle})}
                        />
                </Grid>
                <Grid item xs={4}>
                <TextField
                        name="reminderDate"
                        label="Date"
                        value={values.date}
                        type="date"
                        className={classes.textField}
                        onChange={handleInputChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        {...(errors.reminderDate && {error: true, helperText:errors.reminderDate})}
                    />
                </Grid>
                <ButtonGroup className={classes.submitButtonGroup}>
                    <MuiButton size="large" type="submit"> Submit</MuiButton>    
                    <MuiButton size="small" onClick={resetForm} startIcon={<ReplayIcon/>} />                       
                </ButtonGroup>
            </Grid>
        </Form>
        </div>
    );
}

const mapStateToProps=state=>({
    dReminderList:state.dReminder.list
})

const mapActionToProps={
    createDReminder:actions.create,
    updateDReminder:actions.update
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(ReminderForm))

/*

                        


                        <TextField
                        name="reminderDate"
                        label="Date"
                        value={values.date}
                        type="date"
                        defaultValue="2021-06-04"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        {...(errors.reminderDate && {error: true, helperText:errors.reminderDate})}
                    />



                    <Input
                        label="Date"
                        name="reminderDate"
                        value={values.date}
                        onChange={handleInputChange}
                        InputProps={{
                            startAdornment:<InputAdornment
                            className={classes.adornmentText}
                            position="start">#</InputAdornment>
                        }}
                        {...(errors.reminderDate && {error: true, helperText:errors.reminderDate})}
                        />
*/