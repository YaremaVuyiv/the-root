import { Reducer } from "redux";
import { SlotActions, UPDATE_SLOT } from "./actions";
import { initialState, SlotsState } from "./model/SlotsState";

export const slotsReducer: Reducer<SlotsState, SlotActions> = (state: SlotsState = initialState, action: SlotActions): SlotsState => {
    const nextState = { ...state };
    switch (action.type) {
        case UPDATE_SLOT: {
            nextState.byId[action.payload.slotId].type = action.payload.slotType;
            return nextState;
        }
    }
    return nextState;
}