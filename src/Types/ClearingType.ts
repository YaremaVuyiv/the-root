import { ClearingTypeEnum } from "../Enums/ClearingType";
import { SlotDictionaryType } from "./SlotDictionaryType";

export type ClearingType = {
    left: number;
    top: number;
    type: ClearingTypeEnum;
    slots: SlotDictionaryType;
    key: number;
    hasSupportToken: boolean;
    hasKeepToken: boolean;
    woodTokenNumber: number;
    hasWagabond: boolean;
    catWarriorsNumber: number;
    birdWarriorsNumber: number;
    allianceWarriorsNumber: number;
  }