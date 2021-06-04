import React from "react";
import { Button, Card } from "semantic-ui-react";
import { About } from "../About";

export default function AboutDetails({ ab, cancelSelectAbout, openForm }) {
  return (
    <Card fluid>
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
            onClick={cancelSelectAbout}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
