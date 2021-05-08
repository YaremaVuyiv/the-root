import { SlotTypeEnum } from "../Enums/SlotTypeEnum";

export type SlotType = {
  id: string;
  left: number;
  top: number;
  type: SlotTypeEnum;
}

export class Slot {
  id: string;
  left: number;
  top: number;
  type: SlotTypeEnum;

  constructor(slot: SlotType) {
    this.id = slot.id;
    this.left = slot.left;
    this.top = slot.top;
    this.type = slot.type;
  }
}