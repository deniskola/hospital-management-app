import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from "uuid";

export default class ProcedureStore {

    proceduresRegistry = new Map();
    selectedProcedure = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this);
    }

    get proceduresByDate() {
        return Array.from(this.proceduresRegistry.values());
    }

    loadProcedures = async () => {
        try{
            const procedures = await agent.Procedures.list();   // i marrim labtes prej API

            procedures.forEach(procedure => {
                procedure.date = procedure.date.split('T')[0];
                this.proceduresRegistry.set(procedure.id, procedure);   //muting states in mobx
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

    selectProcedure = (id) => {
        this.selectedProcedure = this.proceduresRegistry.get(id);
    }
    
    cancelSelectedProcedure = () =>{
        this.selectedProcedure = undefined;
    }
    
    openProcedureForm = (id) => {
        id ? this.selectProcedure(id) : this.cancelSelectedProcedure();
        this.editMode = true;
    }
    
    closeProcedureForm = () => {
        this.editMode = false;
    }

    createProcedure = async (procedure) => {
        this.loading = true;
        procedure.id = uuid();
        try{
            await agent.Procedures.create(procedure);
            runInAction(() =>{
                this.proceduresRegistry.set(procedure.id, procedure);
                this.selectedProcedure = procedure;
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

    updateProcedure = async (procedure) =>{
        this.loading = true;
        try{
            await agent.Procedures.update(procedure);
            runInAction(() => {
                this.proceduresRegistry.set(procedure.id, procedure);
                this.selectedProcedure = procedure;
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

    deleteProcedure = async (id) =>{
        this.loading = true;
        try{
            await agent.Procedures.delete(id);
            runInAction(() =>{
                this.proceduresRegistry.delete(id);
                if(this.selectedProcedure.id === id ) this.cancelSelectedProcedure();
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