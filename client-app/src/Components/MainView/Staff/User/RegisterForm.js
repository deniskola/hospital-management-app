import React from "react";
import {ErrorMessage, Form, Formik} from "formik";
import MyTextInput from "../../../FormInputs/MyTextInput";
import MySelectInput from "../../../FormInputs/MySelectInput";
import MyDateInput from "../../../FormInputs/MyDatePicker";
import {useStore} from "../../../../stores/store";
import {observer} from "mobx-react-lite";
import {Button, Segment, Divider} from "semantic-ui-react";

export default observer(function RegisterForm() {
  const {userStore, countryStore, cityStore} = useStore();

  const roleOptions = [
    {text: "Admin", value: "admin"},
    {text: "SuperAdmin", value: "superadmin"},
    {text: "Receptionist", value: "receptionist"},
    {text: "Nurse", value: "nurse"},
  ];

  const genderOptions = [
    {text: "Male", value: "male"},
    {text: "Female", value: "female"},
  ];

  const countryOptions = countryStore.countryByName;
  const cityOptions = cityStore.cityByName;

  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    role: "",
    country: "",
    city: "",
    error: null,
  };

  return (
    <Segment clearing>
      <div>
        <p style={{marginBottom: "10px"}}>{userStore.user.role}</p>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, {setErrors}) =>
            userStore
              .register(values)
              .catch((error) => setErrors({error: "Invalid input!"}))
          }
        >
          {({handleSubmit, isSubmitting, errors}) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <MyTextInput
                style={{marginBottom: "10px"}}
                name="firstName"
                placeholder="Firstname"
              />

              <MyTextInput
                style={{marginBottom: "10px"}}
                name="lastName"
                placeholder="Lastname"
              />
              <MyTextInput name="username" placeholder="Username" />

              <MyDateInput
                placeholderText="Date"
                name="dateOfBirth"
                showTimeSelect
                timeCaption="time"
                type="date"
                dateFormat="MMMM d, yyyy "
              />
              <Divider />

              <MySelectInput
                name="country"
                placeholder="Country"
                options={countryOptions}
              />

              <MySelectInput
                name="city"
                placeholder="City"
                options={cityOptions}
              />

              <MySelectInput
                name="gender"
                placeholder="Gender"
                options={genderOptions}
              />

              <MySelectInput
                name="role"
                placeholder="Role"
                options={roleOptions}
              />
              <Divider />
              <MyTextInput
                style={{marginBottom: "10px"}}
                name="phoneNumber"
                placeholder="Phone Number"
              />

              <MyTextInput
                style={{marginBottom: "10px"}}
                name="email"
                placeholder="Email"
              />

              <MyTextInput
                style={{marginBottom: "10px"}}
                name="password"
                placeholder="Password"
                type="password"
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
