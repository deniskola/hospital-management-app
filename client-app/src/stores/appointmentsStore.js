import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

export default class AppointmentsStore{
    appointmentsRegistry = new Map();
    selectedAppointment = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get appointmentsByDate(){
        return Array.from(this.appointmentsRegistry.values()).sort((a, b) => 
            Date.parse(a.appointmentDate) - Date.parse(b.appointmentDate));
    }

    loadAppointments = async () => {
        try{
            const appointments = await agent.Appointments.table();
                appointments.forEach(appointment => {
                    appointment.appointmentDate = appointment.appointmentDate.split('T')[0];
                    this.appointmentsRegistry.set(appointment.id, appointment);
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

    selectAppointment = (id) => {
        this.selectedAppointment = this.appointmentsRegistry.get(id);
    }

    cancelSelectedAppointment = () => {
        this.selectedAppointment = undefined;
    }

    openForm = (id) => {
        id ? this.selectAppointment(id) : this.cancelSelectedAppointment();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createAppointment = async (appointment) => {
        this.loading = true;
        appointment.id = undefined;
        try{
            await agent.Appointments.create(appointment);
            runInAction(() => {
                this.appointmentsRegistry.set(appointment.id, appointment);
                this.selectedAppointment = appointment;
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

    updateAppointment = async (appointment) => {
        this.loading = true;
        try{
            await agent.Appointments.update(appointment);
            runInAction(() => {
                this.appointmentsRegistry.set(appointment.id, appointment);
                this.selectedAppointment = appointment;
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

    deleteAppointment = async (id) => {
        this.loading = true;
        try{
            await agent.Appointments.delete(id);
            runInAction(() => {
                this.appointmentsRegistry.delete(id);
                if(this.selectedAppointment?.id === id) this.cancelSelectedAppointment();
                this.loading = false;
            })
        }catch(error){
            console.log(error);
            runInAction (() => {
                this.loading = false;
            })
        }
    }
}