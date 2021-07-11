import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class BodyInfoStore {

    bodyinfosRegistry = new Map();
    selectedBodyInfo = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get bodyinfosByAge() {
        return Array.from(this.bodyinfosRegistry.values());
    }

    loadBodyInfos = async () => {
        try{
            const bodyinfos = await agent.BodyInfos.list();   // i marrim labtes prej API

            bodyinfos.forEach(bodyinfo => {
                this.bodyinfosRegistry.set(bodyinfo.id, bodyinfo);   //muting states in mobx
            })
            this.setLoadingInitial(false);

        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);

        }
    }

    setLoadingInitial = (state) =>{
        this.loadingInitial = state;
    }

    selectBodyInfo = (id) => {
        this.selectedbodyInfo = this.bodyinfosRegistry.get(id);
    }
    
    cancelSelectedBodyInfo = () =>{
        this.selectedBodyInfo = undefined;
    }
    
    openBodyForm = (id) => {
        id ? this.selectBodyInfo(id) : this.cancelSelectedBodyInfo();
        this.editMode = true;
    }
    
    closeBodyForm = () => {
        this.editMode = false;
    }

    createBodyInfo = async (bodyinfo) => {
        this.loading = true;
        bodyinfo.id = uuid();
        try{
            await agent.BodyInfos.create(bodyinfo);
            runInAction(() =>{
                this.bodyinfosRegistry.set(bodyinfo.id, bodyinfo);
                this.selectedBodyInfo = bodyinfo;
                this.editMode = false;
                this.loading = false;
              });
        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
              });
        }
    };

    updateBodyInfo = async (bodyinfo) =>{
        this.loading = true;
        try{
            await agent.BodyInfos.update(bodyinfo);
            runInAction(() => {
                this.bodyinfosRegistry.set(bodyinfo.id, bodyinfo);
                this.selectedBodyInfo = bodyinfo;
                this.editMode = false;
                this.loading = false;
            });
        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            });
        }
    };

    deleteBodyInfo = async (id) =>{
        this.loading = true;
        try{
            await agent.BodyInfos.delete(id);
            runInAction(() =>{
                this.bodyinfosRegistry.delete(id);
                if(this.selectedBodyInfo.id === id ) this.cancelSelectedBodyInfo();
                this.loading = false;
              });
        }catch(error){
            console.log(error);
            runInAction(() =>{
                this.loading = false;
            });
        }
    };

}