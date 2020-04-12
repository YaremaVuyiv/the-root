import { Faction } from "../Enums/Faction";
import { ClearingDictionaryType } from "./ClearingDictionaryType";
import { SlotTypeEnum } from "../Enums/SlotType";

export function canRecruit(fraction: Faction, clearings: ClearingDictionaryType, clearingId: string) : boolean {
    const clearing = clearings[clearingId];
    let canRecruit = false;
    
    switch (fraction) {
        case Faction.MarquiseDeCat:
            for (let slotId in clearing.slots) {
                canRecruit = canRecruit || clearing.slots[slotId].type === SlotTypeEnum.recruiter
            }
            break;
        case Faction.EyrieDynasties:
            for (let slotId in clearing.slots) {
                canRecruit = canRecruit || clearing.slots[slotId].type === SlotTypeEnum.nest
            }
            break;
    }

    return canRecruit;
}