import { Action, Reducer } from "redux";
import { initialState, SlotsState } from "./model/SlotsState";

export const slotsReducer: Reducer<SlotsState, Action> = (state: SlotsState = initialState, action: Action): SlotsState => {
    return state;
} 