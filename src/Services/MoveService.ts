import { Faction } from "../Enums/Faction";
import { UpdateClearingWarriorAction, UpdateClearingWarriorType, AddClearingWarriorAction, AddClearingWarriorType } from "../store/ClearingWarriors/actions";
import { AppState, store } from "../store/store";

const moveWarriors = (fromClearingId: number,
    toClearingId: number,
    warriorsCount: number,
    warriorsFaction: Faction): void => {
    const storeState: AppState = store.getState();
    const clearingWarriors = storeState.clearingWarriorsReducer.ids
        .map(id => storeState.clearingWarriorsReducer.byId[id]);

    const fromIds = clearingWarriors
        .filter(x => x.clearingId === fromClearingId && x.faction === warriorsFaction);

    if (fromIds.length !== 1) {
        alert('there is some error with store, because from Id is not found')
    }

    const toIds = clearingWarriors
        .filter(x => x.clearingId === toClearingId && x.faction === warriorsFaction);

    if (toIds.length > 1) {
        alert('multiple sources of destination was found')
    }

    if (fromIds[0].warriorsNumber < warriorsCount) {
        alert('you try to move more warriors then possible');
        return;
    }

    if (toIds.length === 0) {
        const updateFromClearingWarriorAction: UpdateClearingWarriorAction = {
            type: UpdateClearingWarriorType,
            payload: {
                clearingWarriorsId: fromIds[0].id,
                warriorsCount: fromIds[0].warriorsNumber - warriorsCount
            }
        }
        store.dispatch(updateFromClearingWarriorAction);

        const addClearingWarriorAction: AddClearingWarriorAction = {
            type: AddClearingWarriorType,
            payload: {
                clearingId: toClearingId,
                clearingWarriorsId: clearingWarriors.length + 1,
                warriorsCount: warriorsCount,
                warriorsFaction: warriorsFaction
            }
        }
        store.dispatch(addClearingWarriorAction);
    }
    else {
        const updateFromClearingWarriorAction: UpdateClearingWarriorAction = {
            type: UpdateClearingWarriorType,
            payload: {
                clearingWarriorsId: fromIds[0].id,
                warriorsCount: fromIds[0].warriorsNumber - warriorsCount
            }
        }
        store.dispatch(updateFromClearingWarriorAction);

        const updateToClearingWarriorAction: UpdateClearingWarriorAction = {
            type: UpdateClearingWarriorType,
            payload: {
                clearingWarriorsId: toIds[0].id,
                warriorsCount: toIds[0].warriorsNumber + warriorsCount
            }
        }
        store.dispatch(updateToClearingWarriorAction);
    }
}

export default moveWarriors;