import { Action } from "redux";

export const ACTIVATE_CLEARINGS = 'ACTIVATE_CLEARINGS';
export const DEACTIVATE_CLEARINGS = 'DEACTIVATE_CLEARINGS';
export const SELECT_CLEAING = 'SELECT_CLEARING';

export interface ActivateClearingsAction extends Action<string> {
    payload: number[];
}

export interface DeactivateClearingsAction extends Action<string> {
}

export interface SelectClearingAction extends Action<string> {
    id: number;
}

export type ClearingActionsType = ActivateClearingsAction
    | DeactivateClearingsAction
    | SelectClearingAction;