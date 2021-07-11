import React, { useState } from "react";
import {Segment, Button} from 'semantic-ui-react';
import { Table, TableBody, TableCell, TableHead, TableRow, ButtonGroup } from '@material-ui/core'; 
import bodyHeight from "../bodyHeight.PNG";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function BodyInfoList (){
    const {bodyInfoStore} = useStore();
    const { bodyinfosByAge, loading} = bodyInfoStore;
    const { userStore } = useStore();
    const { user } = userStore;
 
    return(
        <Segment style={{margin:'12px 0px 13px 14px', width:'350px'}} >
            <Table/>
                  <TableBody style={{marginTop:'0px'}}>
                    {
                    bodyinfosByAge.map(bodyinfo => (
                        <div>
                                <TableRow key={bodyinfo.id}> 
                                    <TableCell style={{width:'100px'}}> 
                                        <TableRow>
                                            <TableRow><b>Age:</b></TableRow><br></br>
                                            <TableRow>{bodyinfo.mosha}</TableRow>
                                        </TableRow>
                                    </TableCell>
                                    <TableCell style={{width:'110px'}}>
                                        <TableRow>
                                            <TableRow><b>Weight:</b></TableRow><br></br>
                                            <TableRow>{bodyinfo.pesha}</TableRow>
                                        </TableRow>
                                    </TableCell>
                                    <TableCell style={{width:'110px'}}>
                                        <TableRow>
                                            <TableRow><b>Blood group:</b></TableRow><br></br>
                                            <TableRow>{bodyinfo.grupiGjakut}</TableRow>
                                        </TableRow>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div>
                                            <img src={bodyHeight}/>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <TableRow>
                                            <TableRow><b>Height:</b></TableRow><br></br>
                                            <TableRow>{bodyinfo.gjatesia}</TableRow>
                                        </TableRow>
                                    </TableCell>
                                    {user.role === "admin" && (
                                    <ButtonGroup>
                                        <Button basic  onClick={() => bodyInfoStore.selectBodyInfo(bodyinfo.id)} color='black' style={{marginTop:'70px', marginLeft:'40px'}}><i class="edit icon">Edit </i></Button>
                                    </ButtonGroup>
                                    )}
                                </TableRow>
                        </div>
                          
                      ))}
                  </TableBody>
        </Segment>
    )
})