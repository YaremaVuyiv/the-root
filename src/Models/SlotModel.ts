import { SlotTypeEnum } from "../Enums/SlotType";
import { Faction } from "../Enums/Faction";
import { LocationTypeEnum } from "../Enums/LocationTypeEnum";

export type SlotModel = {
    id: string;
    slotType: SlotTypeEnum,
    locationType: LocationTypeEnum,
    fractionType: Faction;
}