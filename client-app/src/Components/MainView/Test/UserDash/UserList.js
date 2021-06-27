import React, { useState } from "react";
import { Button, Item, Segment, Grid } from "semantic-ui-react";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function UserList() {
  const { userStore } = useStore();
  const { deleteUser, userByUsername, loading } = userStore;
  const [target, setTarget] = useState("");

  function handleUserDelete(e, id) {
    setTarget(e.currentTarget.name);
    deleteUser(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {userByUsername
          .filter((users) => users.role === "admin")
          .map((user) => (
            <Item key={user.id}>
              <Item.Content>
                <Item.Header style={{ width: "100%", textAlign: "left" }}>
                  {user.firstName} {user.lastName}
                </Item.Header>
                <Item.Description style={{ width: "100%", textAlign: "left" }}>
                  {user.email}
                </Item.Description>

                <Item.Extra>
                  <Button
                    onClick={() => userStore.selectUser(user.id)}
                    floated="left"
                    basic
                    icon="address card"
                    color="blue"
                  ></Button>
                  <Button
                    name={user.id}
                    loading={loading && target === user.id}
                    onClick={(e) => handleUserDelete(e, user.id)}
                    basic
                    floated="left"
                    icon="trash alternate"
                    color="red"
                  ></Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Segment>
  );
});
