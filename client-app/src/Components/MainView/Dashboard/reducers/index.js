import { combineReducers } from "redux";
import { dReminders } from "./dReminders";
import {Patient} from "../../HRmanager/ActionsPatient/reducers/Patient";
import {hrDoctor} from "../../HRmanager/Actions/reducers/hrDoctor";

export const reducers = combineReducers({
    dReminders,
    Patient,
    hrDoctor
})