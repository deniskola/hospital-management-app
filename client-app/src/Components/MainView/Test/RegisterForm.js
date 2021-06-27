import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Form, Formik } from "formik";
import MyTextInput from "../../FormInputs/MyTextInput";
import MySelectInput from "../../FormInputs/MySelectInput";
import MyDateInput from "../../FormInputs/MyDatePicker";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import { Label, Button, Segment, Header, Radio } from "semantic-ui-react";

export default observer(function Test() {
  const { userStore } = useStore();

  const genderOptions = [
    { text: "Male", value: "male" },
    { text: "Female", value: "female" },
  ];

  return (
    <Segment clearing style={{ position: "fixed" }}>
      <div>
        <Header>Register a new Admin</Header>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            gender: "",
            dateOfBirth: "",
            role: "admin",
            error: null,
          }}
          onSubmit={(values, { setErrors }) =>
            userStore
              .register(values)
              .catch((error) => setErrors({ error: "Invalid input!" }))
          }
        >
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <MyTextInput
                style={{ marginBottom: "20px" }}
                name="firstName"
                placeholder="Firstname"
              />

              <MyTextInput
                style={{ marginBottom: "20px" }}
                name="lastName"
                placeholder="Lastname"
              />

              <MyDateInput
                placeholderText="Date"
                name="dateOfBirth"
                showTimeSelect
                timeCaption="time"
                type="date"
                dateFormat="MMMM d, yyyy "
              />

              <MySelectInput
                name="gender"
                placeholder="Gender"
                options={genderOptions}
              />

              <MyTextInput
                style={{ marginBottom: "20px" }}
                name="username"
                placeholder="Username"
              />

              <MyTextInput
                style={{ marginBottom: "20px" }}
                name="email"
                placeholder="Email"
              />

              <MyTextInput
                style={{ marginBottom: "20px" }}
                name="password"
                placeholder="Password"
                type="password"
              />

              <MyTextInput
                style={{ display: "none" }}
                name="role"
                placeholder="Role"
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
              <Button loading={isSubmitting} content="Register" type="submit" />
            </Form>
          )}
        </Formik>
      </div>
    </Segment>
  );
});
