import { ACTIVATE_CLEARINGS, ClearingActionsType, DEACTIVATE_CLEARINGS, SELECT_CLEAING } from "./models/actions"
import { SelectedClearingEnum } from "./models/ClearingsState";

export const activateClearingsAction = (clearingIds: number[], clearingActionType: SelectedClearingEnum): ClearingActionsType => ({
    type: ACTIVATE_CLEARINGS,
    payload: {
        clearingIds,
        clearingActionType
    }
});

export const deactivateClearingsAction = (): ClearingActionsType => ({
    type: DEACTIVATE_CLEARINGS
});

export const selectClearingAction = (clearingId: number): ClearingActionsType => ({
    type: SELECT_CLEAING,
    payload: {
        clearingId: clearingId
    }
})