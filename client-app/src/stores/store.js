import { createContext, useContext } from "react";
import AboutStore from "./aboutStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

export const stores = {
  aboutStore: new AboutStore(),
  userStore: new UserStore(),
  commonStore: new CommonStore()
};

export const StoreContext = createContext(stores);

export function useStore() {
  return useContext(StoreContext);
}
