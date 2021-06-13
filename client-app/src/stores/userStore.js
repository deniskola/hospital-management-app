import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { stores } from "./store";
import { history } from "../index";

export default class UserStore {
    user = null;

    constructor(){
        makeAutoObservable(this);
    }

    get IsLoggedIn(){
        return !!this.user;
    }

    login = async (creds) => {
        try {
            const user = await agent.Account.login(creds);
            stores.commonStore.setToken(user.token);
            runInAction(() =>this.user = user);
            history.push('/profile');
        } catch(error){
            throw error;
        }
    }

    logout = () => {
        stores.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        }catch(error){
            console.log(error);
        }
    }

    register = async (creds) => {
        try {
            const user = await agent.Account.register(creds);
            stores.commonStore.setToken(user.token);
            runInAction(() =>this.user = user);
            history.push('/profile');
        } catch(error){
            throw error;
        }
    }
}