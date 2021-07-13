import {makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class AboutStore {
  aboutRegistry = new Map();
  selectedAbout = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get aboutByTitle() {
    return Array.from(this.aboutRegistry.values());
  }

  loadAbout = async () => {
    try {
      const about = await agent.Abouts.list();

      about.forEach((ab) => {
        this.aboutRegistry.set(ab.id, ab);
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

  selectAbout = (id) => {
    this.selectedAbout = this.aboutRegistry.get(id);
  };

  cancelSelectedAbout = () => {
    this.selectedAbout = undefined;
  };

  openForm = (id) => {
    id ? this.selectAbout(id) : this.cancelSelectedAbout();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createAbout = async (ab) => {
    this.loading = true;
    ab.id = uuid();
    try {
      await agent.Abouts.create(ab);
      runInAction(() => {
        this.aboutRegistry.set(ab.id, ab);
        this.selectedAbout = ab;
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

  updateAbout = async (ab) => {
    this.loading = true;
    try {
      await agent.Abouts.update(ab);
      runInAction(() => {
        this.aboutRegistry.set(ab.id, ab);
        this.selectedAbout = ab;
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

  deleteAbout = async (id) => {
    this.loading = true;
    try {
      await agent.Abouts.delete(id);
      runInAction(() => {
        this.aboutRegistry.delete(id);
        if (this.selectedAbout.id === id) this.cancelSelectedAbout();
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
