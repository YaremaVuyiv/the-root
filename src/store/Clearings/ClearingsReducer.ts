import { Reducer } from "redux";
import { ActivateClearingsAction, ACTIVATE_CLEARINGS, ClearingActionsType, DEACTIVATE_CLEARINGS, SelectClearingAction, SELECT_CLEAING } from "./models/actions";
import { ClearingsState, initialState } from "./models/ClearingsState";

export const clearingsReducer: Reducer<ClearingsState, ClearingActionsType> = (state: ClearingsState = initialState,
    action: ClearingActionsType): ClearingsState => {
    const nextState: ClearingsState = { ...state };
    switch (action.type) {
        case ACTIVATE_CLEARINGS: {
            const activateClearingsAction = action as ActivateClearingsAction;
            activateClearingsAction.payload.forEach(id => {
                nextState.byId[id].isActive = true;
            });
            return nextState;
        }
        case DEACTIVATE_CLEARINGS: {
            nextState.ids.forEach(id => {
                nextState.byId[id].isActive = false;
            });
            return nextState;
        }
        case SELECT_CLEAING: {
            const selectClearingAction = action as SelectClearingAction;
            nextState.selectedClearingId = selectClearingAction.id;
            return nextState;
        }
        default:
            return nextState;
    }
}