import { Reducer } from "redux";
import { CraftingItemsActions, UPDATE_CRAFTING_ITEM } from "./actions";
import { CraftingItemsState, initialState } from "./CraftingItemsState";

export const craftingItemsReducer: Reducer<CraftingItemsState, CraftingItemsActions> = (
    state: CraftingItemsState = initialState,
    action: CraftingItemsActions): CraftingItemsState => {
    const nextState: CraftingItemsState = {...state};
    switch (action.type) {
        case UPDATE_CRAFTING_ITEM: {
            nextState.byId[action.payload.craftingItemId].faction = action.payload.faction;
            break;
        }
    }

    return nextState;
}