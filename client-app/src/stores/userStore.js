import {makeAutoObservable, runInAction} from "mobx";
import agent from "../api/agent";
import {stores} from "./store";
import {history} from "../index";

export default class UserStore {
  user = null;
  userRegistry = new Map();
  selectedUser = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get IsLoggedIn() {
    return !!this.user;
  }

  login = async (creds) => {
    try {
      const user = await agent.Account.login(creds);
      stores.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      history.push("/profile");
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    stores.commonStore.setToken(null);
    window.localStorage.removeItem("jwt");
    this.user = null;
    history.push("/");
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };

  register = async (creds) => {
    try {
      const user = await agent.Account.register(creds);
      //stores.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
    } catch (error) {
      throw error;
    }
  };

  get userByUsername() {
    return Array.from(this.userRegistry.values());
  }

  loadUser = async () => {
    try {
      const users = await agent.Users.list();

      users.forEach((user) => {
        this.userRegistry.set(user.id, user);
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

  selectUser = (id) => {
    this.selectedUser = this.userRegistry.get(id);
  };

  cancelSelectedUser = () => {
    this.selectedUser = undefined;
  };

  openForm = (id) => {
    id ? this.selectUser(id) : this.cancelSelectedUser();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  updateUser = async (user) => {
    this.loading = true;
    try {
      await agent.Users.update(user);
      runInAction(() => {
        this.userRegistry.set(user.id, user);
        this.selectedUser = user;
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

  deleteUser = async (id) => {
    this.loading = true;
    try {
      await agent.Users.delete(id);
      runInAction(() => {
        this.userRegistry.delete(id);
        if (this.selectedUser.id === id) this.cancelSelectedUser();
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
