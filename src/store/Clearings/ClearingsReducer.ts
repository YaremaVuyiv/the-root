import { Reducer } from "redux";
import { ACTIVATE_CLEARINGS, ClearingActionsType, DEACTIVATE_CLEARINGS, SELECT_CLEAING } from "./models/actions";
import { ClearingsState, initialState } from "./models/ClearingsState";

export const clearingsReducer: Reducer<ClearingsState, ClearingActionsType> = (
    state: ClearingsState = initialState,
    action: ClearingActionsType): ClearingsState => {

    const nextState: ClearingsState = { ...state };
    
    switch (action.type) {
        case ACTIVATE_CLEARINGS: {
            action.payload.clearingIds.forEach(id => {
                nextState.byId[id].isActive = true;
            });

            nextState.clearingActionType = action.payload.clearingActionType;

            break;
        }
        case DEACTIVATE_CLEARINGS: {
            nextState.ids.forEach(id => {
                nextState.byId[id].isActive = false;
            });

            break;
        }
        case SELECT_CLEAING: {
            nextState.selectedClearingId = action.payload.clearingId;

            break;
        }
    }

    return nextState;
}