import React,{useState,useEffect} from 'react';
import { List, ListItem ,ListItemText,Paper,InputBase,IconButton,withStyles, ListItemSecondaryAction} from '@material-ui/core';
import {createAPIEndpoint,ENDPOINTS} from "../api";
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import {connect} from "react-redux";
import * as actions from "../actions/dReminder";

const styles=theme=>({
    searchPaper:{
        padding:'1px',
        dipslay:'flex',
        alignItems:'center',
        width:'250px'
    },
    searchInput :{
        marginLeft:theme.spacing(1.5),
        flex:1,
    },
    listRoot:{
        marginTop:theme.spacing(1),
        maxHeight:250,
        maxWidth:250,
        overflow:'auto',
        '& li:hover':{
            cursor:'pointer',
            backgroundColor:'#E3E3E3'
        },
        '& li:hover .MuiButtonBase-root':{
            display:'block',
            color:'#000',
        },
        '& .MuiButtonBase-root':{
            display:'none'
        },
        '& .MuiButtonBase-root:hover':{
            backgroundColor:'transparent'
        }
    }
})

const SearchReminder=({classes,...props})=>{

const[reminderList,setReminderList]=useState([]);
const[searchList,setSearchList]=useState([]);
const[searchKey,setSearchKey]=useState('');
const[show,setShow]=useState(false)

useEffect(()=>{
    createAPIEndpoint(ENDPOINTS.DREMINDER).fetchAll()
    .then(res=>{
        setReminderList(res.data);
        setSearchList(res.data);
    }).catch(err=>console.log(err))
},[])


useEffect(()=>{
    let x=[...reminderList];
    x=x.filter(y=>{
        return y.reminderTitle.toLowerCase().includes(searchKey.toLocaleLowerCase())
    });
    setSearchList(x);
},[searchKey])

    return(
        <>
        <Paper className={classes.searchPaper}>
            <InputBase className={classes.searchInput}
            value={searchKey}
            onChange={e=> setSearchKey(e.target.value)}
            placeholder="Search reminders"
            onClick={()=>setShow(true)}
            onDoubleClick={()=>setShow(false)}/>
            <IconButton>
                <SearchTwoToneIcon/>
            </IconButton>
        </Paper>
        {
            show?( 
                <List className={classes.listRoot}>
                    {
                        searchList.map((item,idx)=>(
                            <ListItem key={idx}>
                                <ListItemText 
                                    primary={item.reminderTitle}
                                    secondary={item.reminderDate}/>
                                </ListItem>
                        ))
                    }
                </List>
                ):null
        }
        </>
    )
}

const mapStateToProps=state=>({
    dReminderList:state.dReminder.list
  })
  
const mapActionToProps = {
    fetchAllDReminders:actions.fetchAll,
    deleteDReminder:actions.Delete
}


export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(SearchReminder));