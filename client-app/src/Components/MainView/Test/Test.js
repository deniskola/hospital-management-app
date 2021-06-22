import React from 'react';
import {Link} from 'react-router-dom'
import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from "../../LoginPage/MyTextInput";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { Label, Button } from "semantic-ui-react";

export default observer(function Test() {

  const {userStore} = useStore();
  return (
    <div className="login-container">
          <h3>Register a new Admin</h3>
          <p>...</p>
      
          <Formik
            initialValues={{displayName: '', username: '', email: '', password: '', role: 'admin', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.register(values).catch(error => setErrors({error: 'Invalid email or password'}))}
          >
            {({handleSubmit, isSubmitting, errors})=>(
              <Form onSubmit={handleSubmit} autoComplete='off'>
                 
                  <MyTextInput style={{marginBottom: "20px"}} name='displayName' placeholder='DisplayName' />
                  
                  <MyTextInput style={{marginBottom: "20px"}} name='username' placeholder='Username' />
                  
                  <MyTextInput style={{marginBottom: "20px"}} name='email' placeholder='Email' />
                  
                  <MyTextInput style={{marginBottom: "20px"}} name='password' placeholder='Password' type='password' />

                  <MyTextInput style={{display:"none"}} name='role' placeholder='Role' />
                  <ErrorMessage
                    name= 'error' render={()=> 
                    <Label style={{marginBottom: "10px", marginTop: "10px", width: "100%", textAlign:"center"}} basic color='red' content={errors.error}/>}
                  />
                  <Button loading={isSubmitting} content='Register' type="submit" 
                  style={{ marginTop: "25px",backgroundColor: "#A071FF",color: "white",
                   borderRadius: "50px", width: "250px"}}/>
           
              </Form>
            )}
          </Formik>
          
        </div>
     
  );
});


