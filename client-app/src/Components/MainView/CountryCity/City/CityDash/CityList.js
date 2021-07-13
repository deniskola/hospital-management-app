import React, {useState} from "react";
import {Button, Item, Segment} from "semantic-ui-react";
import {useStore} from "../../../../../stores/store";
import {observer} from "mobx-react-lite";

export default observer(function CountryList() {
  const {cityStore} = useStore();
  const {deleteCity, cityByName, loading} = cityStore;
  const [target, setTarget] = useState("");

  function handleCityDelete(e, id) {
    setTarget(e.currentTarget.name);
    deleteCity(id);
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
        {cityByName.map((city) => (
          <Item key={city.id}>
            <Item.Content>
              <Item.Header as="a">{city.text} </Item.Header>

              <Item.Description>{city.country}</Item.Description>

              <Item.Extra>
                <Button
                  onClick={() => cityStore.selectCity(city.id)}
                  floated="left"
                  icon="external"
                  basic
                  color="blue"
                ></Button>
                <Button
                  name={city.id}
                  loading={loading && target === city.id}
                  onClick={(e) => handleCityDelete(e, city.id)}
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
