import React, {useState} from "react";
import {Button, Item, Flag, Segment} from "semantic-ui-react";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function CountryList() {
  const {countryStore} = useStore();
  const {deleteCountry, countryByName, loading} = countryStore;
  const [target, setTarget] = useState("");

  function handleCountryDelete(e, id) {
    setTarget(e.currentTarget.name);
    deleteCountry(id);
  }

  return (
    <Segment
      style={{
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <Item.Group divided>
        {countryByName
          .sort((a, b) => a.text - b.text)
          .map((country) => (
            <Item key={country.id}>
              <Item.Content>
                <Flag name={country.flag} />
                <Item.Header as="a">{country.text} </Item.Header>

                <Item.Description>{country.value}</Item.Description>

                <Item.Extra>
                  <Button
                    onClick={() => countryStore.selectCountry(country.id)}
                    floated="left"
                    icon="external"
                    basic
                    color="blue"
                  ></Button>
                  <Button
                    name={country.id}
                    loading={loading && target === country.id}
                    onClick={(e) => handleCountryDelete(e, country.id)}
                    floated="left"
                    icon="trash alternate"
                    color="red"
                    basic
                  ></Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
      </Item.Group>
    </Segment>
  );
});
