import { Action, Reducer } from "redux";
import { ClearingTokensState, initialState } from "./ClearingTokensState";

export const clearingTokensReducer: Reducer<ClearingTokensState, Action<string>> = (
    state: ClearingTokensState = initialState,
    action: Action<string>): ClearingTokensState => {

    const nextState: ClearingTokensState = { ...state };

    switch (action.type) {
        case "ADD": {
            break;
        }
    }

    return nextState;
}