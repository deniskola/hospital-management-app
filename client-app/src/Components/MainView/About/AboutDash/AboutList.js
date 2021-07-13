import React, {useState} from "react";
import {Button, Item} from "semantic-ui-react";
import {useStore} from "../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function AboutList() {
  const {aboutStore} = useStore();
  const {deleteAbout, aboutByTitle, loading} = aboutStore;
  const [target, setTarget] = useState("");
  const {userStore} = useStore();
  const {user} = userStore;

  function handleAboutDelete(e, id) {
    setTarget(e.currentTarget.name);
    deleteAbout(id);
  }

  return (
    <div
      style={{
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <Item.Group divided>
        {aboutByTitle.map((ab) => (
          <Item key={ab.id}>
            <Item.Content>
              <Item.Header as="a">{ab.title}</Item.Header>
              <Item.Description>{ab.description}</Item.Description>
              <Item.Extra>
                {user.role === "admin" && (
                  <>
                    <Button
                      onClick={() => aboutStore.selectAbout(ab.id)}
                      floated="left"
                      icon="external"
                      basic
                      color="blue"
                    ></Button>
                    <Button
                      name={ab.id}
                      loading={loading && target === ab.id}
                      onClick={(e) => handleAboutDelete(e, ab.id)}
                      floated="left"
                      icon="trash alternate"
                      color="red"
                      basic
                    ></Button>
                  </>
                )}
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
});
