import React from "react";
import {Button, Segment} from "semantic-ui-react";
import LoadingComponent from "../../../../LoadingComponent";
import {useStore} from "../../../../stores/store";

export default function AboutDetails() {
  const {aboutStore} = useStore();
  const {selectedAbout: ab, openForm, cancelSelectedAbout} = aboutStore;

  if (!ab) return <LoadingComponent />;
  return (
    <Segment
      clearing
      style={{position: "fixed", width: "20%", textAlign: "left"}}
    >
      <p style={{marginBottom: "10px"}}>
        <b>title: </b>
        {ab.title}
      </p>
      <p style={{marginBottom: "10px"}}>
        <b>paragraph: </b>
        {ab.description}
      </p>
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
    </Segment>
  );
}
