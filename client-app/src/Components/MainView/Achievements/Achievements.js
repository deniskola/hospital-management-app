import React, { useEffect } from 'react';
import AchievementsDashboard from './AchievementsDashboard/AchievementsDashboard';
import { useStore } from "../../../stores/store";
import { observer } from 'mobx-react-lite';

function Achievements(){
    const {achievementsStore} = useStore()

    useEffect(() => {
        achievementsStore.loadAchievements();
    }, [achievementsStore])

    return (
        <>
            <AchievementsDashboard />
        </>
    )
}  
export default observer(Achievements);