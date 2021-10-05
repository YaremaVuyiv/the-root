import { Reducer } from "redux";
import { ADD_EYRIETABLET_BATTLE,
     ADD_EYRIETABLET_BUILD,
     ADD_EYRIETABLET_MOVEMENT,
    ADD_EYRIETABLET_RECRUIT, EyrieTabletActions } from "./actions";
import { EyrieTabletState, initialState } from "./EyrieTabletState";

export const eyrieTabletReducer: Reducer<EyrieTabletState, EyrieTabletActions> = (
    state: EyrieTabletState = initialState,
    action: EyrieTabletActions): EyrieTabletState => {
    const nextState: EyrieTabletState = {...state};
    switch (action.type) {
        case ADD_EYRIETABLET_MOVEMENT: {
            nextState.moveList.push(action.payload);
            break;
        }
        case ADD_EYRIETABLET_RECRUIT: {
            nextState.recruitList.push(action.payload);
            break;
        }
        case ADD_EYRIETABLET_BATTLE: {
            nextState.battleList.push(action.payload);
            break;
        }
        case ADD_EYRIETABLET_BUILD: {
            nextState.buildList.push(action.payload);
            break;
        }
    }

    return nextState;
}