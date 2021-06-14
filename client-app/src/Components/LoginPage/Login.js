import React from "react";
import {Link} from 'react-router-dom'
import welcomeImage from "../../assets/welcome-img.png";
import backgroundImage from "../../assets/background-img.jpg";
import * as s from "./Login.styles";
import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from "./MyTextInput";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { Label, Button } from "semantic-ui-react";

export default observer(function Login() {

  const {userStore} = useStore();
  return (
    <s.LoginContainer>
      <img class="background-img" src={backgroundImage} alt=""></img>
      <div class="transparent-background"></div>
      <div class="content">
        <div class="welcome-box">
          <div class="welcome-text">
            <h1>Welcome</h1>
            <h3>to our Hospital</h3>
            <h6>web app</h6>
          </div>
          <img src={welcomeImage} alt=""></img>
        </div>
        <div class="login-form">
          <div class="logo"></div>
          <div class="login-header">
            <h3>Login</h3>
            <p>Login to your account</p>
            <hr
              style={{ width: "80%", borderColor: "black", borderTop: "none" }}
            ></hr>
          </div>
          <Formik
            initialValues={{email: '', password: '', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.login(values).catch(error => setErrors({error: 'Invalid email or password'}))}
          >
            {({handleSubmit, isSubmitting, errors})=>(
              <Form onSubmit={handleSubmit} autoComplete='off'>
                  <p>
                    <b>Email*</b>
                  </p>
                  <MyTextInput name='email' placeholder='Email'/>
                  <p>
                    <b>Password*</b>
                  </p>
                  <MyTextInput name='password' placeholder='Password' type='password'/>
                  <ErrorMessage
                    name= 'error' render={()=> 
                    <Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}
                  />
                  <div class="menu-crf">
                    <input
                      class="checkbox"
                      type="checkbox"
                      style={{ width: "12px", height: "12px", marginRight: "5px" }}
                    ></input>
                    <p>remember me</p>
                    <p style={{ marginLeft: "40px" }}> forgot password?</p>
                  </div>
                  {/*<Link to='/dashboard'>*/}
                  <Button loading={isSubmitting} content='Login' type="submit" style={{ marginTop: "25px",backgroundColor: "#A071FF",color: "white"}}/>
                  {/*</Link>*/}
              </Form>
            )}
            

          </Formik>
          
        </div>
      </div>
    </s.LoginContainer>
  );
});


