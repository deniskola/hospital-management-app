import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class AchievementsStore{
    //achievements = [];
    achievementRegistry = new Map();
    selectedAchievement = null;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get achievementsByTitle(){
        return Array.from(this.achievementRegistry.values())
    }

    loadAchievements = async () => {
        try{
            const achievements = await agent.Achievements.list();
                achievements.forEach(achievement => {
                    this.achievementRegistry.set(achievement.id, achievement);
                })
            this.setLoadingInitial(false);
        } catch (error){
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state) => {
        this.loadingInitial = state;
    }

    selectAchievement = (id) => {
        this.selectedAchievement = this.achievementRegistry.get(id);
    }

    cancelSelectedAchievement = () => {
        this.selectedAchievement = undefined;
    }

    openForm = (id) => {
        id ? this.selectAchievement(id) : this.cancelSelectedAchievement();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createAchievement = async (achievement) => {
        this.loading = true;
        achievement.id = uuid();
        try{
            await agent.Achievements.create(achievement);
            runInAction(() => {
                this.achievementRegistry.set(achievement.id, achievement);
                this.selectedAchievement = achievement;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateAchievement = async (achievement) => {
        this.loading = true;
        try{
            await agent.Achievements.update(achievement);
            runInAction(() => {
                this.achievementRegistry.set(achievement.id, achievement);
                this.selectedAchievement = achievement;
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

    deleteAchievement = async(id) => {
        this.loading = true;
        try{
            await agent.Achievements.delete(id);
            runInAction(() => {
                this.achievementRegistry.delete(id);
                if(this.selectedAchievement?.id === id) this.cancelSelectedAchievement();
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