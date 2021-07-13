import React from "react";
import {Button, Segment} from "semantic-ui-react";
import LoadingComponent from "../../../../../LoadingComponent";
import {useStore} from "../../../../../stores/store";

export default function CityDetails() {
  const {cityStore} = useStore();
  const {selectedCity: city, openForm, cancelSelectedCity} = cityStore;

  if (!city) return <LoadingComponent />;
  return (
    <Segment clearing style={{width: "150%", textAlign: "left"}}>
      <p style={{marginBottom: "10px"}}>
        <b>Name: </b>
        {city.text}
      </p>
      <p style={{marginBottom: "10px"}}>
        <b>Value: </b>
        {city.value}
      </p>
      <p style={{marginBottom: "10px"}}>
        <b>Country: </b>
        {city.country}
      </p>
      <Button.Group widths="2">
        <Button
          onClick={() => openForm(city.id)}
          basic
          color="blue"
          content="Edit"
        />
        <Button
          onClick={cancelSelectedCity}
          basic
          color="grey"
          content="Cancel"
        />
      </Button.Group>
    </Segment>
  );
}
