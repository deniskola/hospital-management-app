import React from "react";
import {Button, Segment, Flag} from "semantic-ui-react";
import LoadingComponent from "../../../../../LoadingComponent";
import {useStore} from "../../../../../stores/store";

export default function CountryDetails() {
  const {countryStore} = useStore();
  const {
    selectedCountry: country,
    openForm,
    cancelSelectedCountry,
  } = countryStore;

  if (!country) return <LoadingComponent />;
  return (
    <Segment clearing style={{width: "150%", textAlign: "left"}}>
      <p style={{marginBottom: "10px"}}>
        <b>Name: </b>
        {country.text}
      </p>
      <p style={{marginBottom: "10px"}}>
        <b>Value: </b>
        {country.value}
      </p>
      <p style={{marginBottom: "10px"}}>
        <b>Flag: </b>
        <Flag name={country.flag} />
      </p>
      <Button.Group widths="2">
        <Button
          onClick={() => openForm(country.id)}
          basic
          color="blue"
          content="Edit"
        />
        <Button
          onClick={cancelSelectedCountry}
          basic
          color="grey"
          content="Cancel"
        />
      </Button.Group>
    </Segment>
  );
}
