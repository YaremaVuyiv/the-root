import { Faction } from "../../Enums/Faction";

export const AddClearingWarriorType = 'ADD_CLEARING_WARRIOR';
export const UpdateClearingWarriorType = 'ADD_WARRIORS_CLEARING_WARRIOR';

export interface AddClearingWarriorAction {
    type: 'ADD_CLEARING_WARRIOR',
    payload: {
        clearingWarriorsId: number,
        clearingId: number,
        warriorsCount: number,
        warriorsFaction: Faction
    }
}

export interface UpdateClearingWarriorAction {
    type: 'ADD_WARRIORS_CLEARING_WARRIOR',
    payload: {
        clearingWarriorsId: number,
        warriorsCount: number
    }
}

export type ClearingWarriorsAction = AddClearingWarriorAction | UpdateClearingWarriorAction;