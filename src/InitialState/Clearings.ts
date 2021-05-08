import { ClearingTypeEnum } from "../Enums/ClearingType";
import { Clearing } from "../Types/ClearingType";

export default {
  'clearing1': new Clearing({
    id: 'clearing1',
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
    slotIds: ['slot1']
  }),
  'clearing2': new Clearing({
    id: 'clearing2',
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
    slotIds: [
      'slot2',
      'slot3'
    ]
  }),
  'clearing3': new Clearing({
    id: 'clearing3',
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
    slotIds: [
      'slot4'
    ]
  }),
  'clearing4': new Clearing({
    id: 'clearing4',
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
    slotIds: [
      'slot5',
      'slot6'
    ]
  }),
  'clearing5': new Clearing({
    id: 'clearing5',
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
    slotIds: [
      'slot7',
      'slot8'
    ]
  }),
  'clearing6': new Clearing({
    id: 'clearing6',
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
    slotIds: [
      'slot9',
      'slot10'
    ]
  }),
  'clearing7': new Clearing({
    id: 'clearing7',
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
    slotIds: [
      'slot11',
      'slot12'
    ]
  }),
  'clearing8': new Clearing({
    id: 'clearing8',
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
    slotIds: [
      'slot13',
      'slot14',
      'slot15'
    ]
  }),
  'clearing9': new Clearing({
    id: 'clearing9',
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
    slotIds: [
      'slot16',
      'slot17'
    ]
  }),
  'clearing10': new Clearing({
    id: 'clearing10',
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
    slotIds: [
      'slot18',
      'slot19'
    ]
  }),
  'clearing11': new Clearing({
    id: 'clearing11',
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
    slotIds: [
      'slot20',
      'slot21'
    ]
  }),
  'clearing12': new Clearing({
    id: 'clearing12',
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
    slotIds: [
      'slot22'
    ]
  })
}