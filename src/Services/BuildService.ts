import { BuildingTypeEnum } from "../Enums/SlotTypeEnum";
import { SlotActions, UPDATE_SLOT } from "../store/Slots/actions";
import { store } from "../store/store";

const build = (
    slotId: number,
    buildingType: BuildingTypeEnum): void => {
    const slot = store.getState().slotsReducer.byId[slotId];
    if (slot.type !== null) {
        alert('you try to build this on wrong slot');
        return;
    }

    const updateSlotAction: SlotActions = {
        type: UPDATE_SLOT,
        payload: {
            slotId: slotId,
            slotType: buildingType
        }
    }

    store.dispatch(updateSlotAction);
}

export default build;