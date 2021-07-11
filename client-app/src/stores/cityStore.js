import {makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";

import {v4 as uuid} from "uuid";

export default class CityStore {
  cityRegistry = new Map();
  selectedCity = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get cityByName() {
    return Array.from(this.cityRegistry.values());
  }

  loadCity = async () => {
    try {
      const cities = await agent.Cities.list();

      cities.forEach((city) => {
        this.cityRegistry.set(city.id, city);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };
  setLoadingInitial = (state) => {
    this.loadingInitial = state;
  };

  selectCity = (id) => {
    this.selectedCity = this.cityRegistry.get(id);
  };

  cancelSelectedCity = () => {
    this.selectedCity = undefined;
  };

  openForm = (id) => {
    id ? this.selectCity(id) : this.cancelSelectedCity();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createCity = async (city) => {
    this.loading = true;
    city.id = uuid();
    try {
      await agent.Cities.create(city);
      runInAction(() => {
        this.cityRegistry.set(city.id, city);
        this.selectedCity = city;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  updateCity = async (city) => {
    this.loading = true;
    try {
      await agent.Cities.update(city);
      runInAction(() => {
        this.cityRegistry.set(city.id, city);
        this.selectedCity = city;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteCity = async (id) => {
    this.loading = true;
    try {
      await agent.Cities.delete(id);
      runInAction(() => {
        this.cityRegistry.delete(id);
        if (this.selectedCity.id === id) this.cancelSelectedCity();
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
