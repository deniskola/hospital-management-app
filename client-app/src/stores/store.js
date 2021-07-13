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
import AchievementsStore from "./achievementsStore";
import WorkingHoursStore from "./workingHoursStore";
import AppointmentsStore from "./appointmentsStore";
import PrescriptionsStore from "./prescriptionsStore";


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
  achievementsStore: new AchievementsStore(),
  workingHoursStore: new WorkingHoursStore(),
  appointmentsStore: new AppointmentsStore(),
  prescriptionsStore: new PrescriptionsStore(),
};

export const StoreContext = createContext(stores);

export function useStore() {
  return useContext(StoreContext);
}
