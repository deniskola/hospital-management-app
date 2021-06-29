import React , {useState,useEffect} from 'react'
import {Grid,withStyles,Button,TextField,ButtonGroup,InputAdornment} from '@material-ui/core';
import useForm from "../Dashboard/dReminder/useForm";
import Form from "../Dashboard/dReminder/Form";
import {connect} from "react-redux";
import {Input,Select} from "../Dashboard/controls";
import * as actions from "./Actions/hrDoctor";
import ReplayIcon from '@material-ui/icons/Replay';
import {ToastProvider,useToasts} from "react-toast-notifications";
import Controls from './controls/Controls';

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
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    date:'',
    address:'',
    role:'Doctor',
    department:'',
    designation:'',
    specialist:'',
    bloodgroup:'',
    degree:'',
    gender:''
}

const DoctorForm=({classes,...props})=>{
    const{addToast}=useToasts()
    
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('asd' in fieldValues)
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
                ...props.doctorList.find(x=>x.id==props.currentId)
            })
            setErrors({})
        }
    },[props.currentId])

    return(
        <div>
        <Form  autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container container direction="row" justify="flex-start" alignItem="center" >
                <Grid item xs={4}>
                <Input name="firstName" label="First Name" value={values.fullName} onChange={handleInputChange} {...(errors.firstName
                         && {error:true,helperText:errors.firstName})}/>
                <Input name="lastName" label="Last Name" value={values.lastName} onChange={handleInputChange} {...(errors.lastName
                         && {error:true,helperText:errors.firstName})}/>
                <Input name="userName" label="User Name" value={values.userName} onChange={handleInputChange} {...(errors.userName
                         && {error:true,helperText:errors.userName})}/>
                <Input name="email" label="Email" value={values.email} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>

                <Input name="address" label="Address" value={values.address} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>

                <Controls.RadioGroup name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={genderItems} 
                        {...(errors.gender && {error:true,helperText:errors.gender})}/>

                </Grid>
                <Grid item xs={4} >
                <TextField
                        name="date"
                        label="Date"
                        variant="outlined"
                        value={values.date}
                        type="date"
                        className={classes.textField}
                        onChange={handleInputChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        {...(errors.reminderDate && {error: true, helperText:errors.reminderDate})}/>

                <Input name="department" label="Department" value={values.departmnet} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})} />
                <Input name="designation" label="Designation" value={values.designation} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>
                <Input name="specialist" label="Specialist" value={values.specialist} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>
                <Input name="bloodgroup" label="Blood Group" value={values.bloodgroup} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>
                <Input name="degree" label="Degree" value={values.degree} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>
                
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
    doctorList:state.dReminders.list
})

const mapActionToProps={
    createDReminder:actions.create,
    updateDReminder:actions.update
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(DoctorForm))

