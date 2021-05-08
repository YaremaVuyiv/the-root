import { combineReducers, createStore } from "redux";
import { clearingsReducer } from './Clearings/ClearingsReducer';
import { slotsReducer } from './Slots/SlotsReducer';
import { factionsReducer } from './Factions/FactionsReducer';

export const mainReducer = combineReducers({
    clearingsReducer,
    slotsReducer,
    factionsReducer
});
export type AppState = ReturnType<typeof mainReducer>;
export const store = createStore(mainReducer);