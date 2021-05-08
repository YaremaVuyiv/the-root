import { SlotTypeEnum } from "../../../Enums/SlotTypeEnum";

export interface SlotsState {
    byId: SlotsDictionary
}

type SlotsDictionary = {
    [id: number]: Slot
}

interface Slot {
    id: number;
    left: number;
    top: number;
    type: SlotTypeEnum;
}

export const initialState: SlotsState = {
    byId: {
        1: {
            id: 1,
            left: 20,
            top: 32,
            type: SlotTypeEnum.empty
        },
        2: {
            id: 2,
            left: 23,
            top: 72,
            type: SlotTypeEnum.empty
        },
        3: {
            id: 3,
            left: 61,
            top: 1,
            type: SlotTypeEnum.empty
        },
        4: {
            id: 4,
            left: 71,
            top: 26,
            type: SlotTypeEnum.empty
        },
        5: {
            id: 5,
            left: 14,
            top: 23,
            type: SlotTypeEnum.empty
        },
        6: {
            id: 6,
            left: 61,
            top: 17,
            type: SlotTypeEnum.empty
        },
        7: {
            id: 7,
            left: 7,
            top: 13,
            type: SlotTypeEnum.empty
        },
        8: {
            id: 8,
            left: 55,
            top: 73,
            type: SlotTypeEnum.ruin
        },
        9: {
            id: 9,
            left: 64,
            top: 29,
            type: SlotTypeEnum.ruin
        },
        10: {
            id: 10,
            left: 29,
            top: 67,
            type: SlotTypeEnum.recruiter
        },
        11: {
            id: 11,
            left: 59,
            top: 11,
            type: SlotTypeEnum.empty
        },
        12: {
            id: 12,
            left: 45,
            top: 59,
            type: SlotTypeEnum.empty
        },
        13: {
            id: 13,
            left: 25,
            top: 10,
            type: SlotTypeEnum.empty
        },
        14: {
            id: 14,
            left: 56,
            top: 35,
            type: SlotTypeEnum.empty
        },
        15: {
            id: 15,
            left: 21,
            top: 62,
            type: SlotTypeEnum.ruin
        },
        16: {
            id: 16,
            left: 37,
            top: 8,
            type: SlotTypeEnum.empty
        },
        17: {
            id: 17,
            left: 9,
            top: 54,
            type: SlotTypeEnum.empty
        },
        18: {
            id: 18,
            left: 38,
            top: 23,
            type: SlotTypeEnum.empty
        },
        19: {
            id: 19,
            left: 57,
            top: 62,
            type: SlotTypeEnum.empty
        },
        20: {
            id: 20,
            left: 48,
            top: 11,
            type: SlotTypeEnum.ruin
        },
        21: {
            id: 21,
            left: 9,
            top: 53,
            type: SlotTypeEnum.ruin
        },
        22: {
            id: 22,
            left: 19,
            top: 34,
            type: SlotTypeEnum.ruin
        }
    }
}