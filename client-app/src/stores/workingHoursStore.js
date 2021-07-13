import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';

export default class WorkingHoursStore{
    workingHoursRegistry = new Map();
    selectedWorkingHour = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get workingHoursByDay(){
        return Array.from(this.workingHoursRegistry.values())
    }

    loadWorkingHours = async () => {
        try{
            const workinghours = await agent.WorkingHours.list();
                workinghours.forEach(workinghour => {
                    this.workingHoursRegistry.set(workinghour.id, workinghour);
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

    selectWorkingHour = (id) => {
        this.selectedWorkingHour = this.workingHoursRegistry.get(id);
    }

    cancelSelectedWorkingHour = () => {
        this.selectedWorkingHour = undefined;
    }

    openForm = (id) => {
        id ? this.selectWorkingHour(id) : this.cancelSelectedWorkingHour();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createWorkingHour = async (workinghour) => {
        this.loading = true;
        workinghour.id = undefined;
        try{
            await agent.WorkingHours.create(workinghour);
            runInAction(() => {
                this.workingHoursRegistry.set(workinghour.id, workinghour);
                this.selectedWorkingHour = workinghour;
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

    updateWorkingHour = async(workinghour) => {
        this.loading = true;
        try{
            await agent.WorkingHours.update(workinghour);
            runInAction(() => {
                this.workingHoursRegistry.set(workinghour.id, workinghour);
                this.selectedWorkingHour = workinghour;
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

    deleteWorkingHour = async (id) => {
        this.loading = true;
        try{
            await agent.WorkingHours.delete(id);
            runInAction(() => {
                this.workingHoursRegistry.delete(id);
                if(this.selectedWorkingHour?.id === id) this.cancelSelectedWorkingHour();
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