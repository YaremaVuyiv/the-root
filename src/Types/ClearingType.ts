import { ClearingTypeEnum } from "../Enums/ClearingType";
import { Faction } from "../Enums/Faction";

export type ClearingType = {
  id: string;
  left: number;
  top: number;
  type: ClearingTypeEnum;
  slotIds: string[];
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
  id: string;
  left: number;
  top: number;
  type: ClearingTypeEnum;
  slotIds: string[];
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
    this.id = clearing.id;
    this.left = clearing.left;
    this.top = clearing.top;
    this.type = clearing.type;
    this.slotIds = clearing.slotIds;
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

  getWarriorTypes(): Faction[] {
    const factions: Faction[] = [];
    if (this.catWarriorsNumber > 0) {
      factions.push(Faction.MarquiseDeCat);
    }

    if (this.birdWarriorsNumber > 0) {
      factions.push(Faction.EyrieDynasties);
    }

    if (this.allianceWarriorsNumber > 0) {
      factions.push(Faction.WoodlandAllianse);
    }

    return factions;
  }

  getFactionWarriors(faction: Faction) {
    switch (faction) {
      case Faction.MarquiseDeCat:
        return this.catWarriorsNumber;
      case Faction.EyrieDynasties:
        return this.birdWarriorsNumber;
      case Faction.WoodlandAllianse:
        return this.allianceWarriorsNumber;
    }
  }
}