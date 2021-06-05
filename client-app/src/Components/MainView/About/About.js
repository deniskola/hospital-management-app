import React, { useEffect, useState } from "react";
import AboutDash from "./AboutDash/AboutDash";
import { Button } from "semantic-ui-react";
import {v4 as uuid} from 'uuid';
import agent from '../../../api/agent';


function About() {
  const [about, setAbout] = useState([]);
  const [selectedAbout, setSelectedAbout] = useState(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Abouts.list().then(response =>{
      setAbout(response);
      setLoading(false);
    })
  }, [])

  function handleSelectAbout(id){
    setSelectedAbout(about.find(x => x.id === id));
  }

  function handleCancelSelectAbout(){
    setSelectedAbout(undefined);
  }


  function handleFormOpen(id){
    id ? handleSelectAbout(id) : handleCancelSelectAbout();
    setEditMode(true);
  }

  function handleFormClose(id){
    setEditMode(false);
  }

  function handleCreateOrEditAbout(ab){
    setSubmitting(true);
    if(ab.id){
      agent.Abouts.update(ab).then(()=>{
        setAbout([...about.filter(x => x.id !== ab.id), ab]) 
        setSelectedAbout(ab);
        setEditMode(false);
        setSubmitting(false);
      })
    }else {
      ab.id = uuid();
      agent.Abouts.create(ab).then(()=> {
        setAbout([...about, ab])
        setSelectedAbout(ab);
        setEditMode(false);
        setSubmitting(false);

      })
    }
  }

  function handleDeleteAbout(id){
    setSubmitting(true);
    agent.Abouts.delete(id).then(() =>{
      setAbout([...about.filter(x=> x.id !==id)])
      setSubmitting(false);
    })
    
  }

 
  return (
    <div>
          <div> 
            <Button onClick={handleFormOpen} color="black" content="+" floated="left"/>
            <AboutDash 
              about={about}
              selectedAbout = {selectedAbout}
              selectAbout = {handleSelectAbout}
              cancelSelectAbout = {handleCancelSelectAbout}
              editMode={editMode}
              openForm={handleFormOpen}
              closeForm={handleFormClose}
              createOrEdit ={handleCreateOrEditAbout}
              deleteAbout ={handleDeleteAbout}
              submitting ={submitting}
            />
          </div> 
    </div>
  )
}

export default About