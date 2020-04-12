import { ClearingTypeEnum } from "../Enums/ClearingType";
import { SlotTypeEnum } from "../Enums/SlotType";
import { ClearingType, Clearing } from "../Types/ClearingType";

export default {
  'clearing1': new Clearing({
    left: 5,
    top: 7,
    woodTokenNumber: 0,
    hasKeepToken: true,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.fox,
    key: 1,
    connectedClearings: [
      'clearing1',
      'clearing3',
      'clearing6'
    ],
    slots:{
      'slot1': {
        left: 20,
    top: 32,
    type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing2': new Clearing({
    left: 4,
    top: 35,
    woodTokenNumber: 2,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.mouse,
    key: 2,
    connectedClearings: [
      'clearing1',
      'clearing3',
      'clearing6'
    ],
    slots: {
      'slot2': {
        left: 23,
        top: 72,
        type: SlotTypeEnum.empty
      },
      'slot3': {
        left: 61,
        top: 1,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing3': new Clearing({
    key: 3,
    left: 5,
    top: 76,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.rabbit,
    connectedClearings: [
      'clearing2',
      'clearing6',
      'clearing7'
    ],
    slots: {
      'slot4': {
        left: 71,
        top: 26,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing4': new Clearing({
    key: 4,
    left: 48,
    top: 3,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.rabbit,
    connectedClearings: [
      'clearing1',
      'clearing10'
    ],
    slots: {
      'slot5': {
        left: 14,
        top: 23,
        type: SlotTypeEnum.empty
      },
      'slot6': {
        left: 61,
        top: 17,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing5': new Clearing({
    key: 5,
    left: 36,
    top: 23,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.rabbit,
    connectedClearings: [
      'clearing1',
      'clearing6',
      'clearing10'
    ],
    slots: {
      'slot7': {
        left: 7,
        top: 13,
        type: SlotTypeEnum.empty
      },
      'slot8': {
        left: 55,
        top: 73,
        type: SlotTypeEnum.ruin
      }
    }
  }),
  'clearing6': new Clearing({
    key: 6,
    left: 26,
    top: 49,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.fox,
    connectedClearings: [
      'clearing2',
      'clearing3',
      'clearing5',
      'clearing8',
      'clearing9'
    ],
    slots: {
      'slot9': {
        left: 64,
        top: 29,
        type: SlotTypeEnum.ruin
      },
      'slot10': {
        left: 29,
        top: 67,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing7': new Clearing({
    key: 7,
    left: 31,
    top: 81,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.fox,
    connectedClearings: [
      'clearing3',
      'clearing9'
    ],
    slots: {
      'slot11': {
        left: 59,
        top: 11,
        type: SlotTypeEnum.empty
      },
      'slot12': {
        left: 45,
        top: 59,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing8': new Clearing({
    key: 8,
    left: 57,
    top: 42,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 5,
    birdWarriorsNumber: 5,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.mouse,
    connectedClearings: [
      'clearing6',
      'clearing11',
      'clearing12'
    ],
    slots: {
      'slot13': {
        left: 25,
        top: 10,
        type: SlotTypeEnum.empty
      },
      'slot14': {
        left: 56,
        top: 35,
        type: SlotTypeEnum.empty
      },
      'slot15': {
        left: 21,
        top: 62,
        type: SlotTypeEnum.ruin
      }
    }
  }),
  'clearing9': new Clearing({
    key: 9,
    left: 52,
    top: 70,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.mouse,
    hasSupportToken: true,
    connectedClearings: [
      'clearing6',
      'clearing7',
      'clearing12'
    ],
    slots: {
      'slot16': {
        left: 37,
        top: 8,
        type: SlotTypeEnum.empty
      },
      'slot17': {
        left: 9,
        top: 54,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing10': new Clearing({
    key: 10,
    left: 81,
    top: 17,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.mouse,
    connectedClearings: [
      'clearing4',
      'clearing5',
      'clearing11'
    ],
    slots: {
      'slot18': {
        left: 38,
        top: 23,
        type: SlotTypeEnum.empty
      },
      'slot19': {
        left: 57,
        top: 62,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing11': new Clearing({
    key: 11,
    left: 84,
    top: 45,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 0,
    birdWarriorsNumber: 0,
    allianceWarriorsNumber: 0,
    type: ClearingTypeEnum.fox,
    connectedClearings: [
      'clearing8',
      'clearing10',
      'clearing12'
    ],
    slots: {
      'slot20': {
        left: 48,
        top: 11,
        type: SlotTypeEnum.ruin
      },
      'slot21': {
        left: 9,
        top: 53,
        type: SlotTypeEnum.empty
      }
    }
  }),
  'clearing12': new Clearing({
    key: 12,
    left: 77,
    top: 80,
    woodTokenNumber: 0,
    hasKeepToken: false,
    hasSupportToken: false,
    hasWagabond: false,
    catWarriorsNumber: 1,
    birdWarriorsNumber: 2,
    allianceWarriorsNumber: 3,
    type: ClearingTypeEnum.rabbit,
    connectedClearings: [
      'clearing8',
      'clearing9',
      'clearing11'
    ],
    slots: {
      'slot22': {
        left: 19,
        top: 34,
        type: SlotTypeEnum.empty
      }
    }
  })
}