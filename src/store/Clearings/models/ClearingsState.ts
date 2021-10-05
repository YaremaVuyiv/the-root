import { ClearingTypeEnum } from "../../../Enums/ClearingType";
import { Faction } from "../../../Enums/Faction";

export interface ClearingsState {
    ids: number[],
    byId: ClearingsDictionary,
    selectedClearingId: number | null,
    clearingActionType: SelectedClearingEnum | null
}

export enum SelectedClearingEnum {
    movement,
    battle
}

export interface Clearing {
    id: number,
    leftLocation: number,
    topLocation: number,
    type: ClearingTypeEnum,
    connectedClearings: number[],
    isActive: boolean,
    dominanceFaction: Faction | null;
}

type ClearingsDictionary = {
    [id: number]: Clearing
}

export const initialState: ClearingsState = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    byId: {
        1: {
            id: 1,
            leftLocation: 5,
            topLocation: 7,
            type: ClearingTypeEnum.fox,
            connectedClearings: [2, 4 ,5],
            isActive: false,
            dominanceFaction: null,
        },
        2: {
            id: 2,
            leftLocation: 4,
            topLocation: 35,
            type: ClearingTypeEnum.mouse,
            connectedClearings: [1, 3, 6],
            isActive: false,
            dominanceFaction: null
        },
        3: {
            id: 3,
            leftLocation: 5,
            topLocation: 76,
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [2, 6, 7],
            isActive: false,
            dominanceFaction: null
        },
        4: {
            id: 4,
            leftLocation: 48,
            topLocation: 3,
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [1, 10],
            isActive: false,
            dominanceFaction: null
        },
        5: {
            id: 5,
            leftLocation: 36,
            topLocation: 23,
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [1, 6, 10],
            isActive: false,
            dominanceFaction: null
        },
        6: {
            id: 6,
            leftLocation: 26,
            topLocation: 49,
            type: ClearingTypeEnum.fox,
            connectedClearings: [2, 3, 5, 8, 9],
            isActive: false,
            dominanceFaction: null
        },
        7: {
            id: 7,
            leftLocation: 31,
            topLocation: 81,
            type: ClearingTypeEnum.fox,
            connectedClearings: [3, 9],
            isActive: false,
            dominanceFaction: null
        },
        8: {
            id: 8,
            leftLocation: 57,
            topLocation: 42,
            type: ClearingTypeEnum.mouse,
            connectedClearings: [6, 11, 12],
            isActive: false,
            dominanceFaction: null
        },
        9: {
            id: 9,
            leftLocation: 52,
            topLocation: 70,
            type: ClearingTypeEnum.mouse,
            connectedClearings: [6, 7, 12],
            isActive: false,
            dominanceFaction: null
        },
        10: {
            id: 10,
            leftLocation: 81,
            topLocation: 17,
            type: ClearingTypeEnum.mouse,
            connectedClearings: [4, 5, 11],
            isActive: false,
            dominanceFaction: null
        },
        11: {
            id: 11,
            leftLocation: 84,
            topLocation: 45,
            type: ClearingTypeEnum.fox,
            connectedClearings: [8, 10, 12],
            isActive: false,
            dominanceFaction: null
        },
        12: {
            id: 12,
            leftLocation: 77,
            topLocation: 80,
            type: ClearingTypeEnum.rabbit,
            connectedClearings: [8, 9, 11],
            isActive: false,
            dominanceFaction: null
        }
    },
    selectedClearingId: null,
    clearingActionType: null
}