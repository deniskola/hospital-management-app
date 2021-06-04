import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

export default function AboutForm({
  ab: selectedAbout,
  closeForm,
  createOrEdit,
  submitting,
}) {
  const initialState = selectedAbout ?? {
    id: "",
    title: "",
    description: "",
  };

  const [ab, setAbout] = useState(initialState);

  function handleSubmit() {
    createOrEdit(ab);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setAbout({ ...ab, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={ab.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Paragraph"
          value={ab.description}
          name="description"
          onChange={handleInputChange}
        />
        <Button
          loading={submitting}
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
}
