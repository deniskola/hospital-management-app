import React from "react";
import {Button, Item, Segment} from "semantic-ui-react";
import LoadingComponent from "../../../../../LoadingComponent";
import {useStore} from "../../../../../stores/store";

export default function UserDetails() {
  const {userStore} = useStore();
  const {selectedUser: user, openForm, cancelSelectedUser} = userStore;

  if (!user) return <LoadingComponent />;
  return (
    <Segment
      clearing
      style={{position: "fixed", width: "20%", textAlign: "left"}}
    >
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>
        <b>username: </b>
        {user.userName}
      </p>
      <p>
        <b>email: </b>
        {user.email}
      </p>
      <p>
        <b>phone number: </b>
        {user.phoneNumber}
      </p>

      <p>
        <b>date of birth: </b>
        {user.dateOfBirth}
      </p>
      <p>
        <b>gender: </b>
        {user.gender}
      </p>

      <p>
        <b>role: </b>
        {user.role}
      </p>

      <Button.Group widths="2" style={{marginTop: "20px"}}>
        <Button
          onClick={() => openForm(user.id)}
          basic
          color="blue"
          content="Edit"
        />
        <Button
          onClick={cancelSelectedUser}
          basic
          color="grey"
          content="Cancel"
        />
      </Button.Group>
    </Segment>
  );
}
