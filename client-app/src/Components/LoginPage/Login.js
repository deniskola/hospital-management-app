import React from "react";
import {Link} from "react-router-dom";
import welcomeImage from "../../assets/welcome-img.png";
import backgroundImage from "../../assets/background-img.jpg";
import * as s from "./Login.styles";
import {ErrorMessage, Form, Formik} from "formik";
import MyTextInput from "../FormInputs/MyTextInput";
import {useStore} from "../../stores/store";
import {observer} from "mobx-react-lite";
import {Button, Divider} from "semantic-ui-react";
import {useState} from "react";

export default observer(function Login() {
  const {userStore} = useStore();
  const [passVisibility, setPassVisibility] = useState({showPassword: false});

  const handleClickShowPassword = (event) => {
    setPassVisibility({
      ...passVisibility,
      showPassword: !passVisibility.showPassword,
    });
    event.preventDefault();
  };

  return (
    <s.LoginContainer>
      <img class="background-img" src={backgroundImage} alt=""></img>
      <div class="transparent-background"></div>
      <div class="content">
        <div class="welcome-box">
          <div class="welcome-text">
            {!userStore.IsLoggedIn ? (
              <>
                <h1>Welcome</h1>
                <h3>to our Hospital</h3>
                <h6>web app</h6>
              </>
            ) : (
              <>
                <h6>Go back to</h6>
                <Link to="/profile">
                  <h3 style={{border: "2px solid"}}>Profile</h3>
                </Link>
              </>
            )}
          </div>
          <img src={welcomeImage} alt=""></img>
        </div>
        {!userStore.IsLoggedIn && (
          <div class="login-form">
            <div class="login-header">
              <h3>Login</h3>
              <p>Login to your account</p>
              <Divider style={{width: "80%"}} />
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                error: null,
              }}
              onSubmit={(values, {setErrors}) =>
                userStore
                  .login(values)
                  .catch((error) =>
                    setErrors({error: "Invalid email or password"})
                  )
              }
            >
              {({handleSubmit, isSubmitting, errors}) => (
                <Form
                  style={{
                    position: "relative",
                  }}
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <p>
                    <b>Email*</b>
                  </p>
                  <MyTextInput
                    icon="user"
                    iconPosition="left"
                    name="email"
                    placeholder="Email"
                  />
                  <p style={{marginTop: "20px"}}>
                    <b>Password*</b>
                  </p>
                  <MyTextInput
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type={passVisibility.showPassword ? "text" : "password"}
                  />

                  <ErrorMessage
                    name="error"
                    render={() => (
                      <p
                        style={{
                          marginBottom: "10px",
                          textAlign: "center",
                          color: "red",
                        }}
                      >
                        {errors.error}
                      </p>
                    )}
                  />
                  <Divider hidden />

                  {/*<Link to='/dashboard'>*/}
                  <Button
                    loading={isSubmitting}
                    content="Login"
                    type="submit"
                    style={{
                      marginTop: "25px",
                      backgroundColor: "#A071FF",
                      color: "white",
                    }}
                  />
                  <Button
                    icon={passVisibility.showPassword ? "eye" : "hide"}
                    iconPosition="left"
                    style={{
                      position: "absolute",
                      width: "15px",
                      top: "96px",
                      left: "205px",
                      height: "15px",
                      backgroundColor: "transparent",
                    }}
                    onClick={handleClickShowPassword}
                  ></Button>
                  <Divider hidden />
                  {/*</Link>*/}
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </s.LoginContainer>
  );
});
