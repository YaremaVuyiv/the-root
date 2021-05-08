import { Action, Reducer } from "redux";
import { initialState } from "./model/FactionsState";
import { FactionsState } from "./model/FactionsState";

export const factionsReducer: Reducer<FactionsState, Action> = (state: FactionsState = initialState, action: Action): FactionsState => {
    return state;
}