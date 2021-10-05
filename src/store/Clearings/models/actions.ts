import { SelectedClearingEnum } from "./ClearingsState";

export const ACTIVATE_CLEARINGS = 'ACTIVATE_CLEARINGS';
export const DEACTIVATE_CLEARINGS = 'DEACTIVATE_CLEARINGS';
export const SELECT_CLEAING = 'SELECT_CLEARING';

export interface ActivateClearingsAction {
    type: 'ACTIVATE_CLEARINGS',
    payload: {
        clearingIds: number[];
        clearingActionType: SelectedClearingEnum;
    }
}

export interface DeactivateClearingsAction {
    type: 'DEACTIVATE_CLEARINGS'
}

export interface SelectClearingAction {
    type: 'SELECT_CLEARING',
    payload: {
        clearingId: number
    }
}

export type ClearingActionsType = ActivateClearingsAction
    | DeactivateClearingsAction
    | SelectClearingAction;