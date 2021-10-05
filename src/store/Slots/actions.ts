import { Action } from "redux";
import { SlotTypeEnum } from "../../Enums/SlotTypeEnum";

export const UPDATE_SLOT = 'UPDATE_SLOT';

interface UpdateSlotAction extends Action<string> {
    type: 'UPDATE_SLOT',
    payload: {
        slotId: number,
        slotType: SlotTypeEnum
    }
}

export type SlotActions = UpdateSlotAction;