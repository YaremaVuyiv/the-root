import { ACTIVATE_CLEARINGS, ClearingActionsType, DEACTIVATE_CLEARINGS, SELECT_CLEAING } from "./models/actions"

export const activateClearingsAction = (clearingIds: number[]): ClearingActionsType => ({
    type: ACTIVATE_CLEARINGS,
    payload: clearingIds
});

export const deactivateClearingsAction = (): ClearingActionsType => ({
    type: DEACTIVATE_CLEARINGS
});

export const selectClearingAction = (id: number): ClearingActionsType => ({
    type: SELECT_CLEAING,
    id: id
})