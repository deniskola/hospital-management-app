import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

export default class PrescriptionsStore{
    prescriptionsRegistry = new Map();
    selectedPrescription = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get prescriptionsByNumber(){
        return Array.from(this.prescriptionsRegistry.values()).sort((a, b) => 
            (a.number) - (b.number));
    }

    loadPrescriptions = async () => {
        try{
            const prescriptions = await agent.Prescriptions.list();
            prescriptions.forEach(prescription => {
                this.prescriptionsRegistry.set(prescription.id, prescription);
            })
            this.setLoadingInitial(false);
        }catch(error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state) => {
        this.loadingInitial = state;
    }

    selectPrescription = (id) => {
        this.selectedPrescription = this.prescriptionsRegistry.get(id);
    }

    cancelSelectedPrescription = () => {
        this.selectedPrescription = undefined;
    }

    openForm = (id) => {
        id ? this.selectPrescription(id) : this.cancelSelectedPrescription();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createPrescription = async (prescription) => {
        this.loading = true;
        prescription.id = undefined;
        try{
            await agent.Prescriptions.create(prescription);
            runInAction(() => {
                this.prescriptionsRegistry.set(prescription.id, prescription);
                this.selectedPrescription = prescription;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updatePrescription = async (prescription) => {
        this.loading = true;
        try{
            await agent.Prescriptions.update(prescription);
            runInAction(() => {
                this.prescriptionsRegistry.set(prescription.id, prescription);
                this.selectedPrescription = prescription;
                this.editMode = false;
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deletePrescription = async (id) => {
        this.loading = true;
        try{
            await agent.Prescriptions.delete(id);
            runInAction(() => {
                this.prescriptionsRegistry.delete(id);
                if(this.selectedPrescription?.id === id) this.cancelSelectedPrescription();
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}