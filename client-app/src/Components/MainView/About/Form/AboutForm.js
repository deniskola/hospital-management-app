import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { useStore } from "../../../../stores/store";
import { observer } from "mobx-react-lite";

export default observer(function AboutForm() {

  const {aboutStore} = useStore();
  const {selectedAbout, closeForm, createAbout, updateAbout, loading} = aboutStore;
  const initialState = selectedAbout ?? {
    id: "",
    title: "",
    description: "",
  };

  const [ab, setAbout] = useState(initialState);

  function handleSubmit() {
    ab.id ? updateAbout(ab) : createAbout(ab);
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
})
