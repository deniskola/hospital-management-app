import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class LabTestStore {

    labtestsRegistry = new Map();
    selectedLabTest = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get labtestsByName() {
        return Array.from(this.labtestsRegistry.values());
    }

    loadLabTests = async () => {
        try{
            const labtests = await agent.LabTests.list();   // i marrim labtes prej API

            labtests.forEach(labtest => {
                this.labtestsRegistry.set(labtest.id, labtest);   //muting states in mobx
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

    selectLabTest = (id) => {
        this.selectedLabTest = this.labtestsRegistry.get(id);
    }
    
    cancelSelectedLabTest = () =>{
        this.selectedLabTest = undefined;
    }
    
    openForm = (id) => {
        id ? this.selectLabTest(id) : this.cancelSelectedLabTest();
        this.editMode = true;
    }
    
    closeForm = () => {
        this.editMode = false;
    }

    createLabTest = async (labtest) => {
        this.loading = true;
        labtest.id = uuid();
        try{
            await agent.LabTests.create(labtest);
            runInAction(() =>{
                this.labtestsRegistry.set(labtest.id, labtest);
                this.selectedLabTest = labtest;
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

    updateLabTest = async (labtest) =>{
        this.loading = true;
        try{
            await agent.LabTests.update(labtest);
            runInAction(() => {
                this.labtestsRegistry.set(labtest.id, labtest);
                this.selectedLabTest = labtest;
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

    deleteLabTest = async (id) =>{
        this.loading = true;
        try{
            await agent.LabTests.delete(id);
            runInAction(() =>{
                this.labtestsRegistry.delete(id);
                if(this.selectedLabTest.id === id ) this.cancelSelectedLabTest();
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