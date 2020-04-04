import { SlotTypeEnum } from "../Enums/SlotType";
import { Fraction } from "../Enums/Fraction";
import { LocationTypeEnum } from "../Enums/LocationTypeEnum";

export type SlotModel = {
    id: string;
    slotType: SlotTypeEnum,
    locationType: LocationTypeEnum,
    fractionType: Fraction;
}