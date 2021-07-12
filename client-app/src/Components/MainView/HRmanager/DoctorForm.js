import React , {useState,useEffect} from 'react'
import {Grid,withStyles,Button,TextField,ButtonGroup,InputAdornment} from '@material-ui/core';
import useForm from "../Dashboard/dReminder/useForm";
import Form from "../Dashboard/dReminder/Form";
import {connect} from "react-redux";
import {Input,Select} from "../Dashboard/controls";
import * as actions from "./Actions/hrDoctor";
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
const bloodGroup=[
    {id:'A',title:'A'},
    {id:'AB',title:'AB'},
    {id:'B',title:'B'},
    {id:'0',title:'0'}
]

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
    gender:'',
    password:''
}

const DoctorForm=({classes,...props})=>{
    const{addToast}=useToasts()
    

    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('firstName' in fieldValues)
            temp.firstName=fieldValues.firstName ? "":"This field is required."
        if('lastName' in fieldValues)
            temp.lastName=fieldValues.lastName ? "":"This field is required."
        if('email' in fieldValues)
            temp.email=(/$^|.+@.+..+/).test(fieldValues.email)? "":"Email is not valid"
            temp.email=fieldValues.email?"":"This field is required"
        if('password' in fieldValues)
            temp.password=fieldValues.password.length > 8 ? "":"Minimum 8 chars required"
        if('department' in fieldValues)
            temp.department=fieldValues.department ? "":"This field is required."
        if('specialist' in fieldValues)
            temp.specialist=fieldValues.specialist ? "":"This field is required."

        setErrors({...temp})

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
                props.createDoctor(values,onSuccess)
            else
                props.updateDoctor(props.currentId,values,onSuccess)
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
                         && {error:true,helperText:errors.lastName})}/>
                <Input name="userName" label="User Name" value={values.userName} onChange={handleInputChange} {...(errors.userName
                         && {error:true,helperText:errors.userName})}/>
                <Input name="email" label="Email" value={values.email} onChange={handleInputChange} {...(errors.email
                         && {error:true,helperText:errors.email})}/>
                <Input name="password" label="Password" type="password" value={values.password} onChange={handleInputChange}   {...(errors.password
                        && {error:true,helperText:errors.password})} />
                <Input name="address" label="Address" value={values.address} onChange={handleInputChange} {...(errors.address
                         && {error:true,helperText:errors.address})}/>
                <Controls.RadioGroup name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={genderItems} 
                        {...(errors.gender && {error:true,helperText:errors.gender})}/>

                </Grid>
                <Grid item xs={4} >
                <TextField name="date" label="Date"
                        variant="outlined" value={values.date} type="date" className={classes.textField} onChange={handleInputChange} 
                        InputLabelProps={{shrink: true, }} {...(errors.date && {error: true, helperText:errors.date})}/>    

                <Input name="department" label="Department" value={values.departmnet} onChange={handleInputChange} {...(errors.department
                         && {error:true,helperText:errors.department})} />
                <Input name="designation" label="Designation" value={values.designation} onChange={handleInputChange} {...(errors.designation
                         && {error:true,helperText:errors.designation})}/>
                <Input name="specialist" label="Specialist" value={values.specialist} onChange={handleInputChange} {...(errors.specialist
                         && {error:true,helperText:errors.specialist})}/>
                <Input name="degree" label="Degree" value={values.degree} onChange={handleInputChange} {...(errors.degree
                         && {error:true,helperText:errors.degree})}/>
                <Select label="Blood Group" name="bloodgroup" value={values.bloodgroup} options={bloodGroup} onChange={handleInputChange} 
                        {...(errors.bloodgroup && {error:true,helperText:errors.bloodgroup})}/>
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
    createDoctor:actions.create,
    updateDoctor:actions.update
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(DoctorForm))

