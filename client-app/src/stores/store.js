import { createContext, useContext } from "react";
import AboutStore from "./aboutStore";

export const stores = {
  aboutStore: new AboutStore(),
};

export const StoreContext = createContext(stores);

export function useStore() {
  return useContext(StoreContext);
}
