import { ClearingTypeEnum } from "../../../Enums/ClearingType";
import { Faction } from "../../../Enums/Faction";
import { TokenType } from "../../../Enums/TokenTypeEnum";

export interface ClearingsState {
    ids: number[],
    byId: ClearingsDictionary,
    selectedClearingId: number | null
}

export interface Clearing {
    id: number,
    leftLocation: number,
    topLocation: number,
    tokens: Token[],
    warriors: Warrior[],
    type: ClearingTypeEnum,
    connectedClearings: number[],
    slotIds: number[],
    isActive: boolean
}

type ClearingsDictionary = {
    [id: number]: Clearing
}

interface Token {
    type: TokenType
}

interface Warrior {
    type: Faction
}

export const initialState: ClearingsState = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    byId: {
        1: {
            id: 1,
            leftLocation: 5,
            topLocation: 7,
            tokens: [],
            warriors: [
                {
                    type: Faction.MarquiseDeCat
                }
            ],
            type: ClearingTypeEnum.fox,
            connectedClearings: [2, 4 ,5],
            slotIds: [1],
            isActive: false
        },
        2: {
            id: 2,
            leftLocation: 4,
            topLocation: 35,
            tokens: [],
            warriors: [
                {
                    type: Faction.MarquiseDeCat
                },
                {
                    type: Faction.MarquiseDeCat
                }
            ],
            type: ClearingTypeEnum.mouse,
            connectedClearings: [1, 3, 6],
            slotIds: [2, 3],
            isActive: false
        },
        3: {
            id: 3,
            leftLocation: 5,
            topLocation: 76,
            tokens: [
                {
                    type: TokenType.support
                }
            ],
            warriors: [],
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [2, 6, 7],
            slotIds: [4],
            isActive: false
        },
        4: {
            id: 4,
            leftLocation: 48,
            topLocation: 3,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [1, 10],
            slotIds: [5, 6],
            isActive: false
        },
        5: {
            id: 5,
            leftLocation: 36,
            topLocation: 23,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [1, 6, 10],
            slotIds: [7, 8],
            isActive: false
        },
        6: {
            id: 6,
            leftLocation: 26,
            topLocation: 49,
            tokens: [],
            warriors: [
                {
                    type: Faction.EyrieDynasties
                }
            ],
            type: ClearingTypeEnum.fox,
            connectedClearings: [2, 3, 5, 8, 9],
            slotIds: [9, 10],
            isActive: false
        },
        7: {
            id: 7,
            leftLocation: 31,
            topLocation: 81,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.fox,
            connectedClearings: [3, 9],
            slotIds: [11, 12],
            isActive: false
        },
        8: {
            id: 8,
            leftLocation: 57,
            topLocation: 42,
            tokens: [],
            warriors: [
                {
                    type: Faction.MarquiseDeCat
                },
                {
                    type: Faction.MarquiseDeCat
                },
                {
                    type: Faction.MarquiseDeCat
                }
            ],
            type: ClearingTypeEnum.mouse,
            connectedClearings: [6, 11, 12],
            slotIds: [13, 14, 15],
            isActive: false
        },
        9: {
            id: 9,
            leftLocation: 52,
            topLocation: 70,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.mouse,
            connectedClearings: [6, 7, 12],
            slotIds: [16, 17],
            isActive: false
        },
        10: {
            id: 10,
            leftLocation: 81,
            topLocation: 17,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.mouse,
            connectedClearings: [4, 5, 11],
            slotIds: [18, 19],
            isActive: false
        },
        11: {
            id: 11,
            leftLocation: 84,
            topLocation: 45,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.fox,
            connectedClearings: [8, 10, 12],
            slotIds: [20, 21],
            isActive: false
        },
        12: {
            id: 12,
            leftLocation: 77,
            topLocation: 80,
            tokens: [],
            warriors: [],
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [8, 9, 11],
            slotIds: [22],
            isActive: false
        }
    },
    selectedClearingId: null
}