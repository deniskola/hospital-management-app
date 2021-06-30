import React,{useState} from "react"
import {makeStyles} from "@material-ui/core";

export function useForm(initialValues,validate,setCurrentId){

    const[values,setValues]=useState(initialValues);
    const[errors,setErrors]=useState({});

    const handleInputChange=e=>{
        const{name,value}=e.target
        const fieldValue={[name]:value}
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }

    const resetForm=()=>{
        
        setValues({
            ...initialValues})
        setErrors({})
        setCurrentId(0)
    }

    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const useStyles=makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }
    }
}))

export function Form(props){
    const classes=useStyles();
    const{children,...other}=props;
    return(
        <form noValidate autoComplete="off" {...other}>
            {children}
        </form>
    )
}