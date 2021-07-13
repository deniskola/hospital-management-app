import React, {useState} from "react";
import {Form, Segment, Button} from "semantic-ui-react";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function CityForm() {
  const {cityStore} = useStore();

  const {selectedCity, closeForm, createCity, updateCity, loading} = cityStore;
  const initialState = selectedCity ?? {
    id: "",
    value: "",
    text: "",
    country: "",
  };

  const [city, setCity] = useState(initialState);

  function handleSubmit() {
    city.id ? updateCity(city) : createCity(city);
  }

  function handleInputChange(event) {
    const {name, value} = event.target;
    setCity({...city, [name]: value});
  }

  return (
    <Segment clearing style={{width: "150%", textAlign: "left"}}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Name"
          value={city.text}
          name="text"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Value"
          value={city.value}
          name="value"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Country"
          value={city.country}
          name="country"
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
