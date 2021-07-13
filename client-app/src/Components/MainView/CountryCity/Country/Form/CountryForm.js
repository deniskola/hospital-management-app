import React, {useState} from "react";
import {Form, Segment, Button} from "semantic-ui-react";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function CountryForm() {
  const {countryStore} = useStore();
  const {selectedCountry, closeForm, createCountry, updateCountry, loading} =
    countryStore;
  const initialState = selectedCountry ?? {
    id: "",
    value: "",
    text: "",
    flag: "",
  };

  const [country, setCountry] = useState(initialState);

  function handleSubmit() {
    country.id ? updateCountry(country) : createCountry(country);
  }

  function handleInputChange(event) {
    const {name, value} = event.target;
    setCountry({...country, [name]: value});
  }

  return (
    <Segment clearing style={{width: "150%", textAlign: "left"}}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Name"
          value={country.text}
          name="text"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Value"
          value={country.value}
          name="value"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Flag"
          value={country.flag}
          name="flag"
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
