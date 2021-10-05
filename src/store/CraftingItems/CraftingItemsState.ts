import { CraftingItemTypeEnum } from "../../Enums/CraftingItemTypeEnum";
import { Faction } from "../../Enums/Faction";

export interface CraftingItemsState {
    ids: number[],
    byId: CraftingItemsDictionary,
}

interface CraftingItem {
    id: number;
    faction: Faction | null;
    itemType: CraftingItemTypeEnum;
}

interface CraftingItemsDictionary {
    [id: number]: CraftingItem;
}

export const initialState: CraftingItemsState = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    byId: {
        1: {
            id: 1,
            faction: Faction.MarquiseDeCat,
            itemType: CraftingItemTypeEnum.bag
        },
        2: {
            id: 2,
            faction: null,
            itemType: CraftingItemTypeEnum.bag
        },
        3: {
            id: 3,
            faction: null,
            itemType: CraftingItemTypeEnum.boot
        },
        4: {
            id: 4,
            faction: null,
            itemType: CraftingItemTypeEnum.boot
        },
        5: {
            id: 5,
            faction: null,
            itemType: CraftingItemTypeEnum.crossbow
        },
        6: {
            id: 6,
            faction: null,
            itemType: CraftingItemTypeEnum.hammer
        },
        7: {
            id: 7,
            faction: Faction.EyrieDynasties,
            itemType: CraftingItemTypeEnum.sword
        },
        8: {
            id: 8,
            faction: Faction.WoodlandAllianse,
            itemType: CraftingItemTypeEnum.sword
        },
        9: {
            id: 9,
            faction: Faction.MarquiseDeCat,
            itemType: CraftingItemTypeEnum.teapot
        },
        10: {
            id: 10,
            faction: null,
            itemType: CraftingItemTypeEnum.teapot
        },
        11: {
            id: 11,
            faction: null,
            itemType: CraftingItemTypeEnum.money
        },
        12: {
            id: 12,
            faction: Faction.EyrieDynasties,
            itemType: CraftingItemTypeEnum.money
        },
    }
}