import {makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";

import {v4 as uuid} from "uuid";

export default class CountryStore {
  countryRegistry = new Map();
  selectedCountry = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get countryByName() {
    return Array.from(this.countryRegistry.values());
  }

  loadCountry = async () => {
    try {
      const countries = await agent.Countries.list();

      countries.forEach((country) => {
        this.countryRegistry.set(country.id, country);
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

  selectCountry = (id) => {
    this.selectedCountry = this.countryRegistry.get(id);
  };

  cancelSelectedCountry = () => {
    this.selectedCountry = undefined;
  };

  openForm = (id) => {
    id ? this.selectCountry(id) : this.cancelSelectedCountry();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createCountry = async (country) => {
    this.loading = true;
    country.id = uuid();
    try {
      await agent.Countries.create(country);
      runInAction(() => {
        this.countryRegistry.set(country.id, country);
        this.selectedCountry = country;
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

  updateCountry = async (country) => {
    this.loading = true;
    try {
      await agent.Countries.update(country);
      runInAction(() => {
        this.countryRegistry.set(country.id, country);
        this.selectedCountry = country;
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

  deleteCountry = async (id) => {
    this.loading = true;
    try {
      await agent.Countries.delete(id);
      runInAction(() => {
        this.countryRegistry.delete(id);
        if (this.selectedCountry.id === id) this.cancelSelectedCountry();
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
