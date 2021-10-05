import { combineReducers, Reducer } from "redux";
import { AddClearingWarriorType, ClearingWarriorsAction,
     UpdateClearingWarriorType } from "./actions";
import { ClearingWarriorsDictionary, ClearingWarriorsState, initialState } from "./ClearingWarriorsState";

const clearingWarriorsIdsReducer: Reducer<number[], ClearingWarriorsAction> = (
    state: number[] = initialState.ids,
    action: ClearingWarriorsAction): number[] => {
    const nextState: number[] = [...state];
    switch (action.type) {
        case AddClearingWarriorType: {
            nextState.push(action.payload.clearingWarriorsId);
            return nextState;
        }
    }

    return nextState;
}

const clearingWarriorsByIdsReducer: Reducer<ClearingWarriorsDictionary, ClearingWarriorsAction> = (
    state: ClearingWarriorsDictionary = initialState.byId,
    action: ClearingWarriorsAction): ClearingWarriorsDictionary => {
    const nextState: ClearingWarriorsDictionary = { ...state };
    switch (action.type) {
        case AddClearingWarriorType: {
            nextState[action.payload.clearingWarriorsId] = {
                id: action.payload.clearingWarriorsId,
                faction: action.payload.warriorsFaction,
                clearingId: action.payload.clearingId,
                warriorsNumber: action.payload.warriorsCount
            }
            return nextState;
        }
        case UpdateClearingWarriorType: {
            nextState[action.payload.clearingWarriorsId].warriorsNumber = action.payload.warriorsCount;

            return nextState;
        }
    }

    return nextState;
}

export const clearingWarriorsReducer: Reducer<ClearingWarriorsState, ClearingWarriorsAction> =
    combineReducers({
        byId: clearingWarriorsByIdsReducer,
        ids: clearingWarriorsIdsReducer
    });

