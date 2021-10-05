import { BuildingTypeEnum, RuinTypeEnum, SlotTypeEnum } from "../../../Enums/SlotTypeEnum";

export interface SlotsState {
    ids: number[];
    byId: SlotsDictionary;
}

type SlotsDictionary = {
    [id: number]: Slot
}

interface Slot {
    id: number;
    left: number;
    top: number;
    type: SlotTypeEnum | null;
    clearingId: number;
}

export const initialState: SlotsState = {
    ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    byId: {
        1: {
            id: 1,
            left: 20,
            top: 32,
            type: null,
            clearingId: 1
        },
        2: {
            id: 2,
            left: 23,
            top: 72,
            type: null,
            clearingId: 2
        },
        3: {
            id: 3,
            left: 61,
            top: 1,
            type: null,
            clearingId: 2
        },
        4: {
            id: 4,
            left: 71,
            top: 26,
            type: null,
            clearingId: 3
        },
        5: {
            id: 5,
            left: 14,
            top: 23,
            type: null,
            clearingId: 4
        },
        6: {
            id: 6,
            left: 61,
            top: 17,
            type: null,
            clearingId: 4
        },
        7: {
            id: 7,
            left: 7,
            top: 13,
            type: null,
            clearingId: 5
        },
        8: {
            id: 8,
            left: 55,
            top: 73,
            type: RuinTypeEnum.ruin,
            clearingId: 5
        },
        9: {
            id: 9,
            left: 64,
            top: 29,
            type: RuinTypeEnum.ruin,
            clearingId: 6
        },
        10: {
            id: 10,
            left: 29,
            top: 67,
            type: BuildingTypeEnum.recruiter,
            clearingId: 6
        },
        11: {
            id: 11,
            left: 59,
            top: 11,
            type: null,
            clearingId: 7
        },
        12: {
            id: 12,
            left: 45,
            top: 59,
            type: null,
            clearingId: 7
        },
        13: {
            id: 13,
            left: 25,
            top: 10,
            type: null,
            clearingId: 8
        },
        14: {
            id: 14,
            left: 56,
            top: 35,
            type: null,
            clearingId: 8
        },
        15: {
            id: 15,
            left: 21,
            top: 62,
            type: RuinTypeEnum.ruin,
            clearingId: 8
        },
        16: {
            id: 16,
            left: 37,
            top: 8,
            type: null,
            clearingId: 9
        },
        17: {
            id: 17,
            left: 9,
            top: 54,
            type: null,
            clearingId: 9
        },
        18: {
            id: 18,
            left: 38,
            top: 23,
            type: null,
            clearingId: 10
        },
        19: {
            id: 19,
            left: 57,
            top: 62,
            type: null,
            clearingId: 10
        },
        20: {
            id: 20,
            left: 48,
            top: 11,
            type: RuinTypeEnum.ruin,
            clearingId: 11
        },
        21: {
            id: 21,
            left: 9,
            top: 53,
            type: RuinTypeEnum.ruin,
            clearingId: 11
        },
        22: {
            id: 22,
            left: 19,
            top: 34,
            type: RuinTypeEnum.ruin,
            clearingId: 12
        }
    }
}