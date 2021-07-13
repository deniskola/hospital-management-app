import React, {useEffect} from "react";
import {Tab, Grid, Divider} from "semantic-ui-react";
import {useStore} from "../../../stores/store";
import {observer} from "mobx-react-lite";
import CountryDash from "./Country/CountryDash/CountryDash";
import CityDash from "./City/CityDash/CityDash";
import LoadingComponent from "../../../LoadingComponent";

function CountryCity() {
  const {countryStore, cityStore} = useStore();

  const panes2 = [
    {
      menuItem: "Countries",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <CountryDash />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Cities",
      render: () => (
        <Tab.Pane style={{height: "85vh", overflowY: "auto"}}>
          <CityDash />
        </Tab.Pane>
      ),
    },
  ];
  useEffect(() => {
    countryStore.loadCountry();
  }, [countryStore]);

  useEffect(() => {
    cityStore.loadCity();
  }, [cityStore]);

  if (countryStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;
  if (cityStore.loadingInitial)
    return <LoadingComponent content="Loading app..." />;

  return (
    <div>
      <Grid stackable doubling>
        <Grid.Column width="16">
          <Tab
            menu={{fluid: true, vertical: true, tabular: true}}
            panes={panes2}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default observer(CountryCity);
