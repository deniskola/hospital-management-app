import {createContext, useContext} from "react";
import AboutStore from "./aboutStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import CountryStore from "./countryStore";
import CityStore from "./cityStore";

export const stores = {
  aboutStore: new AboutStore(),
  userStore: new UserStore(),
  commonStore: new CommonStore(),
  countryStore: new CountryStore(),
  cityStore: new CityStore(),
};

export const StoreContext = createContext(stores);

export function useStore() {
  return useContext(StoreContext);
}
