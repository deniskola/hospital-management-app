import React , {useState,useEffect} from 'react'
import {Grid,withStyles,Button,TextField,ButtonGroup,InputAdornment} from '@material-ui/core';
import useForm from "../Dashboard/dReminder/useForm";
import Form from "../Dashboard/dReminder/Form";
import {connect} from "react-redux";
import {Input} from "../Dashboard/controls";
import * as actions from "./Actions/birthRaport";
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
    childName:'',
    weight:'',
    fatherName:'',
    gender:'',
    birthDate:'',
}

const BirthRaportForm=({classes,...props})=>{
    const{addToast}=useToasts()
    
    const validate=(fieldValues=values)=>{
        let temp={...errors}
        if('childName' in fieldValues)
            temp.childName=fieldValues.childName?"":"This field is required."
        if('fatherName' in fieldValues)
            temp.fatherName=fieldValues.fatherName?"":"This field is required."
        if('weight' in fieldValues)
            temp.weight=fieldValues.weight?"":"This field is required."

        
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
                props.createBirthRaport(values,onSuccess)
            else
                props.updateBirthRaport(props.currentId,values,onSuccess)
        }
    }

    useEffect(()=>{
        if(props.currentId!=0){
            setValues({
                ...props.birthRaportList.find(x=>x.id==props.currentId)
            })
            setErrors({})
        }
    },[props.currentId])

    return(
        <div>
        <Form  autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container container direction="row" justify="flex-start" alignItem="center" >
                <Grid item xs={4}>
                <Input name="childName" label="Child Name" value={values.childName} onChange={handleInputChange} {...(errors.childName
                         && {error:true,helperText:errors.childName})}/>
                <Input name="weight" label="Weight " value={values.weight} onChange={handleInputChange} {...(errors.weight
                         && {error:true,helperText:errors.weight})}/>
                <Input name="fatherName" label="Father Name" value={values.fatherName} onChange={handleInputChange} {...(errors.fatherName
                         && {error:true,helperText:errors.fatherName})}/>
                </Grid>
                <Grid item xs={4}>
                <Controls.RadioGroup name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={genderItems} 
                        {...(errors.gender && {error:true,helperText:errors.gender})}/>
                <TextField
                        name="birthDate"
                        label="Date"
                        variant="outlined"
                        value={values.birthDate}
                        type="date"
                        className={classes.textField}
                        onChange={handleInputChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        {...(errors.birthDate && {error: true, helperText:errors.birthDate})}/>
                
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
    birthRaportList:state.dReminders.list
})

const mapActionToProps={
    createBirthRaport:actions.create,
    updateBirthRaport:actions.update
}

export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(BirthRaportForm))

