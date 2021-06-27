import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function UserForm() {
  const { userStore } = useStore();
  const { selectedUser, closeForm, updateUser, loading } = userStore;
  const initialState = selectedUser ?? {
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    userName: "",
    email: "",
  };

  const [user, setUser] = useState(initialState);

  function handleSubmit() {
    updateUser(user);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Segment clearing style={{ position: "fixed" }}>
      <Form
        style={{ textAlign: "left" }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label>First Name</label>
        <Form.Input
          placeholder="First Name"
          value={user.firstName}
          name="firstName"
          onChange={handleInputChange}
        />
        <label>Last Name</label>
        <Form.Input
          placeholder="Last Name"
          value={user.lastName}
          name="lastName"
          onChange={handleInputChange}
        />
        <label>Date Of Birth</label>
        <Form.Input
          placeholder="Date Of Birth"
          value={user.dateOfBirth}
          name="dateOfBirth"
          onChange={handleInputChange}
        />
        <label>Gender</label>
        <Form.Input
          placeholder="Gender"
          value={user.gender}
          name="gender"
          onChange={handleInputChange}
        />
        <label>Username</label>
        <Form.Input
          placeholder="Username"
          value={user.userName}
          name="userName"
          onChange={handleInputChange}
        />

        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
});
