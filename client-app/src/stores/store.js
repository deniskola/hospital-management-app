import {createContext, useContext} from "react";
import AboutStore from "./aboutStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import CountryStore from "./countryStore";
import LabTestStore from "./labTestStore";
import AllergiesStore from "./allergiesStore";
import BodyInfoStore from "./bodyInfoStore";
import PatientHistoryStore from "./patientHistoryStore";
import ProcedureStore from "./proceduresStore";
import CityStore from "./cityStore";


export const stores = {
  aboutStore: new AboutStore(),
  userStore: new UserStore(),
  commonStore: new CommonStore(),
  countryStore: new CountryStore(),
  labTestStore: new LabTestStore(),
  allergiesStore : new AllergiesStore(),
  bodyInfoStore : new BodyInfoStore(),
  patientHistoryStore : new PatientHistoryStore(),
  proceduresStore : new ProcedureStore(),
  cityStore: new CityStore(),

};

export const StoreContext = createContext(stores);

export function useStore() {
  return useContext(StoreContext);
}
