import { ClearingTypeEnum } from "../Enums/ClearingType";
import { SlotDictionaryType } from "./SlotDictionaryType";
import { SlotTypeEnum } from "../Enums/SlotType";
import { Faction } from "../Enums/Faction";

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
  connectedClearings: string[];
}

export class Clearing {
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
  connectedClearings: string[];

  constructor(clearing: ClearingType
  ) {
    this.left = clearing.left;
    this.top = clearing.top;
    this.type = clearing.type;
    this.slots = clearing.slots;
    this.key = clearing.key;
    this.hasSupportToken = clearing.hasSupportToken;
    this.hasKeepToken = clearing.hasKeepToken;
    this.woodTokenNumber = clearing.woodTokenNumber;
    this.hasWagabond = clearing.hasWagabond;
    this.catWarriorsNumber = clearing.catWarriorsNumber;
    this.birdWarriorsNumber = clearing.birdWarriorsNumber;
    this.allianceWarriorsNumber = clearing.allianceWarriorsNumber;
    this.connectedClearings = clearing.connectedClearings;
  }

  getCatPiecesNumber(): number {
    var result = this.catWarriorsNumber;
    for (let slotId in this.slots) {
      result += +(this.slots[slotId].type === SlotTypeEnum.recruiter);
      result += +(this.slots[slotId].type === SlotTypeEnum.sawmill);
      result += +(this.slots[slotId].type === SlotTypeEnum.workshop);
    }

    return result;
  }

  getBirdPiecesNumber(): number {
    var result = this.birdWarriorsNumber;
    for (let slotId in this.slots) {
      result += +(this.slots[slotId].type === SlotTypeEnum.nest);
    }

    return result;
  }

  getWarriorTypes() : Faction[] {
    const factions: Faction[] = [];
    if (this.catWarriorsNumber > 0) {
      factions.push(Faction.MarquiseDeCat);
    }

    if(this.birdWarriorsNumber > 0) {
      factions.push(Faction.EyrieDynasties);
    }

    if(this.allianceWarriorsNumber > 0) {
      factions.push(Faction.WoodlandAllianse);
    }

    return factions;
  }
}