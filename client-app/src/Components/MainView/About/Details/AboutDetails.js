import React from "react";
import {Button, Card} from "semantic-ui-react";
import LoadingComponent from "../../../../LoadingComponent";
import {useStore} from "../../../../stores/store";

export default function AboutDetails() {
  const {aboutStore} = useStore();
  const {selectedAbout: ab, openForm, cancelSelectedAbout} = aboutStore;

  if (!ab) return <LoadingComponent />;
  return (
    <Card fluid style={{position: "fixed", width: "18%"}}>
      <Card.Content>
        <Card.Header>{ab.title}</Card.Header>
        <Card.Description>{ab.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            onClick={() => openForm(ab.id)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={cancelSelectedAbout}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
