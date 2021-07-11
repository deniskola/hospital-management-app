import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class AllergiesStore {

    allergiesRegistry = new Map();
    selectedAllergy = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get allergiesByType() {
        return Array.from(this.allergiesRegistry.values());
    }

    loadPAllergy = async () => {
        try{
            const allergies = await agent.PAllergy.list();   // i marrim labtes prej API

            allergies.forEach(pAllergies => {
                this.allergiesRegistry.set(pAllergies.id, pAllergies);   //muting states in mobx
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

    selectAllergy = (id) => {
        this.selectedAllergy = this.allergiesRegistry.get(id);
    }
    
    cancelSelectedAllergy = () =>{
        this.selectedAllergy = undefined;
    }
    
    openAllergyForm = (id) => {
        id ? this.selectAllergy(id) : this.cancelSelectedAllergy();
        this.editMode = true;
    }
    
    closeAllergyForm = () => {
        this.editMode = false;
    }

    createAllergy = async (pAllergies) => {
        this.loading = true;
        pAllergies.id = uuid();
        try{
            await agent.PAllergy.create(pAllergies);
            runInAction(() =>{
                this.allergiesRegistry.set(pAllergies.id, pAllergies);
                this.selectedAllergy = pAllergies;
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

    updateAllergy = async (pAllergies) =>{
        this.loading = true;
        try{
            await agent.PAllergy.update(pAllergies);
            runInAction(() => {
                this.allergiesRegistry.set(pAllergies.id, pAllergies);
                this.selectedAllergy = pAllergies;
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

    deleteAllergy = async (id) =>{
        this.loading = true;
        try{
            await agent.PAllergy.delete(id);
            runInAction(() =>{
                this.allergiesRegistry.delete(id);
                if(this.selectedAllergy.id === id ) this.cancelSelectedAllergy();
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