import { Faction } from "../../Enums/Faction";

export const UPDATE_CRAFTING_ITEM = "UPDATE_CRAFTING_ITEM"

interface UpdateCraftingItemAction {
    type: "UPDATE_CRAFTING_ITEM",
    payload: {
        craftingItemId: number,
        faction: Faction
    }
}

export type CraftingItemsActions = UpdateCraftingItemAction;