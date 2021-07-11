import React, { useState } from "react";
import {Segment, Button} from 'semantic-ui-react';
import { ButtonGroup } from '@material-ui/core'; 
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ProceduresList(){
  const {proceduresStore} = useStore();
  const {deleteProcedure, proceduresByDate, loading} = proceduresStore;
  const { userStore } = useStore();
  const { user } = userStore;
  const [target, setTarget] = useState("''");

  function handleProcedureDelete( e, id){
    setTarget(e.currentTarget.name);
    deleteProcedure(id);
  } 
    return(
        <Segment>
             <table>
                  <body>
                    {
                      proceduresByDate.map(procedure =>(
                      <tr class="tabela">
                        <tr key={procedure.id}> 
                          <td>Procedure</td>
                          <td style={{width:'150px', color:'purple'}}><b>{procedure.name}</b></td>
                        </tr>
                        <tr>
                          <td>Date:</td>
                          <td><b>{procedure.date}</b></td>
                        </tr>
                        <tr>
                          <td><p style={{marginRight:'30px'}}>Location on Body:</p></td>
                          <td style={{marginBottom:'20px', marginLeft:'20px'}}><b>{procedure.locationOnBody}</b></td>
                        </tr>
                        <br></br>
                        <tr>
                          <ButtonGroup class="ui small basic icon buttons">
                            <Button basic onClick={() => proceduresStore.selectProcedure(procedure.id)}  class="ui button"><i class="edit icon"></i></Button>
                            <Button name={procedure.id}
                                        loading={loading && target === procedure.id}
                                        onClick={(e) => handleProcedureDelete(e, procedure.id)}  class="ui button"><i class="window close outline icon"></i></Button>
                          </ButtonGroup>
                        </tr>
                        <br></br><br></br><br></br>
                      </tr>
                      ))}
                  </body>
                </table>
        </Segment>
    )
})