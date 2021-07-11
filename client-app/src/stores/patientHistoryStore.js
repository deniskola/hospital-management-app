import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class PatientHistoryStore {

    patienthistoriesRegistry = new Map();
    selectedPatientHistory = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get patienthistoriesByDescription() {
        return Array.from(this.patienthistoriesRegistry.values());
    }

    loadPatientHistories = async () => {
        try{
            const labtests = await agent.PatientHistories.list();   // i marrim labtes prej API

            labtests.forEach(patientHistory => {
                this.patienthistoriesRegistry.set(patientHistory.id, patientHistory);   //muting states in mobx
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

    selectPatientHistory = (id) => {
        this.selectedPatientHistory = this.patienthistoriesRegistry.get(id);
    }
    
    cancelSelectedPatientHistory = () =>{
        this.selectedPatientHistory = undefined;
    }
    
    openHistoryForm = (id) => {
        id ? this.selectedPatientHistory(id) : this.cancelSelectedPatientHistory();
        this.editMode = true;
    }
    
    closeHistoryForm = () => {
        this.editMode = false;
    }

    createPatientHistory = async (patientHistory) => {
        this.loading = true;
        patientHistory.id = uuid();
        try{
            await agent.PatientHistories.create(patientHistory);
            runInAction(() =>{
                this.patienthistoriesRegistry.set(patientHistory.id, patientHistory);
                this.selectedPatientHistory = patientHistory;
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

    updatePatientHistory = async (patientHistory) =>{
        this.loading = true;
        try{
            await agent.PatientHistories.update(patientHistory);
            runInAction(() => {
                this.patienthistoriesRegistry.set(patientHistory.id, patientHistory);
                this.selectedPatientHistory = patientHistory;
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

    deletePatientHistory = async (id) =>{
        this.loading = true;
        try{
            await agent.PatientHistories.delete(id);
            runInAction(() =>{
                this.patienthistoriesRegistry.delete(id);
                if(this.selectedPatientHistory.id === id ) this.cancelSelectedPatientHistory();
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