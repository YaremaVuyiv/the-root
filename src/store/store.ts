import { combineReducers, createStore } from "redux";
import { clearingsReducer } from './Clearings/ClearingsReducer';
import { slotsReducer } from './Slots/SlotsReducer';
import { factionsReducer } from './Factions/FactionsReducer';
import { clearingWarriorsReducer } from './ClearingWarriors/ClearingWarriorsReducer';
import { clearingTokensReducer } from './ClearingTokens/ClearingTokensReducer';
import { eyrieTabletReducer } from './EyrieTablet/EyrieTabletReducer';
import { craftingItemsReducer } from "./CraftingItems/CraftingItemsReducer";

export const mainReducer = combineReducers({
    factionsReducer,
    clearingsReducer,
    slotsReducer,
    clearingWarriorsReducer,
    clearingTokensReducer,
    eyrieTabletReducer,
    craftingItemsReducer
});
export type AppState = ReturnType<typeof mainReducer>;
export const store = createStore(mainReducer);