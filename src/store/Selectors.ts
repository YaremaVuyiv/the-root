import { Clearing } from "./Clearings/models/ClearingsState"
import { FactionState } from "./Factions/model/FactionsState";
import { store } from "./store"

export const getAllClearings = (): Clearing[] => {
    const clearingsReducer = store.getState().clearingsReducer;
    return clearingsReducer.ids.map(id => clearingsReducer.byId[id]);
}

export const getClearingById = (clearingId: number): Clearing => {
    const clearingsReducer = store.getState().clearingsReducer;
    return clearingsReducer.byId[clearingId]
}

export const getAllFactions = (): FactionState[] => {
    return store.getState().factionsReducer.factions;
}