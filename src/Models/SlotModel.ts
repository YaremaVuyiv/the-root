import { SlotTypeEnum } from "../Enums/SlotTypeEnum";
import { Faction } from "../Enums/Faction";

export type SlotModel = {
    id: string;
    slotType: SlotTypeEnum,
    fractionType: Faction;
}